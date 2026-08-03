#!/usr/bin/env node
/**
 * Convert single "Roll twice" text results into two document results that
 * reference the same roll table (Foundry rolls twice on overlapping ranges).
 */
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const jsonPacksRoot = path.join(__dirname, '../json-packs')

const MODULE = 'starsmith-expanded-oracles'

/** Per-compendium pack configuration. */
const PACKS = [
	{
		dir: 'starsmith-expanded-oracles',
		compendium: 'starsmithexpandedoracles',
		skipTableIds: new Set([
			'AVjqygbVDncdAY0P', // Research: Field Of Study
			'KAFl5CXZdfKUmt9J', // Religious: Role
			'HvKV3pycO2gyqB92', // Military: Specialty
			'u1MRVAikLO9ZUn05', // AI Hive: Prime Directive
			'FDvT6fPqV2zshZRQ', // Corporation: Field
			'IQxQ2I356Vz0TSGB', // Data Harvesters: Role
			'LDZn0zQu8ZUERzyw' // Anomaly Effect (1 - 2)
		])
	},
	{
		dir: 'starsmith-cultures-oracles',
		compendium: 'starsmithculturesoracles',
		skipTableIds: new Set()
	}
]

function isRollTwiceDescription(desc) {
	if (!desc) return false
	const plain = desc.replace(/<\/?p>/gi, '').trim()
	return plain.toLowerCase() === 'roll twice'
}

function genId(existing) {
	const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	do {
		let id = ''
		const bytes = crypto.randomBytes(16)
		for (let i = 0; i < 16; i++) id += chars[bytes[i] % chars.length]
		if (!existing.has(id)) return id
	} while (true)
}

function documentUuid(tableId, compendium) {
	return `Compendium.${MODULE}.${compendium}.RollTable.${tableId}`
}

function makeDocumentResult(result, tableId, tableName, id, compendium) {
	return {
		range: [...result.range],
		_id: id,
		type: 'document',
		weight: result.weight ?? 1,
		drawn: false,
		flags: {},
		img: result.img ?? 'icons/dice/d10black.svg',
		_stats: result._stats ?? {
			coreVersion: '13.351',
			systemId: null,
			systemVersion: null,
			createdTime: null,
			modifiedTime: null,
			lastModifiedBy: null,
			compendiumSource: null,
			duplicateSource: null,
			exportSource: null
		},
		description: '<p>Roll twice</p>',
		name: tableName,
		documentUuid: documentUuid(tableId, compendium),
		_key: `!tables.results!${tableId}.${id}`
	}
}

function processTable(doc, compendium, skipTableIds) {
	const tableId = doc._id
	if (!tableId || skipTableIds.has(tableId)) return false

	const rollTwiceResults = (doc.results ?? []).filter((r) =>
		isRollTwiceDescription(r.description)
	)
	if (rollTwiceResults.length === 0) return false

	const documentRollTwice = rollTwiceResults.filter((r) => r.type === 'document')
	if (documentRollTwice.length >= 2) return false

	const existingIds = new Set(doc.results.map((r) => r._id))

	if (documentRollTwice.length === 1) {
		// One document row exists — add a second duplicate, remove any text duplicate.
		const first = documentRollTwice[0]
		const secondId = genId(existingIds)
		doc.results = doc.results.filter((r) => !isRollTwiceDescription(r.description) || r._id === first._id)
		doc.results.push(makeDocumentResult(first, tableId, doc.name, secondId, compendium))
		return true
	}

	// Single text (or other) roll-twice row — convert and duplicate.
	if (rollTwiceResults.length !== 1) {
		console.warn(`  skip ${tableId}: expected 1 roll-twice row, found ${rollTwiceResults.length}`)
		return false
	}

	const source = rollTwiceResults[0]
	const firstId = source._id ?? genId(existingIds)
	existingIds.add(firstId)
	const secondId = genId(existingIds)

	const converted = makeDocumentResult(source, tableId, doc.name, firstId, compendium)
	const duplicate = makeDocumentResult(source, tableId, doc.name, secondId, compendium)

	doc.results = doc.results.filter((r) => r !== source)
	doc.results.push(converted, duplicate)
	return true
}

let updated = 0
for (const { dir, compendium, skipTableIds } of PACKS) {
	const packDir = path.join(jsonPacksRoot, dir)
	if (!fs.existsSync(packDir)) continue

	for (const file of fs.readdirSync(packDir).sort()) {
		if (!file.endsWith('.json')) continue
		const filePath = path.join(packDir, file)
		const doc = JSON.parse(fs.readFileSync(filePath, 'utf8'))
		if (!doc.formula || !doc.results) continue
		if (!processTable(doc, compendium, skipTableIds)) continue
		fs.writeFileSync(filePath, `${JSON.stringify(doc, null, 2)}\n`)
		console.log(`updated ${dir}/${file}`)
		updated++
	}
}

console.log(`\nDone. Updated ${updated} tables.`)
