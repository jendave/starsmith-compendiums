Hooks.once("init", async () => {
  // CONFIG.debug.hooks = true;
  const debouncedReload = foundry.utils.debounce(() => window.location.reload(), 100);
  console.log('starsmith-expanded-oracles | Initializing Starsmith Expanded Oracles');
  game.settings.register('starsmith-expanded-oracles', 'enableOraclesInTree', {
    name: 'Enable Oracles in Default Tree',
    hint: 'Enable Oracles in the character sheet tree. The Starforged ruleset must also be enabled.',
    scope: 'world',
    config: true,
    type: Boolean,
    default: true,
    onChange: debouncedReload
  });
});

Hooks.once("ironswornOracleTreesReady", async () => {
  if (game.settings.get('starsmith-expanded-oracles', 'enableOraclesInTree') && game.settings.get('foundry-ironsworn', 'ruleset-starforged')) {
    const starforgedOracles = CONFIG.IRONSWORN.getOracleTree('starforged');

    let derelictsIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Derelict Oracles"));

    starforgedOracles.children.splice(derelictsIndex + 1, 0, {
      displayName: 'District Oracles',
      tables: [],
      children: []
    });

    let characterCreationIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Launching Your Campaign"));
    let charactersIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Character Oracles"));
    let coreIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Core Oracles"));
    let creaturesIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Creature Oracles"));
    derelictsIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Derelict Oracles"));
    let districtsIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "District Oracles"));
    let factionsIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Faction Oracles"));
    let locationThemesIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Location Theme Oracles"));
    let miscIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Miscellaneous Oracles"));

    starforgedOracles.children.splice(miscIndex + 1, 0, {
      displayName: 'Move Oracles',
      tables: [],
      children: []
    });

    let movesIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Move Oracles"));
    let planetsIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Planet Oracles"));
    let settlementsIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Settlement Oracles"));
    let spaceIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Space Encounter Oracles"));
    let starshipsIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Starship Oracles"));
    let vaultsIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Precursor Vault Oracles"));

    let charactersFolder = starforgedOracles.children.find(children => children.displayName === "Character Oracles");
    let nameCharactersIndex = charactersFolder.children.indexOf(charactersFolder.children.find(children => children.displayName === "Character Name"));

    starforgedOracles.children[districtsIndex].children.push(
      {
        displayName: 'Access',
        tables: [],
        children: []
      },
      {
        displayName: 'Community',
        tables: [],
        children: []
      },
      {
        displayName: 'Engineering',
        tables: [],
        children: []
      },
      {
        displayName: 'Living',
        tables: [],
        children: []
      },
      {
        displayName: 'Medical',
        tables: [],
        children: []
      },
      {
        displayName: 'Operations',
        tables: [],
        children: []
      },
      {
        displayName: 'Production',
        tables: [],
        children: []
      },
      {
        displayName: 'Research',
        tables: [],
        children: []
      }
    );

    let districtsFolder = starforgedOracles.children.find(children => children.displayName === "District Oracles");
    let accessDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Access"));
    let communityDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Community"));
    let engineeringDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Engineering"));
    let livingDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Living"));
    let medicalDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Medical"));
    let operationsDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Operations"));
    let productionDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Production"));
    let researchDistrictsIndex = districtsFolder.children.indexOf(districtsFolder.children.find(children => children.displayName === "Research"));

    starforgedOracles.children.push({
      displayName: 'Culture Oracles',
      tables: [],
      children: []
    });

    let cultureOraclesIndex = starforgedOracles.children.indexOf(starforgedOracles.children.find(children => children.displayName === "Culture Oracles"));
    let cultureOraclesFolder = starforgedOracles.children.find(children => children.displayName === "Culture Oracles");

    cultureOraclesFolder.children.push(
      {
        displayName: 'Cultures Alien',
        tables: [],
        children: []
      },
      {
        displayName: 'Cultures Familiar',
        tables: [],
        children: []
      }
    );

    let culturesAlienOraclesFolder = cultureOraclesFolder.children.find(children => children.displayName === "Cultures Alien");

    culturesAlienOraclesFolder.children.push(
      {
        displayName: 'Xenoanthropology',
        tables: [],
        children: []
      },
      {
        displayName: 'Xenobiology',
        tables: [],
        children: []
      }
    );

    let culturesAlienXenobiologyOraclesFolder = culturesAlienOraclesFolder.children.find(children => children.displayName === "Xenobiology");

    culturesAlienXenobiologyOraclesFolder.children.push(
      {
        displayName: 'Specific Form',
        tables: [],
        children: []
      }
    );

    let culturesFamiliarOraclesFolder = cultureOraclesFolder.children.find(children => children.displayName === "Cultures Familiar");

    culturesFamiliarOraclesFolder.children.push(
      {
        displayName: 'Cultural Tradition',
        tables: [],
        children: []
      },
      {
        displayName: 'Culture',
        tables: [],
        children: []
      },
      {
        displayName: 'Dimensions of Cultures',
        tables: [],
        children: []
      }
    );

    starforgedOracles.children[locationThemesIndex].children.push(
      {
        displayName: 'Arid',
        tables: [],
        children: []
      },
      {
        displayName: 'Chronal',
        tables: [],
        children: []
      },
      {
        displayName: 'Floating',
        tables: [],
        children: []
      },
      {
        displayName: 'Flooded',
        tables: [],
        children: []
      },
      {
        displayName: 'Frozen',
        tables: [],
        children: []
      },
      {
        displayName: 'Inferno',
        tables: [],
        children: []
      },
      {
        displayName: 'Lifeform',
        tables: [],
        children: []
      },
      {
        displayName: 'Mystical',
        tables: [],
        children: []
      },
      {
        displayName: 'Overgrown',
        tables: [],
        children: []
      },
      {
        displayName: 'War Zone',
        tables: [],
        children: []
      }
    );

    let locationThemesFolder = starforgedOracles.children.find(children => children.displayName === "Location Theme Oracles");
    let aridlocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Arid"));
    let chronallocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Chronal"));
    let floatinglocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Floating"));
    let floodedlocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Flooded"));
    let frozenlocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Frozen"));
    let infernolocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Inferno"));
    let lifeformlocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Lifeform"));
    let mysticallocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Mystical"));
    let overgrownlocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "Overgrown"));
    let warZonelocationThemesIndex = locationThemesFolder.children.indexOf(locationThemesFolder.children.find(children => children.displayName === "War Zone"));

    let planetFolder = starforgedOracles.children.find(children => children.displayName === "Planet Oracles");
    let desertPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Desert World"));
    let furnacePlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Furnace World"));
    let gravePlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Grave World"));
    let icePlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Ice World"));
    let jovianPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Jovian World"));
    let junglePlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Jungle World"));
    let oceanPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Ocean World"));
    let rockyPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Rocky World"));
    let shatteredPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Shattered World"));
    let taintedPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Tainted World"));
    let vitalPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Vital World"));
    let perilPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Planetside Peril"));
    let opportunityPlanetIndex = planetFolder.children.indexOf(planetFolder.children.find(children => children.displayName === "Planetside Opportunity"));

    let spaceFolder = starforgedOracles.children.find(children => children.displayName === "Space Encounter Oracles");
    let sightingSpaceIndex = spaceFolder.children.indexOf(spaceFolder.children.find(children => children.displayName === "Space Sighting"));
    let sectorNameSpaceIndex = spaceFolder.children.indexOf(spaceFolder.children.find(children => children.displayName === "Sector Name"));

    let starshipsFolder = starforgedOracles.children.find(children => children.displayName === "Starship Oracles");
    let missionStarshipsIndex = starshipsFolder.children.indexOf(starshipsFolder.children.find(children => children.displayName === "Starship Mission"));

    let vaultsFolder = starforgedOracles.children.find(children => children.displayName === "Precursor Vault Oracles");
    let interiorVaultsIndex = vaultsFolder.children.indexOf(vaultsFolder.children.find(children => children.displayName === "Interior"));
    let sanctumVaultsIndex = vaultsFolder.children.indexOf(vaultsFolder.children.find(children => children.displayName === "Sanctum"));

    let factionFolder = starforgedOracles.children.find(children => children.displayName === "Faction Oracles");
    let factionNameIndex = factionFolder.children.indexOf(factionFolder.children.find(children => children.displayName === "Faction Name"));

    let characterCreationFolder = starforgedOracles.children.find(children => children.displayName === "Launching Your Campaign");
    let createYourCharacterIndex = characterCreationFolder.children.indexOf(characterCreationFolder.children.find(children => children.displayName === "Create Your Character"));
    let createYourCharacterFolder = characterCreationFolder.children.find(children => children.displayName === "Create Your Character");
    let boardYourStarshipIndex = createYourCharacterFolder.children.indexOf(createYourCharacterFolder.children.find(children => children.displayName === "Step 5: Board Your Starship"));
    let buildYourStartingSectorIndex = characterCreationFolder.children.indexOf(characterCreationFolder.children.find(children => children.displayName === "Build Your Starting Sector"));
    let beginYourAdventureIndex = characterCreationFolder.children.indexOf(characterCreationFolder.children.find(children => children.displayName === "Begin Your Adventure"));

    starforgedOracles.children[derelictsIndex].children.push(
      {
        displayName: 'Outer First Look (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.mLDIiGSS9a6Stemt', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.BHZagLL8FdIy9YcF', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.uW58pJGwNVqUKWh0'],
        children: []
      },
      {
        displayName: 'Inner First Look (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.PRqTRLRonCe8QJPt', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.SDJ8MbwiUzwrgqgS', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.kRKzDv4anjxlaqzy'],
        children: []
      },
      {
        displayName: 'Zones',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.nUFEtdo8YAyJs0Qp'],
        children: []
      }
    );

    starforgedOracles.children[districtsIndex].children[accessDistrictsIndex].children.push(
      {
        displayName: 'Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aSjZRfT6EHRM31QA'],
        children: []
      },
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.SikQ2DDDW9EziJu3'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.9wn19PGDzUPZ0WYZ'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4Dp4wHxjlsAt4lt7'],
        children: []
      }
    );

    starforgedOracles.children[districtsIndex].children[communityDistrictsIndex].children.push(
      {
        displayName: 'Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4wVqFfxiMfxdj0oe'],
        children: []
      },
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Xw44xq8doKvVmMuU'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DZ9Kg7DYxnSGARKp'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ZNrrr54PJP2qLSjJ'],
        children: []
      }
    );

    starforgedOracles.children[districtsIndex].children[engineeringDistrictsIndex].children.push(
      {
        displayName: 'Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vOp4EtWnZwtkVOM4'],
        children: []
      },
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.NAjhJFfOfnI4RUhG'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0n1W7xeDuAVmLvNx'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.YThREKgerZp3np4n'],
        children: []
      }
    );

    starforgedOracles.children[districtsIndex].children[livingDistrictsIndex].children.push(
      {
        displayName: 'Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.n7A455CGVfpjJmJi'],
        children: []
      },
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0XWUJFkDOKtYBGpe'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.eLfhvpqzGzQTwkoz'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7A3TS1p0xJx9O8Ws'],
        children: []
      }
    );

    starforgedOracles.children[districtsIndex].children[medicalDistrictsIndex].children.push(
      {
        displayName: 'Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.WBCxyfoLNtzvELvC'],
        children: []
      },
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.qlLVFSJQFchy8GtD'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.cNwrs8hGV1Y3duZ2'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.93LcFghu4VA3VTmW'],
        children: []
      }
    );

    starforgedOracles.children[districtsIndex].children[operationsDistrictsIndex].children.push(
      {
        displayName: 'Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4AJ3CSAW3R38267w'],
        children: []
      },
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vaQHHuBfLrQvUWqe'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.FJ3pwO45zt7McRK9'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.XplkuU7q0umRy0ST'],
        children: []
      }
    );

    starforgedOracles.children[districtsIndex].children[productionDistrictsIndex].children.push(
      {
        displayName: 'Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DvXahtGuzoYnWYDZ'],
        children: []
      },
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.G1kgbuN1Cimyz0SE'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.6LLdhY15KByiIv8q'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Y72fnZxkJlhDKUAY'],
        children: []
      }
    );

    starforgedOracles.children[districtsIndex].children[researchDistrictsIndex].children.push(
      {
        displayName: 'Area',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ejV4G8ApVQPPCSg4'],
        children: []
      },
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Sd4YeQHAaF4HdMKy'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.3wgJC3d2grqpsm5I'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Tdq9XQsqjUo2iE3G'],
        children: []
      }
    );

    starforgedOracles.children[planetsIndex].children[shatteredPlanetIndex].children.push(
      {
        displayName: 'Sample Names (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0gKPLApYlwxPhSaE', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.YV6Aysnedk3A7tfo', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.kdHE1vWwFy5TRxqN'],
        children: []
      },
      {
        displayName: 'Observed From Space (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0ccW0eVajV4NENbZ', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.fJV0agGCQh7hfzW8', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.VD3Q2RTuFjSouslM'],
        children: []
      },
      {
        displayName: 'Planetside Feature (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.K74TKszI8T8HTUId', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.XlUqt5BZzlHelXVu', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DsGW7fo4iF64qhWf'],
        children: []
      }

    );

    starforgedOracles.children[planetsIndex].children[icePlanetIndex].children.push(
      {
        displayName: 'Sample Names (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.JrTmSctB5pxFZJyb', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.S04gzGykXCDArYhc', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.m41bieZDQIJBVVbB'],
        children: []
      },
      {
        displayName: 'Observed From Space (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Uq1ybjzg3WVNH50Q', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.fTHisJyGql8gcVuC', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.2bbW8GapNrUbkBiD'],
        children: []
      },
      {
        displayName: 'Planetside Feature (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.3eZVI73pFd2Vq1Vn', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.wUhTOw2fAMtUYXUn', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.pma1szGfHplWS97Q'],
        children: []
      }
    );

    starforgedOracles.children[settlementsIndex].children.push(
      {
        displayName: 'Location (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tKaPKKmKhxcgYflc', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.wJNYFJsFMbCW8F0L', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7utFAc8SiMTnUDyW'],
        children: []
      },
      {
        displayName: 'First Look (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4mtNdMOiPAWeLe1P', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.c6A4BvsaG6NOJdzf', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.VWKvi551JyShfjh0'],
        children: []
      },
      {
        displayName: 'Initial Contact (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ybOIRl97yeUfvAtM', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.NDOz35Zb8qn96VKd', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.CnErGVHLpgxKqNTB'],
        children: []
      },
      {
        displayName: 'Authority (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aI2wtdKOQvG0pZBY', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.eKDmSpdyzwRM7ydc', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.zMTlB0xQZyEc8PtQ'],
        children: []
      },
      {
        displayName: 'Settlement Projects (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.iJbLrynKmB25yxKu', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.wPh8ecvQZvyebiE0', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tNudiYQ7dnUpeONr'],
        children: []
      },
      {
        displayName: 'Settlement Trouble (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.rd2ZCaZFUEhca5lp', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LpumgIbgDG8wRdso', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.W6VGcvzStPUK4Yyc'],
        children: []
      },
      {
        displayName: 'Settlement Name (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.G6mXIbtSkacs9660', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.iZtujTpGpTw5tMO4', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ce7JLAwBAGqLYgHo'],
        children: []
      }
    );

    starforgedOracles.children[vaultsIndex].children[interiorVaultsIndex].children.push(
      {
        displayName: 'Inner First Look (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.CJlBnWFAMRRSD2XK', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.otjCnngJ1Yw74rjt', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7c2TaEWTUaaJlOdG'],
        children: []
      },
      {
        displayName: 'Interior Feature (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.GiMZuPESMrzCW4sO', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.JAM3ft7utYoihnlf', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0DWXYSJfD5kotHW3'],
        children: []
      },
      {
        displayName: 'Interior Peril (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4DINDAOyS576i0uC', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.CO2a43NmZ4Ui8KHr', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.O7AobPhngMyKVX0u'],
        children: []
      },
      {
        displayName: 'Interior Opportunity (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.FKcW0ngd4tAteFul', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Q0CvTCMrIsZJPjW4', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.h9DmNX5Hw3OyNrB6'],
        children: []
      }
    );

    starforgedOracles.children[vaultsIndex].children[sanctumVaultsIndex].children.push(
      {
        displayName: 'Vault Purpose (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.hbSxvEVDrXKp3nfh', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.f11tgzgGHAk3EF5H', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jB7Jc9SEkxuhlH2g'],
        children: []
      },
      {
        displayName: 'Sanctum Feature (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tMI4HdhdS3uPcQ7A', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.GA2VJG2Z4Pud10Xj', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.lMMPTGXOGCxKHj1n'],
        children: []
      },
      {
        displayName: 'Sanctum Peril (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.U3zbLYTj8aYT7jZ5', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.C3UBEjh7hWTgY16S', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.E9NXVGkiTpxDLadk'],
        children: []
      },
      {
        displayName: 'Sanctum Opportunity (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.6wZ3tNjg9YB24ksU', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.m2fmYWlfXiAkiGJM', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jNZY2f4GGlhdTxwj'],
        children: []
      }
    );

    starforgedOracles.children[vaultsIndex].children.push(
      {
        displayName: 'Form (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.qp0q4hCncEEwFmzJ', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.OnrAyLWl8O4X07DO', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.bVzSFWwcuPrZnzRI'],
        children: []
      },
      {
        displayName: 'Shape (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ug2VXU0gTErEpqjW', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.EOUhqXJNMURqmZ23', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.XfLeKTFTNoNHJeFk'],
        children: []
      },
      {
        displayName: 'Material (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.5w7WAG73eRo6P0BO', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.h7OkPCGMJmUncIJb', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.c5wad4ZSEmOKIbV0'],
        children: []
      },
      {
        displayName: 'Outer First Look (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.zfHAVw0GLCDpURvp', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.8FM5A0pW9nomPpFW', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.v3VP3uJAEm5ILL8l'],
        children: []
      }
    );

    starforgedOracles.children[factionsIndex].children.push(
      {
        displayName: 'Faction Type (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jrxDHQYEuB6XayQB', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tvatzl8nPjjuAAgm', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jAQFBWOxlwoqbkvz'],
        children: []
      },
      {
        displayName: 'Dominion (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.SR2UXvMKVawDqzk4', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.AQ1jgsUYuEhA12Ju', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.CgfxgI13aErxbXod'],
        children: []
      },
      {
        displayName: 'Dominion: Leadership (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.eAqohSRwBWwx7uy5', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.A6v2rLoWS3xEAtam', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.StGZjdeejoYDZFLN'],
        children: []
      },
      {
        displayName: 'Guild (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.k3ylcTmv45qOhxMM', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.39brIk5GOHXK0Gqw', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.PDnjZEt9uprBcXoY'],
        children: []
      },
      {
        displayName: 'Fringe Group (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.mhQqIfHi4ldU6lk3', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.UE6b4kAluQqrAGUO', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.yjYdyPveqyWUOgwF'],
        children: []
      },
      {
        displayName: 'Faction Projects (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.OwLUXvgCKzKEa1wr', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.69hcmdT5pjf2F1IU', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7VdNGiCm6peWzLMr'],
        children: []
      },
      {
        displayName: 'Faction Relationships (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Lh2QRYQ2jkRnEI4m', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tlrca4lQsFIZ8IwZ', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tRYvWAQqU7xkpJYu'],
        children: []
      },
      {
        displayName: 'Faction Quirks (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.000XYhjOoHW6hKAP', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.P1Z2tq2DiGNUalkD', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.bQjrwSHHyHC4BLNc'],
        children: []
      },
      {
        displayName: 'Faction Rumors (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DOLQckJPOzfE8JzY', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.yqA6hSUhfIGURMR2', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.6hXWxSEdrjiY7K7f'],
        children: []
      },
      {
        displayName: 'Corporation: Field',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.FDvT6fPqV2zshZRQ', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.HvKV3pycO2gyqB92', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.KAFl5CXZdfKUmt9J'],
        children: []
      },
      {
        displayName: 'Research: Field Of Study',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.AVjqygbVDncdAY0P', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.u1MRVAikLO9ZUn05', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.IQxQ2I356Vz0TSGB'],
        children: []
      }
    );

    starforgedOracles.children[factionsIndex].children[factionNameIndex].children.push(
      {
        displayName: 'Legacy (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.JQlTpghFQFXDskkS', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.IHGdTmOVN1zloqmM', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.h9jxuC70RIV2YYod'],
        children: []
      },
      {
        displayName: 'Affiliation (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Xl7mEaAISq6I8Q9x', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DkdxtOPf0Kk45pIe', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.1N106p7YNKKWr7HI'],
        children: []
      },
      {
        displayName: 'Identity (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LhqLvU4wD2bZEicK', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.OAITk7XvPcUBdDih', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Yyi071quFTMjRybK'],
        children: []
      }
    );

    starforgedOracles.children[starshipsIndex].children.push(
      {
        displayName: 'Registry Number Initials',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.byBI6d46QtVH1goo'],
        children: []
      },
      {
        displayName: 'Registry Number Model',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ZlVBOz7v2GzEuXtW'],
        children: []
      },
      {
        displayName: 'Starship Type (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LOqba6VziVXZDj0W', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tioleBB8HuEWvzTi', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.pBfCCKylt1qhAoPI'],
        children: []
      },
      {
        displayName: 'Fleet (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.oC3tS7XQnb0aF5bo', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.VVwHG9fOYRad8p7o', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.8Lxuj8yNMgwbWIRo'],
        children: []
      },
      {
        displayName: 'Initial Contact (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7bD2a8NrVeBXnlpJ', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.s9jstF4qimhTSDOT', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Zp5JgqKSBul72P88'],
        children: []
      },
      {
        displayName: 'First Look (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0L6dlLeVLJkMXhzY', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.9T2TFppaaAgFrT61', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.W0QM0miRxvJmVp2H'],
        children: []
      },
      {
        displayName: 'Starship Name (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.6KaSYbplCYJ89v6C', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.lXErrHKlwhOZooyR', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.mJg13l6dbjIX8etC'],
        children: []
      }
    );

    starforgedOracles.children[starshipsIndex].children[missionStarshipsIndex].children.push(
      {
        displayName: 'Terminus (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.svjsxDT4R9rSH8YE', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.qd4UyfLFc16vUkEt', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.R3sSKQGqhjScKvsB'],
        children: []
      },
      {
        displayName: 'Outlands (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.qCcHtfV0mIRKLQvp', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.8AY3xj8qpFIVfpak', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.g6wu6JxaxGRjpNoY'],
        children: []
      },
      {
        displayName: 'Expanse (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.VirDtYNEzhVFJ1ei', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.eqAJAIUVoWx2blcp', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.wjJ8Qd2skumxAFNI'],
        children: []
      }
    );

    starforgedOracles.children[creaturesIndex].children.push(
      {
        displayName: 'Creature First Look (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.B639ZC5GB4q8pjr1', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.gUUm4VyBeD9TAxBk', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.K0dEKmbAL3UIV0hG'],
        children: []
      },
      {
        displayName: 'Encountered Behavior (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.lKHbFR2SJbazZyMM', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LcRLOp7oBP2zOiIT', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.xOro3zYQOldpg6oK'],
        children: []
      },
      {
        displayName: 'Revealed Creature Aspect (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.se7xt3pePCsteqqW', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.n2OENgk435wG7mS1', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.P0xAOu6mSQjDOQE0'],
        children: []
      }
    );

    starforgedOracles.children[charactersIndex].children.push(
      {
        displayName: 'First Look (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.guv5iEDeLijYuABa', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.oTECxhDPRJJ3yUvh', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.MsQ7rPo2gDyVIQEE'],
        children: []
      },
      {
        displayName: 'Initial Disposition (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Lu30o0Mx9Arwipnw', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.rdlIztz01R6NIJKy', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.gaRwLNFfm30VzuRo'],
        children: []
      },
      {
        displayName: 'Character Role (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.O5x9KiSkoNAVXW6O', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.VEL6LI4wBzI8eb7z', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.437mrjVAePTQZGYv'],
        children: []
      },
      {
        displayName: 'Character Goal (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.2xxntLbzYGLZ2cao', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.oLDINu3MLyDgABhD', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aqapGyFUQ1Jj9uQl'],
        children: []
      },
      {
        displayName: 'Revealed Character Aspect (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.5JUVkMmXuH74WBUv', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.JhY6HtE1X1xSAJW5', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.cFmnWNEUaw8Lf3Qg'],
        children: []
      },
      {
        displayName: 'Random NPC Conversation (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DxF8KMERydgfvtsQ', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.xbNILPSGc3KQxIKD', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.1y69WUZsUjvYL5om'],
        children: []
      },
      {
        displayName: 'NPC Plot Knowledge: Type',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DA4SVnbbEzYCRIpf'],
        children: []
      },
      {
        displayName: 'NPC Plot Knowledge: Topic',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.JEj8oBuwhiEFg5qM'],
        children: []
      }
    );

    starforgedOracles.children[charactersIndex].children[nameCharactersIndex].children.push(
      {
        displayName: 'Given Name (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.UnTcBB8gwFjNoT9O', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.dXJhMhBt7J2FtCVh', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.5acO6ocnsJerpEkI'],
        children: []
      },
      {
        displayName: 'Callsign (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0zs4jV8AgYw1GaVB', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.iBgIwzZGGKTuCGpR', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vUTgxJRCAbApAZgi'],
        children: []
      },
      {
        displayName: 'Family Name (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.6pv2fJdPmbl6HDGR', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.v5XqY7qSbXRuBIDR', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.lQR1PUQksmjUX2Fd'],
        children: []
      }
    );

    starforgedOracles.children[movesIndex].children.push(
      {
        displayName: 'Make A Discovery (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.N40PkK7FvfOOgWd1', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.SfSqdbh63oluomwR', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7q5Ex4s960gtaunC'],
        children: []
      },
      {
        displayName: 'Confront Chaos (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.CJzOOTMuY0ybXS2U', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.gdSfOA4kll28YIAF', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.5kFcmtFv9P2GRH8s'],
        children: []
      },
      {
        displayName: 'Pay The Price (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LEycAF6bXh6vOJ05', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jnBW4rcekjOFL5DL', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.uUtEx6wDCzRhMDth'],
        children: []
      }
    );

    starforgedOracles.children[coreIndex].children.push(
      {
        displayName: 'Action (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.OSpHuphKhIOcJy6e', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.EdMDbQ2rvj1kjsVw', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.P2eGB9bEuZtwAQxq'],
        children: []
      },
      {
        displayName: 'Theme (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.mgGRUu62QCdo0n2Z', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.cCXTQZgR8f8d0Ojq', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.2KgRpUejv7U6Pjzf'],
        children: []
      },
      {
        displayName: 'Descriptor (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.886Dxrj4VbhJWWH8', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.8SO1JnHLK1F7sFwQ', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.02ya1SPztxDlHmV0'],
        children: []
      },
      {
        displayName: 'Focus (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.zQO6QiD9dBseAj2n', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vLrIoBVbDBjNziuq', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.s58V9HjgGqP3tmT2'],
        children: []
      }
    );

    starforgedOracles.children[locationThemesIndex].children.push({
      displayName: 'Theme Type (Starsmith)',
      tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.PnbyoxQfgZdQ3AiU', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LFxOkncnKTFTisw3'],
      children: []
    });

    starforgedOracles.children[locationThemesIndex].children[aridlocationThemesIndex].children.push(
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LfXTtfdk79cjfExo'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.nBvFLLQmvnCvBApN'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.qB6VRHyHz8h9UVAg'],
        children: []
      }
    );

    starforgedOracles.children[locationThemesIndex].children[chronallocationThemesIndex].children.push(
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.E3FNowqcuhoPBfO0'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aPKWBWjBMujwlLkO'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LUu4dLLMs5kXPDEe'],
        children: []
      }
    );

    starforgedOracles.children[locationThemesIndex].children[floatinglocationThemesIndex].children.push(
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0cb49aXSgIa3bzrK'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.HTFxriwbDFoMcYLW'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.AtqoQOiHw2S4sbUd'],
        children: []
      }
    );

    starforgedOracles.children[locationThemesIndex].children[floodedlocationThemesIndex].children.push(
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.X0BVY0u1oEFvyrzx'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.74ke9AgaF8XXelLr'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.O39GKpnyMuyam9pl'],
        children: []
      }
    );

    starforgedOracles.children[locationThemesIndex].children[frozenlocationThemesIndex].children.push(
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ZqubM8Y5GsmhsaKj'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.3uVKQgKm3EmY7n8T'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.dr075E2JijU2kCFz'],
        children: []
      }
    );

    starforgedOracles.children[locationThemesIndex].children[infernolocationThemesIndex].children.push(
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.qDumRuCiRh386guP'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.FWkBb1FiTgjbJZyu'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.xdvA8s2XoL7eKI7O'],
        children: []
      }
    );

    starforgedOracles.children[locationThemesIndex].children[lifeformlocationThemesIndex].children.push(
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.oDv2cXFa85vpTDVr'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.yprDpKuUVhNBpGYK'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.nQO4HP5VjRmCvb81'],
        children: []
      }
    );

    starforgedOracles.children[locationThemesIndex].children[mysticallocationThemesIndex].children.push(
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ubR5MCShmCM98tN6'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.s9DxdLwfESICjln5'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4C5yA2j3JjxOQfNc'],
        children: []
      }
    );

    starforgedOracles.children[locationThemesIndex].children[overgrownlocationThemesIndex].children.push(
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Z1uRFYQVc71TBfQ0'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.NnQj1XGs3MgeAdha'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LJTBPHnLEvjBF4ku'],
        children: []
      }
    );

    starforgedOracles.children[locationThemesIndex].children[warZonelocationThemesIndex].children.push(
      {
        displayName: 'Feature',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.H1G8RPwsZSNB9w9m'],
        children: []
      },
      {
        displayName: 'Peril',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7OWQYSOYnTGTHS1w'],
        children: []
      },
      {
        displayName: 'Opportunity',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.XZTTvhEtcmJ08Cin'],
        children: []
      }
    );

    starforgedOracles.children[planetsIndex].children[jovianPlanetIndex].children.push(
      {
        displayName: 'Sample Names (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.kqNvGwKvGSC0jmtx', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.axzyF0OuGXwVzhmh', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.6qKWL6r9sN5h4fHg'],
        children: []
      },
      {
        displayName: 'Observed From Space (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.w5yprOoOTFfjZjZj', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Vh4sPOoSMhQK1Mvs', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.TMaAUj4wwzIRZu5o'],
        children: []
      },
      {
        displayName: 'Planetside Feature (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.gV7Wxz4tmajgxe54', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.yergAChxtcH7BcKf', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.EqSN5ENCg0MqyoCP'],
        children: []
      }
    );

    starforgedOracles.children[planetsIndex].children[vitalPlanetIndex].children.push(
      {
        displayName: 'Sample Names (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.imKbV7dPHMQ4awnO', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.eBsfgJ5xK9YNVxoB', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.t4NRCKhjxiKFpELH'],
        children: []
      },
      {
        displayName: 'Observed From Space (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.WF7PRchsM9oevTjM', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.YdzwvZU2wgPhmQ7d', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.UZEhVGNsNKw67juE'],
        children: []
      },
      {
        displayName: 'Planetside Feature (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jhnjSjXc9PmfTMd4', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.uE01iOVQTLPPTdoB', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.nQyQUAuGZkemZtLh'],
        children: []
      },
      {
        displayName: 'Quick Flora Plant Type',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.uWrqooiiEMOBJ4Jw'],
        children: []
      },
      {
        displayName: 'Quick Flora Characteristics',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.NtsgKYiw3MDWIRCY'],
        children: []
      },
      {
        displayName: 'Quick Flora First Look',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.7JNNleZeFXvXs9Yv'],
        children: []
      }
    );

    starforgedOracles.children[planetsIndex].children[desertPlanetIndex].children.push(
      {
        displayName: 'Sample Names (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.BdbEFPelmQqkGDxs', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.a8S9E1HghcsyxTjX', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.MVnD2orENFUEJrOU'],
        children: []
      },
      {
        displayName: 'Observed From Space (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Lfk0gDNUJecpYuRi', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.60DIGlrsawAmJuYR', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.wfVw6xyf8BY0Fmkw'],
        children: []
      },
      {
        displayName: 'Planetside Feature (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.EjrmKEYy4ESfBo7C', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.UgIpgaYYzFkd424z', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.bW8E38iRkmFPXJU8'],
        children: []
      }
    );

    starforgedOracles.children[planetsIndex].children[taintedPlanetIndex].children.push(
      {
        displayName: 'Sample Names (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.y1kZTpBlrThTET3H', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ynZJHvrD1MSxw3N0', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.QhVbCgtgVq1tBmPQ'],
        children: []
      },
      {
        displayName: 'Observed From Space (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.WVdSiIWYWSpIUCTN', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.cSZDLj0BqZDc4hbF', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0LirTYoCP3R8Dgzt'],
        children: []
      },
      {
        displayName: 'Planetside Feature (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.gxozVy6LZuhqjSeC', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.mhrRDafdMmbZTMBq', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jtCNxmrr3miVoZvr'],
        children: []
      }
    );

    starforgedOracles.children[planetsIndex].children[gravePlanetIndex].children.push(
      {
        displayName: 'Sample Names (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.0vFf0yYmD1Kdc9TC', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4Jqgfo9tNEmg6SiL', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.O4WIISBXLxsJdOnU'],
        children: []
      },
      {
        displayName: 'Observed From Space (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.BrE1gQtsBLvg9tSx', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vBC6s29505G4SVUW', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.eCoLvpIQrVfmDUgO'],
        children: []
      },
      {
        displayName: 'Planetside Feature (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.6l5Hqitvc4RFxpra', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Lf2FvABUcYtgv6Ae', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.2JAxDfpav0IlsZLK'],
        children: []
      }
    );

    starforgedOracles.children[planetsIndex].children[furnacePlanetIndex].children.push(
      {
        displayName: 'Sample Names (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.XkWfdDGklRXgyoVW', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DZ27gXKmeNZvQBq8', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.XiribiolFLhw9KcB'],
        children: []
      },
      {
        displayName: 'Observed From Space (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.mXE7W7P7Vll5qPo4', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.gLIiu5sGdkM62Ruo', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.1sLkhxEaVUaPy57w'],
        children: []
      },
      {
        displayName: 'Planetside Feature (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.WIAW8H36hzbjshr0', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.5esl8jSbsIyPkLZV', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.zlAXlAtOLtqIPqvr'],
        children: []
      }
    );

    starforgedOracles.children[characterCreationIndex].children[createYourCharacterIndex].children.push(
      {
        displayName: 'Step 3: Create Your Backstory (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.bROdhxvU3ConRO7w', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.iFPWcG2DSiAy1SBh', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.2Mq84Jf27YJHmYac'],
        children: []
      }
    );

    starforgedOracles.children[characterCreationIndex].children[createYourCharacterIndex].children[boardYourStarshipIndex].children.push(
      {
        displayName: 'Giving the Starship a History (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vqKkxkHXIlUQPRJ1', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aHafyXedMkIO8YAG', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.8ofw7lFejvLDKsTf'],
        children: []
      },
      {
        displayName: 'Envision the Starship (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.MnwK7DgFqYQffQGX', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ngWfv15bDdfLoNp9', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.e8K4CQZ02BaWlPd3'],
        children: []
      }
    );

    starforgedOracles.children[characterCreationIndex].children[buildYourStartingSectorIndex].children.push(
      {
        displayName: 'Step 10: Introduce a Sector Trouble (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.65Q1iiumixImppo3', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.TOoNVdWtoACPc6uJ', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.idw2Om2jWKCJtZ0F'],
        children: []
      }
    );

    starforgedOracles.children[characterCreationIndex].children[beginYourAdventureIndex].children.push(
      {
        displayName: 'Step 1: Envision an Inciting Incident (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.3sdEY6TacfHlzdeV', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.HPjyLGuRT9orXBYO', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.KexJMZU3NBzMxO5F'],
        children: []
      }
    );

    starforgedOracles.children[planetsIndex].children[oceanPlanetIndex].children.push(
      {
        displayName: 'Sample Names (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.HJcSLbX4pAVEhTms', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Pm2jNTRrEBT2xw8g', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.pfwQG72bYwf6sxwt'],
        children: []
      },
      {
        displayName: 'Observed From Space (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vAi4oyM0iN9Xaku3', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.jGM8ouMCAMH7a9Ac', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.YFa3euIzF3Iu3EVs'],
        children: []
      },
      {
        displayName: 'Planetside Feature (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.raTeFRB4wM1tpaa6', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.v9dpHyiCM0N18i0f', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.p8ho6XAqC9ubRJLb'],
        children: []
      }
    );

    starforgedOracles.children[planetsIndex].children[junglePlanetIndex].children.push(
      {
        displayName: 'Sample Names (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.SMgvAe3GhveAOgOg', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.rZ9zTYxHP3s4ejZ4', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ytmG9KxquuHDyL0s'],
        children: []
      },
      {
        displayName: 'Observed From Space (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.9wCWNV5mg80zJCzz', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.8NCFv7yLKaxIjARl', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.nFaY8oF7Qg0yKzQn'],
        children: []
      },
      {
        displayName: 'Planetside Feature (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vdR5AogzuYvRKWHo', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.2uFx0KwWCty8dBMm', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.FFmsU2Mxni5t0kAV'],
        children: []
      }
    );

    starforgedOracles.children[miscIndex].children.push(
      {
        displayName: 'Story Complication (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.nTUhvodHeSxWJeR5', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.C8Kw3VVvAj63jrYK', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.NEVc4gRTMwK9RKJy'],
        children: []
      },
      {
        displayName: 'Story Clue (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.DTxCBCBqmiXt725r', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.4QVpJ82UxmEfapht', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.YeI3VaHANGw2Yhte'],
        children: []
      },
      {
        displayName: 'Anomaly Effect (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.LDZn0zQu8ZUERzyw', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.tSkFbuKgAMurqmr2', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.1JCwlvrXH5QnyceQ'],
        children: []
      },
      {
        displayName: 'Combat Action (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.OKjUBLf07BQt7C3P', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.OnDA9kOWpOiQEjN7', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ot3tdcJQecMZcoDJ'],
        children: []
      },
      {
        displayName: 'Item Of Significance (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.pgeFss8cl7LDC1fO', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ONylXJvvAC9hwDmT', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.lmGHgjJtjVjRZCRZ'],
        children: []
      }
    );

    starforgedOracles.children[spaceIndex].children[sightingSpaceIndex].children.push(
      {
        displayName: 'Terminus (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.HAVQK27TE8slQu60', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.U07ucsEg2i6NPNVb', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.nV1RjQlEGnMChpzA'],
        children: []
      },
      {
        displayName: 'Outlands (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aiRMDaf1F4ZOTUZM', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.3udObEySl0mUNtbr', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.pljXdRpqxaNfzlLW'],
        children: []
      },
      {
        displayName: 'Expanse (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.iuepGP5QpCa8k4hu', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.d3wRe8JyFn8ScAxY', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.uVLY1hKVNPninkIq'],
        children: []
      }
    );

    starforgedOracles.children[spaceIndex].children[sectorNameSpaceIndex].children.push(
      {
        displayName: 'Prefix (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.OBgw20hZhAlacN3n', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.1qgTxhg1qpPATkiu', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.vk6vBQsstREMx9AV'],
        children: []
      },
      {
        displayName: 'Suffix (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.KOB1e7oQ9qA5lZIB', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.KGTJ4kSSkeyHxgZy', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.MQFMTMilYVltbR0q'],
        children: []
      }
    );

    starforgedOracles.children[spaceIndex].children.push(
      {
        displayName: 'Stellar Object (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.lZotf8hb5262ZC9y', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.hwmEnxGWjNH5yxv4', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.KCXgXQVMkPiEkqbe'],
        children: []
      },
      {
        displayName: 'Spaceborne Peril (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.G90eIxEM1jKH5YY4', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.B6tAK1uWbSAEFUKz', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aRRBZvovBw2M28CM'],
        children: []
      },
      {
        displayName: 'Spaceborne Opportunity (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Us6oXnDxSfqSetSL', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Poyn3CNftqVhkoeD', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.t1AOwc3lKoqF9cJ8'],
        children: []
      }
    );

    starforgedOracles.children[planetsIndex].children[perilPlanetIndex].children.push(
      {
        displayName: 'Lifebearing (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.KD84vncPvRKsl4aG', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.wFb1T0jnPFAxosb1', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.v8O2QC6q6nhGtDs2'],
        children: []
      },
      {
        displayName: 'Lifeless (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.n1gXDGsSkn2kDcGr', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.c32SZYjoIfPzqze6', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.xF2TW2geNXeqbFpp'],
        children: []
      }
    );

    starforgedOracles.children[planetsIndex].children[opportunityPlanetIndex].children.push(
      {
        displayName: 'Lifebearing (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.Trq6J1gDaYlU4bsG', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.frnLEGzyEM9CgA9B', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.P6GDb3IVTDA86AZP'],
        children: []
      },
      {
        displayName: 'Lifeless (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.H8uvbUai3jQTFjQF', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aGmgSngtTVR383aR', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.bdMFP8LItOBEaL9A'],
        children: []
      }
    );

    starforgedOracles.children[planetsIndex].children[rockyPlanetIndex].children.push(
      {
        displayName: 'Sample Names (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.n1fQSqdBI1hcsq53', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.IV7IsgbLgtpPJ0yp', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.UDcY6Jp7nppzmlCI'],
        children: []
      },
      {
        displayName: 'Observed From Space (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.N54KUtDcuuChzF3r', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.aos2ItE40qIbg8aV', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.wX7icUFXfjt33JHV'],
        children: []
      },
      {
        displayName: 'Planetside Feature (Starsmith)',
        tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.5R7eSgr0otB7ggVi', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.AtmwcrDFmiL5KiZY', 'Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ztBOckg0G5IMb5OX'],
        children: []
      }
    );

    CONFIG.IRONSWORN.registerOracleTree('starforged', starforgedOracles)
  }
});
