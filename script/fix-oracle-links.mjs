#!/usr/bin/env node
/**
 * Fix Starsmith oracle table flags and cross-table links for Ironsworn
 * character-sheet navigation (highlightOracle / compendium links).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const oraclePackDir = path.join(
	repoRoot,
	'json-packs/starsmith-expanded-oracles'
)
const oraclesJsPath = path.join(repoRoot, 'esmodules/oracles.js')
const legacyIdsPath = path.join(__dirname, 'starforged-oracle-legacy-ids.json')

const MODULE_ID = 'starsmith-expanded-oracles'
const PACK_NAME = 'starsmithexpandedoracles'

/** Goal (1–2) 81–90: roll on Starsmith Action/Theme tables, not core Starforged. */
const GOAL_12_ACTION_THEME =
	`@Compendium[${MODULE_ID}.${PACK_NAME}.OSpHuphKhIOcJy6e]{Action} + ` +
	`@Compendium[${MODULE_ID}.${PACK_NAME}.mgGRUu62QCdo0n2Z]{Theme}`

function loadOracleData() {
	const source = fs.readFileSync(oraclesJsPath, 'utf8')
	const match = source.match(/const oracleData = (\{[\s\S]*?\n\})\n\nfunction mergeOracleTrees/)
	if (!match) throw new Error('Could not parse oracleData from oracles.js')
	return Function(`return ${match[1]}`)()
}

function loadTableNames(oraclePackDir) {
	const names = new Map()
	for (const file of fs.readdirSync(oraclePackDir)) {
		if (!file.endsWith('.json')) continue
		const doc = JSON.parse(fs.readFileSync(path.join(oraclePackDir, file), 'utf8'))
		if (doc.formula != null && doc._id) names.set(doc._id, doc.name ?? doc._id)
	}
	return names
}

function titleFromKey(key) {
	return key
		.replace(/_starsmith$/, '')
		.split('_')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('_')
}

function buildTableMetadata(oracleData, tableNamesById) {
	const byId = new Map()

	function walk(node, pathParts) {
		for (const [key, value] of Object.entries(node)) {
			if (Array.isArray(value)) {
				const baseNames = value.map((id) => {
					const name = tableNamesById.get(id) ?? id
					return name.replace(/\s*\(\d+\s*-\s*\d+\)\s*$/, '')
				})
				if (baseNames.length > 1 && !baseNames.every((n) => n === baseNames[0])) {
					console.warn(
						`oracle tree key "${key}" mixes unrelated tables: ${baseNames.join(' | ')}`
					)
				}

				const dsidPath = [...pathParts, key].join('/')
				const dsid = `oracle_rollable:starforged/${dsidPath}`
				const category = `Starsmith/Oracles/${pathParts.map(titleFromKey).join('/')}`
				const dfid = `${category}/${titleFromKey(key)}`

				for (const id of value) {
					byId.set(id, { dsid, dfid, category })
				}
			} else {
				walk(value, [...pathParts, key])
			}
		}
	}

	walk(oracleData, [])
	return byId
}

function buildDfidToDsid() {
	const legacy = JSON.parse(fs.readFileSync(legacyIdsPath, 'utf8'))
	return legacy
}

function fixLinkText(text, dfidToDsid) {
	let out = text

	// Foundry v11+ compendium syntax: no document type in the path.
	out = out.replace(
		new RegExp(`@Compendium\\[${MODULE_ID}\\.${PACK_NAME}\\.RollTable\\.([A-Za-z0-9]+)\\]`, 'g'),
		`@Compendium[${MODULE_ID}.${PACK_NAME}.$1]`
	)

	// oracle-category-link: data-dfid → data-dsid (required by foundry-ironsworn click handler).
	out = out.replace(
		/data-dfid="([^"]+)"/g,
		(_match, dfid) => {
			const dsid = dfidToDsid[dfid]
			if (!dsid) {
				console.warn(`  unknown dfid: ${dfid}`)
				return _match
			}
			return `data-dsid="${dsid}"`
		}
	)

	return out
}

function isRollTable(doc) {
	return doc.formula != null && doc.results != null
}

function processFile(filePath, tableMeta, dfidToDsid) {
	const raw = fs.readFileSync(filePath, 'utf8')
	const doc = JSON.parse(raw)
	let changed = false

	if (isRollTable(doc)) {
		const meta = tableMeta.get(doc._id)
		if (meta) {
			const flags = doc.flags?.['foundry-ironsworn'] ?? {}
			if (
				flags.dsid !== meta.dsid ||
				flags.dfid !== meta.dfid ||
				flags.category !== meta.category
			) {
				doc.flags = doc.flags ?? {}
				doc.flags['foundry-ironsworn'] = {
					dfid: meta.dfid,
					category: meta.category,
					dsid: meta.dsid
				}
				changed = true
			}
		}

		if (doc.description) {
			const fixed = fixLinkText(doc.description, dfidToDsid)
			if (fixed !== doc.description) {
				doc.description = fixed
				changed = true
			}
		}

		for (const result of doc.results ?? []) {
			if (!result.text) continue

			let text = fixLinkText(result.text, dfidToDsid)

			// Goal (1–2) uses Starsmith Action + Theme tables at 81–90.
			if (
				doc._id === '2xxntLbzYGLZ2cao' &&
				result.range?.[0] === 81 &&
				result.range?.[1] === 90
			) {
				text = GOAL_12_ACTION_THEME
			}

			if (text !== result.text) {
				result.text = text
				changed = true
			}
		}
	}

	if (changed) {
		fs.writeFileSync(filePath, `${JSON.stringify(doc, null, 2)}\n`)
	}
	return changed
}

const oracleData = loadOracleData()
const tableNamesById = loadTableNames(oraclePackDir)
const tableMeta = buildTableMetadata(oracleData, tableNamesById)
const dfidToDsid = buildDfidToDsid()

let updated = 0
for (const name of fs.readdirSync(oraclePackDir)) {
	if (!name.endsWith('.json')) continue
	const filePath = path.join(oraclePackDir, name)
	if (processFile(filePath, tableMeta, dfidToDsid)) {
		updated++
		console.log(`updated ${name}`)
	}
}

console.log(`\nDone. Updated ${updated} files; ${tableMeta.size} tables mapped in oracle tree.`)
