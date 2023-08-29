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

jq -c '.items[] | {name,_id,folder}' starsmith-expanded-oracles-export.json | while read oracleJSON;
do
    name=$(echo $oracleJSON | jq -r .name)
    #echo $name
    id=$(echo $oracleJSON | jq -r ._id)
    folder=$(echo $oracleJSON | jq -r .folder)
    #echo $id
    
    case $folder in
        Uylg7OA7KprzNn9j)
            folder_index=0
            ;;
        EDUYGoTtXEMkKKvh)
            folder_index=1
            ;;
        SW9eKiLhIBf4c0Km)
            folder_index=2
            ;;
        RSG7ksc1DxCTpccr)
            folder_index=3
            ;;
        uFBHcawqNPAmWvqe)
            folder_index=4
            ;;
        h07LKcgdKeSsWGQ2)
            folder_index=5
            ;;
        HhkNFM4BelwaXHfB)
            folder_index=6
            ;;
        EZdpqOZMdqwGsU7q)
            folder_index=7
            ;;
        6cVVQY9tOQiVInzx)
            folder_index=8
            ;;
        xJpOuGNKKjAVrR3q)
            folder_index=9
            ;;
        M0bP1WUZxPqCOHJS)
            folder_index=10
            ;;
        9aKg1x9pvKGwheVZ)
            folder_index=11
            ;;
        aO8e4enqhqWw25H6)
            folder_index=12
            ;;
        N2sObuKzWFZ5LEU2)
            folder_index=13
            ;;
        zBzW0zEkqjmtSZrH)
            # Districts
            folder_index=4
            ;;
        *)
            folder_index=9
            ;;
    esac

    

    cat << EOF
    starforgedOracles.children[$folder_index].children.push({
 	  displayName: '$name',
 	  tables: ['Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.$id'],
 	  children: []
 	})
EOF
done
