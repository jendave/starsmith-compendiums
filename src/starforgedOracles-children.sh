#!/usr/bin/env bash

# [0] Character Creation Uylg7OA7KprzNn9j
# [1] Characters EDUYGoTtXEMkKKvh
# [2] Core SW9eKiLhIBf4c0Km
# [3] Creatures RSG7ksc1DxCTpccr
# [4] Derelicts uFBHcawqNPAmWvqe
# [5] Factions h07LKcgdKeSsWGQ2
# [6] Location Themes HhkNFM4BelwaXHfB
# [7] Misc EZdpqOZMdqwGsU7q
# [8] Moves 6cVVQY9tOQiVInzx
# [9] Planets xJpOuGNKKjAVrR3q
# [10] Settlements M0bP1WUZxPqCOHJS
# [11] Space 9aKg1x9pvKGwheVZ
# [12] Starships aO8e4enqhqWw25H6
# [13] Vaults N2sObuKzWFZ5LEU2

oracle_folder_parser () {
    cat << EOF
    starforgedOracles.children[$folder_index].children.push({
          displayName: '$name',
          tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.$id'],
          children: []
      })
EOF
}

oracle_subfolder_parser () {
    cat << EOF
    starforgedOracles.children[$folder_index].children[$sub_folder_index].children.push({
          displayName: '$name',
          tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.$id'],
          children: []
      })
EOF
}

jq -c '.items[] | {name,_id,folder}' starsmith-expanded-oracles-export.json | while read oracleJSON;
do
    name=$(echo $oracleJSON | jq -r .name)
    #echo $name
    id=$(echo $oracleJSON | jq -r ._id)
    folder=$(echo $oracleJSON | jq -r .folder)
    #echo $id

    case $folder in
        Uylg7OA7KprzNn9j)
            folder_index="characterCreationIndex"
            oracle_folder_parser
            ;;
        EDUYGoTtXEMkKKvh)
            folder_index="charactersIndex"
            oracle_folder_parser
            ;;
        SW9eKiLhIBf4c0Km)
            folder_index="coreIndex"
            oracle_folder_parser
            ;;
        RSG7ksc1DxCTpccr)
            folder_index="creaturesIndex"
            oracle_folder_parser
            ;;
        uFBHcawqNPAmWvqe)
            folder_index="derelictsIndex"
            oracle_folder_parser
            ;;
        zBzW0zEkqjmtSZrH)
            # Districts
            folder_index="districtsIndex"
            oracle_folder_parser
            ;;
        h07LKcgdKeSsWGQ2)
            folder_index="factionsIndex"
            oracle_folder_parser
            ;;
        HhkNFM4BelwaXHfB)
            folder_index="locationThemesIndex"
            oracle_folder_parser
            ;;
        EZdpqOZMdqwGsU7q)
            folder_index="miscIndex"
            oracle_folder_parser
            ;;
        6cVVQY9tOQiVInzx)
            folder_index="movesIndex"
            oracle_folder_parser
            ;;
        V2NII2gORVPEdj28)
            folder_index="planetsIndex"
            oracle_folder_parser
            ;;
        M0bP1WUZxPqCOHJS)
            folder_index="settlementsIndex"
            oracle_folder_parser
            ;;
        9aKg1x9pvKGwheVZ)
            folder_index="spaceIndex"
            oracle_folder_parser
            ;;
        aO8e4enqhqWw25H6)
            folder_index="starshipsIndex"
            oracle_folder_parser
            ;;
        N2sObuKzWFZ5LEU2)
            folder_index="vaultsIndex"
            oracle_folder_parser
            ;;
        Pl9XxW6fIhAGfABi)
            folder_index="planetsIndex"
            sub_folder_index="desertPlanetIndex"
            oracle_subfolder_parser
            ;;
        Xx3Lo4c3NF2M0ymk)
            folder_index="planetsIndex"
            sub_folder_index="furnacePlanetIndex"
            oracle_subfolder_parser
            ;;
        EJoSoFU1mGwf60NT)
            folder_index="planetsIndex"
            sub_folder_index="gravePlanetIndex"
            oracle_subfolder_parser
            ;;
        NxLWkP3u1WpG2vuX)
            folder_index="planetsIndex"
            sub_folder_index="icePlanetIndex"
            oracle_subfolder_parser
            ;;
        FmcXyPfargJoxCMr)
            folder_index="planetsIndex"
            sub_folder_index="jovianPlanetIndex"
            oracle_subfolder_parser
            ;;
        khXSFYiPdcUTBfbE)
            folder_index="planetsIndex"
            sub_folder_index="junglePlanetIndex"
            oracle_subfolder_parser
            ;;
        tl9BYoquB8rsJXih)
            folder_index="planetsIndex"
            sub_folder_index="oceanPlanetIndex"
            oracle_subfolder_parser
            ;;
        F2UgfneAghjUe29m)
            folder_index="planetsIndex"
            sub_folder_index="rockyPlanetIndex"
            oracle_subfolder_parser
            ;;
        v5cvqSu1q6CUcfPg)
            folder_index="planetsIndex"
            sub_folder_index="shatteredPlanetIndex"
            oracle_subfolder_parser
            ;;
        kr3MLzciAv6E5cjr)
            folder_index="planetsIndex"
            sub_folder_index="taintedPlanetIndex"
            oracle_subfolder_parser
            ;;
        xJpOuGNKKjAVrR3q)
            folder_index="planetsIndex"
            sub_folder_index="vitalPlanetIndex"
            oracle_subfolder_parser
            ;;
        pRHK9NiXjihlEnF1)
            folder_index="planetsIndex"
            sub_folder_index="perilPlanetIndex"
            oracle_subfolder_parser
            ;;
        hlkNpGgDqvEvbZcO)
            folder_index="planetsIndex"
            sub_folder_index="opportunityPlanetIndex"
            oracle_subfolder_parser
            ;;
        pEtkvDQMjhvaOMWC)
            folder_index="charactersIndex"
            sub_folder_index="nameCharactersIndex"
            oracle_subfolder_parser
            ;;
        wWgVqKGopxpyBO0b)
            folder_index="spaceIndex"
            sub_folder_index="sightingSpaceIndex"
            oracle_subfolder_parser
            ;;
        tlFrIW2YNKLeIUDV)
            folder_index="spaceIndex"
            sub_folder_index="sectorNameSpaceIndex"
            oracle_subfolder_parser
            ;;
        *)
            folder_index="planetsIndex"
            oracle_folder_parser
            ;;
    esac
done
