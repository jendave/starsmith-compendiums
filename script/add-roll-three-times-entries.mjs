#!/usr/bin/env node
/**
 * Convert single "Roll three times" text results into three document results
 * that reference the same roll table.
 */
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const packDir = path.join(__dirname, '../json-packs/starsmith-expanded-oracles')

const MODULE = 'starsmith-expanded-oracles'
const PACK = 'starsmithexpandedoracles'
const TARGET_COUNT = 3

function isRollThreeTimesDescription(desc) {
	if (!desc) return false
	const plain = desc.replace(/<\/?p>/gi, '').trim()
	return plain.toLowerCase() === 'roll three times'
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

function documentUuid(tableId) {
	return `Compendium.${MODULE}.${PACK}.RollTable.${tableId}`
}

function makeDocumentResult(source, tableId, tableName, id) {
	return {
		range: [...source.range],
		_id: id,
		type: 'document',
		weight: source.weight ?? 1,
		drawn: false,
		flags: {},
		img: source.img ?? 'icons/dice/d10black.svg',
		_stats: source._stats ?? {
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
		description: '<p>Roll three times</p>',
		name: tableName,
		documentUuid: documentUuid(tableId),
		_key: `!tables.results!${tableId}.${id}`
	}
}

function processTable(doc) {
	const tableId = doc._id
	if (!tableId || !doc.results) return false

	const rollThreeResults = doc.results.filter((r) =>
		isRollThreeTimesDescription(r.description)
	)
	if (rollThreeResults.length === 0) return false

	const documentResults = rollThreeResults.filter((r) => r.type === 'document')
	if (documentResults.length >= TARGET_COUNT) return false

	const existingIds = new Set(doc.results.map((r) => r._id))
	const source = rollThreeResults[0]

	// Remove all roll-three-times rows; rebuild exactly three document rows.
	doc.results = doc.results.filter((r) => !isRollThreeTimesDescription(r.description))

	const ids = []
	if (documentResults.length > 0) {
		ids.push(...documentResults.slice(0, TARGET_COUNT).map((r) => r._id))
	} else if (source._id) {
		ids.push(source._id)
	}

	while (ids.length < TARGET_COUNT) {
		const id = genId(existingIds)
		existingIds.add(id)
		ids.push(id)
	}

	for (const id of ids.slice(0, TARGET_COUNT)) {
		existingIds.add(id)
		doc.results.push(makeDocumentResult(source, tableId, doc.name, id))
	}

	return true
}

let updated = 0
for (const file of fs.readdirSync(packDir).sort()) {
	if (!file.endsWith('.json')) continue
	const filePath = path.join(packDir, file)
	const doc = JSON.parse(fs.readFileSync(filePath, 'utf8'))
	if (!doc.formula) continue
	if (!processTable(doc)) continue
	fs.writeFileSync(filePath, `${JSON.stringify(doc, null, 2)}\n`)
	console.log(`updated ${file}`)
	updated++
}

console.log(`\nDone. Updated ${updated} tables.`)
