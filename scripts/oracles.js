/*
# [0] Character Creation Uylg7OA7KprzNn9j
# [1] Characters EDUYGoTtXEMkKKvh
# [2] Core SW9eKiLhIBf4c0Km
# [3] Creatures RSG7ksc1DxCTpccr
# [4] Derelicts zBzW0zEkqjmtSZrH
# [5] Factions h07LKcgdKeSsWGQ2
# [6] Location Themes HhkNFM4BelwaXHfB
# [7] Misc EZdpqOZMdqwGsU7q
# [8] Moves 6cVVQY9tOQiVInzx
# [9] Planets xJpOuGNKKjAVrR3q
# [10] Settlements M0bP1WUZxPqCOHJS
# [11] Space 9aKg1x9pvKGwheVZ
# [12] Starships aO8e4enqhqWw25H6
# [13] Vaults N2sObuKzWFZ5LEU2
*/
Hooks.on("ready", async () => {
  await new Promise(r => setTimeout(r, 1000))
	const starforgedOracles = CONFIG.IRONSWORN.getOracleTree('starforged')
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0LirTYoCP3R8Dgzt'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Living: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0XWUJFkDOKtYBGpe'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0ccW0eVajV4NENbZ'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0gKPLApYlwxPhSaE'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Engineering: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0n1W7xeDuAVmLvNx'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0vFf0yYmD1Kdc9TC'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.1sLkhxEaVUaPy57w'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.2JAxDfpav0IlsZLK'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.2bbW8GapNrUbkBiD'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.2uFx0KwWCty8dBMm'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.3eZVI73pFd2Vq1Vn'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Research: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.3wgJC3d2grqpsm5I'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Operations: Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4AJ3CSAW3R38267w'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Access: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4Dp4wHxjlsAt4lt7'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4Jqgfo9tNEmg6SiL'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Community: Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4wVqFfxiMfxdj0oe'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.5R7eSgr0otB7ggVi'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.5esl8jSbsIyPkLZV'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.60DIGlrsawAmJuYR'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Production: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.6LLdhY15KByiIv8q'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.6l5Hqitvc4RFxpra'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.6qKWL6r9sN5h4fHg'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Living: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7A3TS1p0xJx9O8Ws'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Quick Flora First Look',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7JNNleZeFXvXs9Yv'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Location (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tKaPKKmKhxcgYflc'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Location (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.wJNYFJsFMbCW8F0L'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Location (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7utFAc8SiMTnUDyW'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'First Look (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4mtNdMOiPAWeLe1P'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'First Look (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.c6A4BvsaG6NOJdzf'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'First Look (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.VWKvi551JyShfjh0'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Initial Contact (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ybOIRl97yeUfvAtM'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Initial Contact (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.NDOz35Zb8qn96VKd'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Initial Contact (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.CnErGVHLpgxKqNTB'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Authority (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aI2wtdKOQvG0pZBY'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Authority (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.eKDmSpdyzwRM7ydc'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Authority (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.zMTlB0xQZyEc8PtQ'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Settlement Projects (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.iJbLrynKmB25yxKu'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Settlement Projects (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.wPh8ecvQZvyebiE0'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Settlement Projects (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tNudiYQ7dnUpeONr'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Settlement Trouble (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.rd2ZCaZFUEhca5lp'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Settlement Trouble (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LpumgIbgDG8wRdso'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Settlement Trouble (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.W6VGcvzStPUK4Yyc'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Settlement Name (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.G6mXIbtSkacs9660'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Settlement Name (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.iZtujTpGpTw5tMO4'],
        children: []
      })
  starforgedOracles.children[10].children.push({
        displayName: 'Settlement Name (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ce7JLAwBAGqLYgHo'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.8NCFv7yLKaxIjARl'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Medical: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.93LcFghu4VA3VTmW'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.9wCWNV5mg80zJCzz'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Access: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.9wn19PGDzUPZ0WYZ'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.AtmwcrDFmiL5KiZY'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.BdbEFPelmQqkGDxs'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.BrE1gQtsBLvg9tSx'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Inner First Look (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.CJlBnWFAMRRSD2XK'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Inner First Look (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.otjCnngJ1Yw74rjt'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Inner First Look (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7c2TaEWTUaaJlOdG'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Interior Feature (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.GiMZuPESMrzCW4sO'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Interior Feature (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.JAM3ft7utYoihnlf'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Interior Feature (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0DWXYSJfD5kotHW3'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Interior Peril (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4DINDAOyS576i0uC'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Interior Peril (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.CO2a43NmZ4Ui8KHr'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Interior Peril (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.O7AobPhngMyKVX0u'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Interior Opportunity (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.FKcW0ngd4tAteFul'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Interior Opportunity (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Q0CvTCMrIsZJPjW4'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Interior Opportunity (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.h9DmNX5Hw3OyNrB6'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Vault Purpose (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.hbSxvEVDrXKp3nfh'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Vault Purpose (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.f11tgzgGHAk3EF5H'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Vault Purpose (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jB7Jc9SEkxuhlH2g'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Sanctum Feature (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tMI4HdhdS3uPcQ7A'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Sanctum Feature (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.GA2VJG2Z4Pud10Xj'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Sanctum Feature (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.lMMPTGXOGCxKHj1n'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Sanctum Peril (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.U3zbLYTj8aYT7jZ5'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Sanctum Peril (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.C3UBEjh7hWTgY16S'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Sanctum Peril (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.E9NXVGkiTpxDLadk'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Sanctum Opportunity (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.6wZ3tNjg9YB24ksU'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Sanctum Opportunity (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.m2fmYWlfXiAkiGJM'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Sanctum Opportunity (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jNZY2f4GGlhdTxwj'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Form (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.qp0q4hCncEEwFmzJ'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Form (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.OnrAyLWl8O4X07DO'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Form (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.bVzSFWwcuPrZnzRI'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Shape (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ug2VXU0gTErEpqjW'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Shape (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.EOUhqXJNMURqmZ23'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Shape (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.XfLeKTFTNoNHJeFk'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Material (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.5w7WAG73eRo6P0BO'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Material (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.h7OkPCGMJmUncIJb'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Material (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.c5wad4ZSEmOKIbV0'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Outer First Look (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.zfHAVw0GLCDpURvp'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Outer First Look (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.8FM5A0pW9nomPpFW'],
        children: []
      })
  starforgedOracles.children[13].children.push({
        displayName: 'Outer First Look (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.v3VP3uJAEm5ILL8l'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Faction Type (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jrxDHQYEuB6XayQB'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Faction Type (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tvatzl8nPjjuAAgm'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Faction Type (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jAQFBWOxlwoqbkvz'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Dominion (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.SR2UXvMKVawDqzk4'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Dominion (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.AQ1jgsUYuEhA12Ju'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Dominion (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.CgfxgI13aErxbXod'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Dominion: Leadership (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.eAqohSRwBWwx7uy5'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Dominion: Leadership (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.A6v2rLoWS3xEAtam'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Dominion: Leadership (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.StGZjdeejoYDZFLN'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Guild (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.k3ylcTmv45qOhxMM'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Guild (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.39brIk5GOHXK0Gqw'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Guild (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.PDnjZEt9uprBcXoY'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Fringe Group (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.mhQqIfHi4ldU6lk3'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Fringe Group (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.UE6b4kAluQqrAGUO'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Fringe Group (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.yjYdyPveqyWUOgwF'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Corporation: Field',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.FDvT6fPqV2zshZRQ'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Military: Specialty',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.HvKV3pycO2gyqB92'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Religious: Role',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.KAFl5CXZdfKUmt9J'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Research: Field Of Study',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.AVjqygbVDncdAY0P'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'AI Hive: Prime Directive',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.u1MRVAikLO9ZUn05'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Data Harvesters: Role',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.IQxQ2I356Vz0TSGB'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Faction Projects (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.OwLUXvgCKzKEa1wr'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Faction Projects (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.69hcmdT5pjf2F1IU'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Faction Projects (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7VdNGiCm6peWzLMr'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Relationships (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Lh2QRYQ2jkRnEI4m'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Relationships (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tlrca4lQsFIZ8IwZ'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Relationships (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tRYvWAQqU7xkpJYu'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Legacy (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.JQlTpghFQFXDskkS'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Legacy (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.IHGdTmOVN1zloqmM'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Legacy (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.h9jxuC70RIV2YYod'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Affiliation (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Xl7mEaAISq6I8Q9x'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Affiliation (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DkdxtOPf0Kk45pIe'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Affiliation (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.1N106p7YNKKWr7HI'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Identity (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LhqLvU4wD2bZEicK'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Identity (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.OAITk7XvPcUBdDih'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Identity (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Yyi071quFTMjRybK'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Faction Quirks (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.000XYhjOoHW6hKAP'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Faction Quirks (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.P1Z2tq2DiGNUalkD'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Faction Quirks (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.bQjrwSHHyHC4BLNc'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Faction Rumors (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DOLQckJPOzfE8JzY'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Faction Rumors (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.yqA6hSUhfIGURMR2'],
        children: []
      })
  starforgedOracles.children[5].children.push({
        displayName: 'Faction Rumors (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.6hXWxSEdrjiY7K7f'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DZ27gXKmeNZvQBq8'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Community: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DZ9Kg7DYxnSGARKp'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DsGW7fo4iF64qhWf'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Production: Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DvXahtGuzoYnWYDZ'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.EjrmKEYy4ESfBo7C'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.EqSN5ENCg0MqyoCP'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.FFmsU2Mxni5t0kAV'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Operations: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.FJ3pwO45zt7McRK9'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Production: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.G1kgbuN1Cimyz0SE'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Opportunity Lifeless (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.H8uvbUai3jQTFjQF'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.HJcSLbX4pAVEhTms'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.IV7IsgbLgtpPJ0yp'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.JrTmSctB5pxFZJyb'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.K74TKszI8T8HTUId'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Peril Lifebearing (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.KD84vncPvRKsl4aG'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Registry Number Initializer Letters',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.byBI6d46QtVH1goo'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Registry Number Model',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ZlVBOz7v2GzEuXtW'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Starship Type (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LOqba6VziVXZDj0W'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Starship Type (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tioleBB8HuEWvzTi'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Starship Type (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.pBfCCKylt1qhAoPI'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Fleet (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.oC3tS7XQnb0aF5bo'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Fleet (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.VVwHG9fOYRad8p7o'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Fleet (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.8Lxuj8yNMgwbWIRo'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Initial Contact (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7bD2a8NrVeBXnlpJ'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Initial Contact (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.s9jstF4qimhTSDOT'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Initial Contact (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Zp5JgqKSBul72P88'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'First Look (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0L6dlLeVLJkMXhzY'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'First Look (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.9T2TFppaaAgFrT61'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'First Look (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.W0QM0miRxvJmVp2H'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Starship Mission Terminus (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.svjsxDT4R9rSH8YE'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Starship Mission Terminus (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.qd4UyfLFc16vUkEt'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Starship Mission Terminus (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.R3sSKQGqhjScKvsB'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Starship Mission Outlands (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.qCcHtfV0mIRKLQvp'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Starship Mission Outlands (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.8AY3xj8qpFIVfpak'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Starship Mission Outlands (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.g6wu6JxaxGRjpNoY'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Starship Mission Expanse (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.VirDtYNEzhVFJ1ei'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Starship Mission Expanse (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.eqAJAIUVoWx2blcp'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Starship Mission Expanse (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.wjJ8Qd2skumxAFNI'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Starship Name (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.6KaSYbplCYJ89v6C'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Starship Name (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.lXErrHKlwhOZooyR'],
        children: []
      })
  starforgedOracles.children[12].children.push({
        displayName: 'Starship Name (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.mJg13l6dbjIX8etC'],
        children: []
      })
  starforgedOracles.children[3].children.push({
        displayName: 'First Look (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.B639ZC5GB4q8pjr1'],
        children: []
      })
  starforgedOracles.children[3].children.push({
        displayName: 'First Look (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.gUUm4VyBeD9TAxBk'],
        children: []
      })
  starforgedOracles.children[3].children.push({
        displayName: 'First Look (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.K0dEKmbAL3UIV0hG'],
        children: []
      })
  starforgedOracles.children[3].children.push({
        displayName: 'Encountered Behavior (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.lKHbFR2SJbazZyMM'],
        children: []
      })
  starforgedOracles.children[3].children.push({
        displayName: 'Encountered Behavior (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LcRLOp7oBP2zOiIT'],
        children: []
      })
  starforgedOracles.children[3].children.push({
        displayName: 'Encountered Behavior (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.xOro3zYQOldpg6oK'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Lf2FvABUcYtgv6Ae'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Lfk0gDNUJecpYuRi'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'First Look (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.guv5iEDeLijYuABa'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'First Look (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.oTECxhDPRJJ3yUvh'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'First Look (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.MsQ7rPo2gDyVIQEE'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Initial Disposition (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Lu30o0Mx9Arwipnw'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Initial Disposition (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.rdlIztz01R6NIJKy'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Initial Disposition (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.gaRwLNFfm30VzuRo'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Character Role (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.O5x9KiSkoNAVXW6O'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Character Role (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.VEL6LI4wBzI8eb7z'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Character Role (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.437mrjVAePTQZGYv'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Character Goal (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.2xxntLbzYGLZ2cao'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Character Goal (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.oLDINu3MLyDgABhD'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Character Goal (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aqapGyFUQ1Jj9uQl'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Revealed Character Aspect (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.5JUVkMmXuH74WBUv'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Revealed Character Aspect (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.JhY6HtE1X1xSAJW5'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Revealed Character Aspect (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.cFmnWNEUaw8Lf3Qg'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Given Name (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.UnTcBB8gwFjNoT9O'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Given Name (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.dXJhMhBt7J2FtCVh'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Given Name (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.5acO6ocnsJerpEkI'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Callsign (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0zs4jV8AgYw1GaVB'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Callsign (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.iBgIwzZGGKTuCGpR'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Callsign (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vUTgxJRCAbApAZgi'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Family Name (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.6pv2fJdPmbl6HDGR'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Family Name (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.v5XqY7qSbXRuBIDR'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Family Name (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.lQR1PUQksmjUX2Fd'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Random NPC Conversation (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DxF8KMERydgfvtsQ'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Random NPC Conversation (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.xbNILPSGc3KQxIKD'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'Random NPC Conversation (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.1y69WUZsUjvYL5om'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'NPC Plot Knowledge: Type',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DA4SVnbbEzYCRIpf'],
        children: []
      })
  starforgedOracles.children[1].children.push({
        displayName: 'NPC Plot Knowledge: Topic',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.JEj8oBuwhiEFg5qM'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.MVnD2orENFUEJrOU'],
        children: []
      })
  starforgedOracles.children[8].children.push({
        displayName: 'Make A Discovery (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.N40PkK7FvfOOgWd1'],
        children: []
      })
  starforgedOracles.children[8].children.push({
        displayName: 'Make A Discovery (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.SfSqdbh63oluomwR'],
        children: []
      })
  starforgedOracles.children[8].children.push({
        displayName: 'Make A Discovery (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7q5Ex4s960gtaunC'],
        children: []
      })
  starforgedOracles.children[8].children.push({
        displayName: 'Confront Chaos (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.CJzOOTMuY0ybXS2U'],
        children: []
      })
  starforgedOracles.children[8].children.push({
        displayName: 'Confront Chaos (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.gdSfOA4kll28YIAF'],
        children: []
      })
  starforgedOracles.children[8].children.push({
        displayName: 'Confront Chaos (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.5kFcmtFv9P2GRH8s'],
        children: []
      })
  starforgedOracles.children[8].children.push({
        displayName: 'Pay The Price (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LEycAF6bXh6vOJ05'],
        children: []
      })
  starforgedOracles.children[8].children.push({
        displayName: 'Pay The Price (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jnBW4rcekjOFL5DL'],
        children: []
      })
  starforgedOracles.children[8].children.push({
        displayName: 'Pay The Price (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.uUtEx6wDCzRhMDth'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.N54KUtDcuuChzF3r'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Engineering: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.NAjhJFfOfnI4RUhG'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Quick Flora Characteristics',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.NtsgKYiw3MDWIRCY'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.O4WIISBXLxsJdOnU'],
        children: []
      })
  starforgedOracles.children[2].children.push({
        displayName: 'Action (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.OSpHuphKhIOcJy6e'],
        children: []
      })
  starforgedOracles.children[2].children.push({
        displayName: 'Action (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.EdMDbQ2rvj1kjsVw'],
        children: []
      })
  starforgedOracles.children[2].children.push({
        displayName: 'Action (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.P2eGB9bEuZtwAQxq'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Opportunity Lifebearing (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.P6GDb3IVTDA86AZP'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Pm2jNTRrEBT2xw8g'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Location Theme Type (1 - 3)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.PnbyoxQfgZdQ3AiU'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Location Theme Type (4 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LFxOkncnKTFTisw3'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Arid: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LfXTtfdk79cjfExo'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Arid: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.nBvFLLQmvnCvBApN'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Arid: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.qB6VRHyHz8h9UVAg'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Chronal: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.E3FNowqcuhoPBfO0'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Chronal: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aPKWBWjBMujwlLkO'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Chronal: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LUu4dLLMs5kXPDEe'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Floating: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0cb49aXSgIa3bzrK'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Floating: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.HTFxriwbDFoMcYLW'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Floating: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.AtqoQOiHw2S4sbUd'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Flooded: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.X0BVY0u1oEFvyrzx'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Flooded: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.74ke9AgaF8XXelLr'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Flooded: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.O39GKpnyMuyam9pl'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Frozen: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ZqubM8Y5GsmhsaKj'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Frozen: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.3uVKQgKm3EmY7n8T'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Frozen: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.dr075E2JijU2kCFz'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Inferno: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.qDumRuCiRh386guP'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Inferno: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.FWkBb1FiTgjbJZyu'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Inferno: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.xdvA8s2XoL7eKI7O'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Lifeform: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.oDv2cXFa85vpTDVr'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Lifeform: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.yprDpKuUVhNBpGYK'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Lifeform: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.nQO4HP5VjRmCvb81'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Mystical: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ubR5MCShmCM98tN6'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Mystical: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.s9DxdLwfESICjln5'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Mystical: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4C5yA2j3JjxOQfNc'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Overgrown: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Z1uRFYQVc71TBfQ0'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Overgrown: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.NnQj1XGs3MgeAdha'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'Overgrown: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LJTBPHnLEvjBF4ku'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'War Zone: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.H1G8RPwsZSNB9w9m'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'War Zone: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7OWQYSOYnTGTHS1w'],
        children: []
      })
  starforgedOracles.children[6].children.push({
        displayName: 'War Zone: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.XZTTvhEtcmJ08Cin'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.QhVbCgtgVq1tBmPQ'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.S04gzGykXCDArYhc'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.SMgvAe3GhveAOgOg'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Research: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Sd4YeQHAaF4HdMKy'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Access: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.SikQ2DDDW9EziJu3'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.TMaAUj4wwzIRZu5o'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Research: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Tdq9XQsqjUo2iE3G'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Opportunity Lifebearing (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Trq6J1gDaYlU4bsG'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.UDcY6Jp7nppzmlCI'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.UZEhVGNsNKw67juE'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.UgIpgaYYzFkd424z'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Uq1ybjzg3WVNH50Q'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.VD3Q2RTuFjSouslM'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Vh4sPOoSMhQK1Mvs'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Medical: Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.WBCxyfoLNtzvELvC'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.WF7PRchsM9oevTjM'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.WIAW8H36hzbjshr0'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.WVdSiIWYWSpIUCTN'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.XiribiolFLhw9KcB'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.XkWfdDGklRXgyoVW'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.XlUqt5BZzlHelXVu'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Operations: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.XplkuU7q0umRy0ST'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Community: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Xw44xq8doKvVmMuU'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Production: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Y72fnZxkJlhDKUAY'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.YFa3euIzF3Iu3EVs'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Engineering: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.YThREKgerZp3np4n'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.YV6Aysnedk3A7tfo'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.YdzwvZU2wgPhmQ7d'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Community: Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ZNrrr54PJP2qLSjJ'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.a8S9E1HghcsyxTjX'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Opportunity Lifeless (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aGmgSngtTVR383aR'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Access: Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aSjZRfT6EHRM31QA'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aos2ItE40qIbg8aV'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.axzyF0OuGXwVzhmh'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.bW8E38iRkmFPXJU8'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Opportunity Lifeless (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.bdMFP8LItOBEaL9A'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Peril Lifeless (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.c32SZYjoIfPzqze6'],
        children: []
      })
  starforgedOracles.children[2].children.push({
        displayName: 'Theme (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.mgGRUu62QCdo0n2Z'],
        children: []
      })
  starforgedOracles.children[2].children.push({
        displayName: 'Theme (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.cCXTQZgR8f8d0Ojq'],
        children: []
      })
  starforgedOracles.children[2].children.push({
        displayName: 'Theme (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.2KgRpUejv7U6Pjzf'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Medical: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.cNwrs8hGV1Y3duZ2'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.cSZDLj0BqZDc4hbF'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.eBsfgJ5xK9YNVxoB'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.eCoLvpIQrVfmDUgO'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Living: Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.eLfhvpqzGzQTwkoz'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Research: Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ejV4G8ApVQPPCSg4'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.fJV0agGCQh7hfzW8'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.fTHisJyGql8gcVuC'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Opportunity Lifebearing (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.frnLEGzyEM9CgA9B'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.gLIiu5sGdkM62Ruo'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.gV7Wxz4tmajgxe54'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.gxozVy6LZuhqjSeC'],
        children: []
      })
  starforgedOracles.children[0].children.push({
        displayName: 'Backstory Prompts (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.bROdhxvU3ConRO7w'],
        children: []
      })
  starforgedOracles.children[0].children.push({
        displayName: 'Backstory Prompts (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.iFPWcG2DSiAy1SBh'],
        children: []
      })
  starforgedOracles.children[0].children.push({
        displayName: 'Backstory Prompts (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.2Mq84Jf27YJHmYac'],
        children: []
      })
  starforgedOracles.children[0].children.push({
        displayName: 'Starship History (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vqKkxkHXIlUQPRJ1'],
        children: []
      })
  starforgedOracles.children[0].children.push({
        displayName: 'Starship History (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aHafyXedMkIO8YAG'],
        children: []
      })
  starforgedOracles.children[0].children.push({
        displayName: 'Starship History (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.8ofw7lFejvLDKsTf'],
        children: []
      })
  starforgedOracles.children[0].children.push({
        displayName: 'Starship Quirks (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.MnwK7DgFqYQffQGX'],
        children: []
      })
  starforgedOracles.children[0].children.push({
        displayName: 'Starship Quirks (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ngWfv15bDdfLoNp9'],
        children: []
      })
  starforgedOracles.children[0].children.push({
        displayName: 'Starship Quirks (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.e8K4CQZ02BaWlPd3'],
        children: []
      })
  starforgedOracles.children[0].children.push({
        displayName: 'Sector Trouble (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.65Q1iiumixImppo3'],
        children: []
      })
  starforgedOracles.children[0].children.push({
        displayName: 'Sector Trouble (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.TOoNVdWtoACPc6uJ'],
        children: []
      })
  starforgedOracles.children[0].children.push({
        displayName: 'Sector Trouble (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.idw2Om2jWKCJtZ0F'],
        children: []
      })
  starforgedOracles.children[0].children.push({
        displayName: 'Inciting Incident (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.3sdEY6TacfHlzdeV'],
        children: []
      })
  starforgedOracles.children[0].children.push({
        displayName: 'Inciting Incident (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.HPjyLGuRT9orXBYO'],
        children: []
      })
  starforgedOracles.children[0].children.push({
        displayName: 'Inciting Incident (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.KexJMZU3NBzMxO5F'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.imKbV7dPHMQ4awnO'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jGM8ouMCAMH7a9Ac'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jhnjSjXc9PmfTMd4'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jtCNxmrr3miVoZvr'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.kdHE1vWwFy5TRxqN'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.kqNvGwKvGSC0jmtx'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.m41bieZDQIJBVVbB'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Outer First Look (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.mLDIiGSS9a6Stemt'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Outer First Look (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.BHZagLL8FdIy9YcF'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Outer First Look (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.uW58pJGwNVqUKWh0'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Inner First Look (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.PRqTRLRonCe8QJPt'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Inner First Look (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.SDJ8MbwiUzwrgqgS'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Inner First Look (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.kRKzDv4anjxlaqzy'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.mXE7W7P7Vll5qPo4'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.mhrRDafdMmbZTMBq'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.n1fQSqdBI1hcsq53'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Peril Lifeless (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.n1gXDGsSkn2kDcGr'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Living: Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.n7A455CGVfpjJmJi'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.nFaY8oF7Qg0yKzQn'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.nQyQUAuGZkemZtLh'],
        children: []
      })
  starforgedOracles.children[7].children.push({
        displayName: 'Story Complication (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.nTUhvodHeSxWJeR5'],
        children: []
      })
  starforgedOracles.children[7].children.push({
        displayName: 'Story Complication (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.C8Kw3VVvAj63jrYK'],
        children: []
      })
  starforgedOracles.children[7].children.push({
        displayName: 'Story Complication (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.NEVc4gRTMwK9RKJy'],
        children: []
      })
  starforgedOracles.children[7].children.push({
        displayName: 'Story Clue (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DTxCBCBqmiXt725r'],
        children: []
      })
  starforgedOracles.children[7].children.push({
        displayName: 'Story Clue (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4QVpJ82UxmEfapht'],
        children: []
      })
  starforgedOracles.children[7].children.push({
        displayName: 'Story Clue (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.YeI3VaHANGw2Yhte'],
        children: []
      })
  starforgedOracles.children[7].children.push({
        displayName: 'Anomaly Effect (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LDZn0zQu8ZUERzyw'],
        children: []
      })
  starforgedOracles.children[7].children.push({
        displayName: 'Anomaly Effect (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tSkFbuKgAMurqmr2'],
        children: []
      })
  starforgedOracles.children[7].children.push({
        displayName: 'Anomaly Effect (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.1JCwlvrXH5QnyceQ'],
        children: []
      })
  starforgedOracles.children[7].children.push({
        displayName: 'Combat Action (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.OKjUBLf07BQt7C3P'],
        children: []
      })
  starforgedOracles.children[7].children.push({
        displayName: 'Combat Action (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.OnDA9kOWpOiQEjN7'],
        children: []
      })
  starforgedOracles.children[7].children.push({
        displayName: 'Combat Action (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ot3tdcJQecMZcoDJ'],
        children: []
      })
  starforgedOracles.children[7].children.push({
        displayName: 'Item Of Significance (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.pgeFss8cl7LDC1fO'],
        children: []
      })
  starforgedOracles.children[7].children.push({
        displayName: 'Item Of Significance (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ONylXJvvAC9hwDmT'],
        children: []
      })
  starforgedOracles.children[7].children.push({
        displayName: 'Item Of Significance (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.lmGHgjJtjVjRZCRZ'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'District Zones',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.nUFEtdo8YAyJs0Qp'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Space Sighting Terminus (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.HAVQK27TE8slQu60'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Space Sighting Terminus (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.U07ucsEg2i6NPNVb'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Space Sighting Terminus (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.nV1RjQlEGnMChpzA'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Space Sighting Outlands (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aiRMDaf1F4ZOTUZM'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Space Sighting Outlands (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.3udObEySl0mUNtbr'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Space Sighting Outlands (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.pljXdRpqxaNfzlLW'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Space Sighting Expanse (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.iuepGP5QpCa8k4hu'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Space Sighting Expanse (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.d3wRe8JyFn8ScAxY'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Space Sighting Expanse (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.uVLY1hKVNPninkIq'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Sector Name Prefix (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.OBgw20hZhAlacN3n'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Sector Name Prefix (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.1qgTxhg1qpPATkiu'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Sector Name Prefix (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vk6vBQsstREMx9AV'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Sector Name Suffix (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.KOB1e7oQ9qA5lZIB'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Sector Name Suffix (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.KGTJ4kSSkeyHxgZy'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Sector Name Suffix (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.MQFMTMilYVltbR0q'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Stellar Object (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.lZotf8hb5262ZC9y'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Stellar Object (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.hwmEnxGWjNH5yxv4'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Stellar Object (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.KCXgXQVMkPiEkqbe'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Spaceborne Peril (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.G90eIxEM1jKH5YY4'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Spaceborne Peril (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.B6tAK1uWbSAEFUKz'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Spaceborne Peril (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aRRBZvovBw2M28CM'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Spaceborne Opportunity (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Us6oXnDxSfqSetSL'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Spaceborne Opportunity (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Poyn3CNftqVhkoeD'],
        children: []
      })
  starforgedOracles.children[11].children.push({
        displayName: 'Spaceborne Opportunity (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.t1AOwc3lKoqF9cJ8'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.p8ho6XAqC9ubRJLb'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.pfwQG72bYwf6sxwt'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.pma1szGfHplWS97Q'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Medical: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.qlLVFSJQFchy8GtD'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.rZ9zTYxHP3s4ejZ4'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.raTeFRB4wM1tpaa6'],
        children: []
      })
  starforgedOracles.children[2].children.push({
        displayName: 'Descriptor (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.886Dxrj4VbhJWWH8'],
        children: []
      })
  starforgedOracles.children[2].children.push({
        displayName: 'Descriptor (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.8SO1JnHLK1F7sFwQ'],
        children: []
      })
  starforgedOracles.children[2].children.push({
        displayName: 'Descriptor (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.02ya1SPztxDlHmV0'],
        children: []
      })
  starforgedOracles.children[2].children.push({
        displayName: 'Focus (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.zQO6QiD9dBseAj2n'],
        children: []
      })
  starforgedOracles.children[2].children.push({
        displayName: 'Focus (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vLrIoBVbDBjNziuq'],
        children: []
      })
  starforgedOracles.children[2].children.push({
        displayName: 'Focus (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.s58V9HjgGqP3tmT2'],
        children: []
      })
  starforgedOracles.children[3].children.push({
        displayName: 'Revealed Aspect (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.se7xt3pePCsteqqW'],
        children: []
      })
  starforgedOracles.children[3].children.push({
        displayName: 'Revealed Aspect (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.n2OENgk435wG7mS1'],
        children: []
      })
  starforgedOracles.children[3].children.push({
        displayName: 'Revealed Aspect (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.P0xAOu6mSQjDOQE0'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.t4NRCKhjxiKFpELH'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.uE01iOVQTLPPTdoB'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Quick Flora Plant Type',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.uWrqooiiEMOBJ4Jw'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Peril Lifebearing (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.v8O2QC6q6nhGtDs2'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.v9dpHyiCM0N18i0f'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vAi4oyM0iN9Xaku3'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vBC6s29505G4SVUW'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Engineering: Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vOp4EtWnZwtkVOM4'],
        children: []
      })
  starforgedOracles.children[4].children.push({
        displayName: 'Operations: Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vaQHHuBfLrQvUWqe'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vdR5AogzuYvRKWHo'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.w5yprOoOTFfjZjZj'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Peril Lifebearing (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.wFb1T0jnPFAxosb1'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.wUhTOw2fAMtUYXUn'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.wX7icUFXfjt33JHV'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Observed From Space (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.wfVw6xyf8BY0Fmkw'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Peril Lifeless (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.xF2TW2geNXeqbFpp'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (1 - 2)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.y1kZTpBlrThTET3H'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.yergAChxtcH7BcKf'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (3 - 4)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ynZJHvrD1MSxw3N0'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Names (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ytmG9KxquuHDyL0s'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.zlAXlAtOLtqIPqvr'],
        children: []
      })
  starforgedOracles.children[9].children.push({
        displayName: 'Planetside Feature (5 - 6)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ztBOckg0G5IMb5OX'],
        children: []
      })
   CONFIG.IRONSWORN.registerOracleTree('starforged', starforgedOracles)
})
