Hooks.once("init", async () => {
    // CONFIG.debug.hooks = true;
    const debouncedReload = foundry.utils.debounce(() => window.location.reload(), 100);
    console.log('starsmith-expanded-oracles | Initializing Starsmith Expanded Oracles');
    if (game.data.system.id === 'foundry-ironsworn') {
        game.settings.register('starsmith-expanded-oracles', 'enableOraclesInTree', {
            name: 'Enable Oracles in Default Tree',
            hint: 'Enable Oracles in the character sheet tree. The Starforged ruleset must also be enabled.',
            scope: 'world',
            config: true,
            type: Boolean,
            default: true,
            onChange: debouncedReload
        });
    }
});

const oracleData = {
    launching_your_campaign: {
        character: {
            starship: {
                history_starsmith: ['vqKkxkHXIlUQPRJ1', 'aHafyXedMkIO8YAG', '8ofw7lFejvLDKsTf'],
                quirks_starsmith: ['MnwK7DgFqYQffQGX', 'ngWfv15bDdfLoNp9', 'e8K4CQZ02BaWlPd3'],
            },
            backstory_starsmith: ['bROdhxvU3ConRO7w', 'iFPWcG2DSiAy1SBh', '2Mq84Jf27YJHmYac'],
        },
        starting_sector: {
            trouble_starsmith: ['65Q1iiumixImppo3', 'TOoNVdWtoACPc6uJ', 'idw2Om2jWKCJtZ0F'],
        },
        adventure: {
            inciting_incident_starsmith: ['3sdEY6TacfHlzdeV', 'HPjyLGuRT9orXBYO', 'KexJMZU3NBzMxO5F'],
        }
    },
    character: {
        name: {
            given_name_starsmith: ['UnTcBB8gwFjNoT9O', 'dXJhMhBt7J2FtCVh', '5acO6ocnsJerpEkI'],
            callsign_starsmith: ['0zs4jV8AgYw1GaVB', 'iBgIwzZGGKTuCGpR', 'vUTgxJRCAbApAZgi'],
            family_name_starsmith: ['6pv2fJdPmbl6HDGR', 'v5XqY7qSbXRuBIDR', 'lQR1PUQksmjUX2Fd'],
        },
        first_look_starsmith: ['guv5iEDeLijYuABa', 'oTECxhDPRJJ3yUvh', 'MsQ7rPo2gDyVIQEE'],
        initial_disposition_starsmith: ['Lu30o0Mx9Arwipnw', 'rdlIztz01R6NIJKy', 'gaRwLNFfm30VzuRo'],
        role_starsmith: ['O5x9KiSkoNAVXW6O', 'VEL6LI4wBzI8eb7z', '437mrjVAePTQZGYv'],
        goal_starsmith: ['2xxntLbzYGLZ2cao', 'oLDINu3MLyDgABhD', 'aqapGyFUQ1Jj9uQl'],
        revealed_aspect_starsmith: ['5JUVkMmXuH74WBUv', 'JhY6HtE1X1xSAJW5', 'cFmnWNEUaw8Lf3Qg'],
        random_npc_conversation_starsmith: ['DxF8KMERydgfvtsQ', 'xbNILPSGc3KQxIKD', '1y69WUZsUjvYL5om'],
        npc_plot_knowledge_type_starsmith: ['DA4SVnbbEzYCRIpf'],
        npc_plot_knowledge_topic_starsmith: ['JEj8oBuwhiEFg5qM'],
    },
    core: {
        action_starsmith: ['OSpHuphKhIOcJy6e', 'EdMDbQ2rvj1kjsVw', 'P2eGB9bEuZtwAQxq'],
        theme_starsmith: ['mgGRUu62QCdo0n2Z', 'cCXTQZgR8f8d0Ojq', '2KgRpUejv7U6Pjzf'],
        descriptor_starsmith: ['886Dxrj4VbhJWWH8', '8SO1JnHLK1F7sFwQ', '02ya1SPztxDlHmV0'],
        focus_starsmith: ['zQO6QiD9dBseAj2n', 'vLrIoBVbDBjNziuq', 's58V9HjgGqP3tmT2'],
    },
    creature: {
        first_look_starsmith: ['B639ZC5GB4q8pjr1', 'gUUm4VyBeD9TAxBk', 'K0dEKmbAL3UIV0hG'],
        encountered_behavior_starsmith: ['lKHbFR2SJbazZyMM', 'LcRLOp7oBP2zOiIT', 'xOro3zYQOldpg6oK'],
        revealed_aspect_starsmith: ['se7xt3pePCsteqqW', 'n2OENgk435wG7mS1', 'P0xAOu6mSQjDOQE0'],
    },
    derelict: {
        outer_first_look_starsmith: ['mLDIiGSS9a6Stemt', 'BHZagLL8FdIy9YcF', 'uW58pJGwNVqUKWh0'],
        inner_first_look_starsmith: ['PRqTRLRonCe8QJPt', 'SDJ8MbwiUzwrgqgS', 'kRKzDv4anjxlaqzy'],
        zones_starsmith: ['nUFEtdo8YAyJs0Qp'],
    },
    district: {
        access: {
            area_starsmith: ['aSjZRfT6EHRM31QA'],
            feature_starsmith: ['SikQ2DDDW9EziJu3'],
            peril_starsmith: ['9wn19PGDzUPZ0WYZ'],
            opportunity_starsmith: ['4Dp4wHxjlsAt4lt7']
        },
        community: {
            area_starsmith: ['4wVqFfxiMfxdj0oe'],
            feature_starsmith: ['Xw44xq8doKvVmMuU'],
            peril_starsmith: ['DZ9Kg7DYxnSGARKp'],
            opportunity_starsmith: ['ZNrrr54PJP2qLSjJ']
        },
        engineering: {
            area_starsmith: ['vOp4EtWnZwtkVOM4'],
            feature_starsmith: ['NAjhJFfOfnI4RUhG'],
            peril_starsmith: ['0n1W7xeDuAVmLvNx'],
            opportunity_starsmith: ['YThREKgerZp3np4n']
        },
        living: {
            area_starsmith: ['n7A455CGVfpjJmJi'],
            feature_starsmith: ['0XWUJFkDOKtYBGpe'],
            peril_starsmith: ['eLfhvpqzGzQTwkoz'],
            opportunity_starsmith: ['7A3TS1p0xJx9O8Ws']
        },
        medical: {
            area_starsmith: ['WBCxyfoLNtzvELvC'],
            feature_starsmith: ['qlLVFSJQFchy8GtD'],
            peril_starsmith: ['cNwrs8hGV1Y3duZ2'],
            opportunity_starsmith: ['93LcFghu4VA3VTmW']
        },
        operations: {
            area_starsmith: ['4AJ3CSAW3R38267w'],
            feature_starsmith: ['vaQHHuBfLrQvUWqe'],
            peril_starsmith: ['FJ3pwO45zt7McRK9'],
            opportunity_starsmith: ['XplkuU7q0umRy0ST']
        },
        production: {
            area_starsmith: ['DvXahtGuzoYnWYDZ'],
            feature_starsmith: ['G1kgbuN1Cimyz0SE'],
            peril_starsmith: ['6LLdhY15KByiIv8q'],
            opportunity_starsmith: ['Y72fnZxkJlhDKUAY']
        },
        research: {
            area_starsmith: ['ejV4G8ApVQPPCSg4'],
            feature_starsmith: ['Sd4YeQHAaF4HdMKy'],
            peril_starsmith: ['3wgJC3d2grqpsm5I'],
            opportunity_starsmith: ['Tdq9XQsqjUo2iE3G']
        }
    },
    faction: {
        name: {
            legacy_starsmith: ['JQlTpghFQFXDskkS', 'IHGdTmOVN1zloqmM', 'h9jxuC70RIV2YYod'],
            affiliation_starsmith: ['Xl7mEaAISq6I8Q9x', 'DkdxtOPf0Kk45pIe', '1N106p7YNKKWr7HI'],
            identity_starsmith: ['LhqLvU4wD2bZEicK', 'OAITk7XvPcUBdDih', 'Yyi071quFTMjRybK'],
        },
        type_starsmith: ['jrxDHQYEuB6XayQB', 'tvatzl8nPjjuAAgm', 'jAQFBWOxlwoqbkvz'],
        dominion_starsmith: ['SR2UXvMKVawDqzk4', 'AQ1jgsUYuEhA12Ju', 'CgfxgI13aErxbXod'],
        dominion_leadership_starsmith: ['eAqohSRwBWwx7uy5', 'A6v2rLoWS3xEAtam', 'StGZjdeejoYDZFLN'],
        guild_starsmith: ['k3ylcTmv45qOhxMM', '39brIk5GOHXK0Gqw', 'PDnjZEt9uprBcXoY'],
        fringe_group_starsmith: ['mhQqIfHi4ldU6lk3', 'UE6b4kAluQqrAGUO', 'yjYdyPveqyWUOgwF'],
        projects_starsmith: ['OwLUXvgCKzKEa1wr', '69hcmdT5pjf2F1IU', '7VdNGiCm6peWzLMr'],
        relationships_starsmith: ['Lh2QRYQ2jkRnEI4m', 'tlrca4lQsFIZ8IwZ', 'tRYvWAQqU7xkpJYu'],
        quirks_starsmith: ['000XYhjOoHW6hKAP', 'P1Z2tq2DiGNUalkD', 'bQjrwSHHyHC4BLNc'],
        rumors_starsmith: ['DOLQckJPOzfE8JzY', 'yqA6hSUhfIGURMR2', '6hXWxSEdrjiY7K7f'],
        corporation_field_starsmith: ['FDvT6fPqV2zshZRQ', 'HvKV3pycO2gyqB92', 'KAFl5CXZdfKUmt9J'],
        research_field_of_study_starsmith: ['AVjqygbVDncdAY0P', 'u1MRVAikLO9ZUn05', 'IQxQ2I356Vz0TSGB']
    },
    location_theme: {
        arid: {
            feature_starsmith: ['LfXTtfdk79cjfExo'],
            peril_starsmith: ['nBvFLLQmvnCvBApN'],
            opportunity_starsmith: ['qB6VRHyHz8h9UVAg']
        },
        chronal: {
            feature_starsmith: ['E3FNowqcuhoPBfO0'],
            peril_starsmith: ['aPKWBWjBMujwlLkO'],
            opportunity_starsmith: ['LUu4dLLMs5kXPDEe']
        },
        floating: {
            feature_starsmith: ['0cb49aXSgIa3bzrK'],
            peril_starsmith: ['HTFxriwbDFoMcYLW'],
            opportunity_starsmith: ['AtqoQOiHw2S4sbUd'],
        },
        flooded: {
            feature_starsmith: ['X0BVY0u1oEFvyrzx'],
            peril_starsmith: ['74ke9AgaF8XXelLr'],
            opportunity_starsmith: ['O39GKpnyMuyam9pl']
        },
        frozen: {
            feature_starsmith: ['ZqubM8Y5GsmhsaKj'],
            peril_starsmith: ['3uVKQgKm3EmY7n8T'],
            opportunity_starsmith: ['dr075E2JijU2kCFz']
        },
        inferno: {
            feature_starsmith: ['qDumRuCiRh386guP'],
            peril_starsmith: ['FWkBb1FiTgjbJZyu'],
            opportunity_starsmith: ['xdvA8s2XoL7eKI7O']
        },
        lifeform: {
            feature_starsmith: ['oDv2cXFa85vpTDVr'],
            peril_starsmith: ['yprDpKuUVhNBpGYK'],
            opportunity_starsmith: ['nQO4HP5VjRmCvb81']
        },
        mystical: {
            feature_starsmith: ['ubR5MCShmCM98tN6'],
            peril_starsmith: ['s9DxdLwfESICjln5'],
            opportunity_starsmith: ['4C5yA2j3JjxOQfNc']
        },
        overgrown: {
            feature_starsmith: ['Z1uRFYQVc71TBfQ0'],
            peril_starsmith: ['NnQj1XGs3MgeAdha'],
            opportunity_starsmith: ['LJTBPHnLEvjBF4ku']
        },
        war_zone: {
            feature_starsmith: ['H1G8RPwsZSNB9w9m'],
            peril_starsmith: ['7OWQYSOYnTGTHS1w'],
            opportunity_starsmith: ['XZTTvhEtcmJ08Cin'],
        },
        type_starsmith: ['PnbyoxQfgZdQ3AiU', 'LFxOkncnKTFTisw3']
    },
    misc: {
        story_complication_starsmith: ['nTUhvodHeSxWJeR5', 'C8Kw3VVvAj63jrYK', 'NEVc4gRTMwK9RKJy'],
        story_clue_starsmith: ['DTxCBCBqmiXt725r', '4QVpJ82UxmEfapht', 'YeI3VaHANGw2Yhte'],
        anomaly_effect_starsmith: ['LDZn0zQu8ZUERzyw', 'tSkFbuKgAMurqmr2', '1JCwlvrXH5QnyceQ'],
        combat_action_starsmith: ['OKjUBLf07BQt7C3P', 'OnDA9kOWpOiQEjN7', 'ot3tdcJQecMZcoDJ'],
        item_of_significance_starsmith: ['pgeFss8cl7LDC1fO', 'ONylXJvvAC9hwDmT', 'lmGHgjJtjVjRZCRZ'],
    },
    move: {
        make_a_discovery_starsmith: ['N40PkK7FvfOOgWd1', 'SfSqdbh63oluomwR', '7q5Ex4s960gtaunC'],
        confront_chaos_starsmith: ['CJzOOTMuY0ybXS2U', 'gdSfOA4kll28YIAF', '5kFcmtFv9P2GRH8s'],
        pay_the_price_starsmith: ['LEycAF6bXh6vOJ05', 'jnBW4rcekjOFL5DL', 'uUtEx6wDCzRhMDth']
    },
    planet: {
        shattered: {
            name_starsmith: ['0gKPLApYlwxPhSaE', 'YV6Aysnedk3A7tfo', 'kdHE1vWwFy5TRxqN'],
            observed_from_space_starsmith: ['0ccW0eVajV4NENbZ', 'fJV0agGCQh7hfzW8', 'VD3Q2RTuFjSouslM'],
            feature_starsmith: ['K74TKszI8T8HTUId', 'XlUqt5BZzlHelXVu', 'DsGW7fo4iF64qhWf']
        },
        ice: {
            name_starsmith: ['JrTmSctB5pxFZJyb', 'S04gzGykXCDArYhc', 'm41bieZDQIJBVVbB'],
            observed_from_space_starsmith: ['Uq1ybjzg3WVNH50Q', 'fTHisJyGql8gcVuC', '2bbW8GapNrUbkBiD'],
            feature_starsmith: ['3eZVI73pFd2Vq1Vn', 'wUhTOw2fAMtUYXUn', 'pma1szGfHplWS97Q']
        },
        jovian: {
            name_starsmith: ['kqNvGwKvGSC0jmtx', 'axzyF0OuGXwVzhmh', '6qKWL6r9sN5h4fHg'],
            observed_from_space_starsmith: ['w5yprOoOTFfjZjZj', 'Vh4sPOoSMhQK1Mvs', 'TMaAUj4wwzIRZu5o'],
            feature_starsmith: ['gV7Wxz4tmajgxe54', 'yergAChxtcH7BcKf', 'EqSN5ENCg0MqyoCP']
        },
        vital: {
            name_starsmith: ['imKbV7dPHMQ4awnO', 'eBsfgJ5xK9YNVxoB', 't4NRCKhjxiKFpELH'],
            observed_from_space_starsmith: ['WF7PRchsM9oevTjM', 'YdzwvZU2wgPhmQ7d', 'UZEhVGNsNKw67juE'],
            feature_starsmith: ['jhnjSjXc9PmfTMd4', 'uE01iOVQTLPPTdoB', 'nQyQUAuGZkemZtLh'],
            quick_flora_plant_type_starsmith: ['uWrqooiiEMOBJ4Jw'],
            quick_flora_characteristics_starsmith: ['NtsgKYiw3MDWIRCY'],
            quick_flora_first_look_starsmith: ['7JNNleZeFXvXs9Yv']
        },
        desert: {
            name_starsmith: ['BdbEFPelmQqkGDxs', 'a8S9E1HghcsyxTjX', 'MVnD2orENFUEJrOU'],
            observed_from_space_starsmith: ['Lfk0gDNUJecpYuRi', '60DIGlrsawAmJuYR', 'wfVw6xyf8BY0Fmkw'],
            feature_starsmith: ['EjrmKEYy4ESfBo7C', 'UgIpgaYYzFkd424z', 'bW8E38iRkmFPXJU8']
        },
        tainted: {
            name_starsmith: ['y1kZTpBlrThTET3H', 'ynZJHvrD1MSxw3N0', 'QhVbCgtgVq1tBmPQ'],
            observed_from_space_starsmith: ['WVdSiIWYWSpIUCTN', 'cSZDLj0BqZDc4hbF', '0LirTYoCP3R8Dgzt'],
            feature_starsmith: ['gxozVy6LZuhqjSeC', 'mhrRDafdMmbZTMBq', 'jtCNxmrr3miVoZvr']
        },
        grave: {
            name_starsmith: ['0vFf0yYmD1Kdc9TC', '4Jqgfo9tNEmg6SiL', 'O4WIISBXLxsJdOnU'],
            observed_from_space_starsmith: ['BrE1gQtsBLvg9tSx', 'vBC6s29505G4SVUW', 'eCoLvpIQrVfmDUgO'],
            feature_starsmith: ['6l5Hqitvc4RFxpra', 'Lf2FvABUcYtgv6Ae', '2JAxDfpav0IlsZLK']
        },
        furnace: {
            name_starsmith: ['XkWfdDGklRXgyoVW', 'DZ27gXKmeNZvQBq8', 'XiribiolFLhw9KcB'],
            observed_from_space_starsmith: ['mXE7W7P7Vll5qPo4', 'gLIiu5sGdkM62Ruo', '1sLkhxEaVUaPy57w'],
            feature_starsmith: ['WIAW8H36hzbjshr0', '5esl8jSbsIyPkLZV', 'zlAXlAtOLtqIPqvr']
        },
        rocky: {
            name_starsmith: ['n1fQSqdBI1hcsq53', 'IV7IsgbLgtpPJ0yp', 'UDcY6Jp7nppzmlCI'],
            observed_from_space_starsmith: ['N54KUtDcuuChzF3r', 'aos2ItE40qIbg8aV', 'wX7icUFXfjt33JHV'],
            feature_starsmith: ['5R7eSgr0otB7ggVi', 'AtmwcrDFmiL5KiZY', 'ztBOckg0G5IMb5OX']
        },
        ocean: {
            name_starsmith: ['HJcSLbX4pAVEhTms', 'Pm2jNTRrEBT2xw8g', 'pfwQG72bYwf6sxwt'],
            observed_from_space_starsmith: ['vAi4oyM0iN9Xaku3', 'jGM8ouMCAMH7a9Ac', 'YFa3euIzF3Iu3EVs'],
            feature_starsmith: ['raTeFRB4wM1tpaa6', 'v9dpHyiCM0N18i0f', 'p8ho6XAqC9ubRJLb']
        },
        jungle: {
            name_starsmith: ['SMgvAe3GhveAOgOg', 'rZ9zTYxHP3s4ejZ4', 'ytmG9KxquuHDyL0s'],
            observed_from_space_starsmith: ['9wCWNV5mg80zJCzz', '8NCFv7yLKaxIjARl', 'nFaY8oF7Qg0yKzQn'],
            feature_starsmith: ['vdR5AogzuYvRKWHo', '2uFx0KwWCty8dBMm', 'FFmsU2Mxni5t0kAV']
        },
        peril: {
            lifebearing_starsmith: ['KD84vncPvRKsl4aG', 'wFb1T0jnPFAxosb1', 'v8O2QC6q6nhGtDs2'],
            lifeless_starsmith: ['n1gXDGsSkn2kDcGr', 'c32SZYjoIfPzqze6', 'xF2TW2geNXeqbFpp']
        },
        opportunity: {
            lifebearing_starsmith: ['Trq6J1gDaYlU4bsG', 'frnLEGzyEM9CgA9B', 'P6GDb3IVTDA86AZP'],
            lifeless_starsmith: ['H8uvbUai3jQTFjQF', 'aGmgSngtTVR383aR', 'bdMFP8LItOBEaL9A']
        }
    },
    settlement: {
        location_starsmith: ['tKaPKKmKhxcgYflc', 'wJNYFJsFMbCW8F0L', '7utFAc8SiMTnUDyW'],
        first_look_starsmith: ['4mtNdMOiPAWeLe1P', 'c6A4BvsaG6NOJdzf', 'VWKvi551JyShfjh0'],
        initial_contact_starsmith: ['ybOIRl97yeUfvAtM', 'NDOz35Zb8qn96VKd', 'CnErGVHLpgxKqNTB'],
        authority_starsmith: ['aI2wtdKOQvG0pZBY', 'eKDmSpdyzwRM7ydc', 'zMTlB0xQZyEc8PtQ'],
        projects_starsmith: ['iJbLrynKmB25yxKu', 'wPh8ecvQZvyebiE0', 'tNudiYQ7dnUpeONr'],
        trouble_starsmith: ['rd2ZCaZFUEhca5lp', 'LpumgIbgDG8wRdso', 'W6VGcvzStPUK4Yyc'],
        name_starsmith: ['G6mXIbtSkacs9660', 'iZtujTpGpTw5tMO4', 'ce7JLAwBAGqLYgHo']
    },
    space: {
        sighting: {
            terminus_starsmith: ['HAVQK27TE8slQu60', 'U07ucsEg2i6NPNVb', 'nV1RjQlEGnMChpzA'],
            outlands_starsmith: ['aiRMDaf1F4ZOTUZM', '3udObEySl0mUNtbr', 'pljXdRpqxaNfzlLW'],
            expanse_starsmith: ['iuepGP5QpCa8k4hu', 'd3wRe8JyFn8ScAxY', 'uVLY1hKVNPninkIq']
        },
        sector_name: {
            prefix_starsmith: ['OBgw20hZhAlacN3n', '1qgTxhg1qpPATkiu', 'vk6vBQsstREMx9AV'],
            suffix_starsmith: ['KOB1e7oQ9qA5lZIB', 'KGTJ4kSSkeyHxgZy', 'MQFMTMilYVltbR0q'],
        },
        stellar_object_starsmith: ['lZotf8hb5262ZC9y', 'hwmEnxGWjNH5yxv4', 'KCXgXQVMkPiEkqbe'],
        peril_starsmith: ['G90eIxEM1jKH5YY4', 'B6tAK1uWbSAEFUKz', 'aRRBZvovBw2M28CM'],
        opportunity_starsmith: ['Us6oXnDxSfqSetSL', 'Poyn3CNftqVhkoeD', 't1AOwc3lKoqF9cJ8'],

    },
    starship: {
        mission: {
            terminus_starsmith: ['svjsxDT4R9rSH8YE', 'qd4UyfLFc16vUkEt', 'R3sSKQGqhjScKvsB'],
            outlands_starsmith: ['qCcHtfV0mIRKLQvp', '8AY3xj8qpFIVfpak', 'g6wu6JxaxGRjpNoY'],
            expanse_starsmith: ['VirDtYNEzhVFJ1ei', 'eqAJAIUVoWx2blcp', 'wjJ8Qd2skumxAFNI'],
        },
        registry_number_initials_starsmith: ['byBI6d46QtVH1goo'],
        registry_number_model_starsmith: ['ZlVBOz7v2GzEuXtW'],
        type_starsmith: ['LOqba6VziVXZDj0W', 'tioleBB8HuEWvzTi', 'pBfCCKylt1qhAoPI'],
        fleet_starsmith: ['oC3tS7XQnb0aF5bo', 'VVwHG9fOYRad8p7o', '8Lxuj8yNMgwbWIRo'],
        initial_contact_starsmith: ['7bD2a8NrVeBXnlpJ', 's9jstF4qimhTSDOT', 'Zp5JgqKSBul72P88'],
        first_look_starsmith: ['0L6dlLeVLJkMXhzY', '9T2TFppaaAgFrT61', 'W0QM0miRxvJmVp2H'],
        name_starsmith: ['6KaSYbplCYJ89v6C', 'lXErrHKlwhOZooyR', 'mJg13l6dbjIX8etC'],
    },
    precursor_vault: {
        interior: {
            first_look_starsmith: ['CJlBnWFAMRRSD2XK', 'otjCnngJ1Yw74rjt', '7c2TaEWTUaaJlOdG'],
            feature_starsmith: ['GiMZuPESMrzCW4sO', 'JAM3ft7utYoihnlf', '0DWXYSJfD5kotHW3'],
            peril_starsmith: ['4DINDAOyS576i0uC', 'CO2a43NmZ4Ui8KHr', 'O7AobPhngMyKVX0u'],
            opportunity_starsmith: ['FKcW0ngd4tAteFul', 'Q0CvTCMrIsZJPjW4', 'h9DmNX5Hw3OyNrB6'],
        },
        sanctum: {
            purpose_starsmith: ['hbSxvEVDrXKp3nfh', 'f11tgzgGHAk3EF5H', 'jB7Jc9SEkxuhlH2g'],
            feature_starsmith: ['tMI4HdhdS3uPcQ7A', 'GA2VJG2Z4Pud10Xj', 'lMMPTGXOGCxKHj1n'],
            peril_starsmith: ['U3zbLYTj8aYT7jZ5', 'C3UBEjh7hWTgY16S', 'E9NXVGkiTpxDLadk'],
            opportunity_starsmith: ['6wZ3tNjg9YB24ksU', 'm2fmYWlfXiAkiGJM', 'jNZY2f4GGlhdTxwj'],
        },
        form_starsmith: ['qp0q4hCncEEwFmzJ', 'OnrAyLWl8O4X07DO', 'bVzSFWwcuPrZnzRI'],
        shape_starsmith: ['ug2VXU0gTErEpqjW', 'EOUhqXJNMURqmZ23', 'XfLeKTFTNoNHJeFk'],
        material_starsmith: ['5w7WAG73eRo6P0BO', 'h7OkPCGMJmUncIJb', 'c5wad4ZSEmOKIbV0'],
        outer_first_look_starsmith: ['zfHAVw0GLCDpURvp', '8FM5A0pW9nomPpFW', 'v3VP3uJAEm5ILL8l'],
    },
    culture_starsmith: {
        alien: {
            xenoanthropology: {
                alien_traditions: ['u6JMeLrphtqKV3Cs'],
                alien_values: ['JI2IdlFsajPtltcA'],
                civilization_age: ['FyvudZ6gwfojEenl'],
                random_alien_names: ['1r9nOKWNSaTZUgfl'],
                technology_level: ['7UblRUXJaOtwR7Jg'],
            },
            xenobiology: {
                specific_form: {
                    aquatic: ['WdpcWI5aom7PXhtp'],
                    avian: ['rUiQbqJTlGTD3qzt'],
                    beast_mammal: ['5G8QCVn8Rz2jKvi8'],
                    beast_reptile: ['J8JLANyxJDuQB3UL'],
                    elemental_energy_matter: ['jPmE3P18K2BIkSaS'],
                    gelatinous_amorphous: ['xExa90On1uzweMfN'],
                    insect_arachnid: ['CSGlLfUuqwAOaUVC'],
                    mechanical_humanoid: ['n6araBwnPQ7PqVOO'],
                    necrotic_parasitic: ['p144bL9YQrhSaoo6'],
                    plant_fungus: ['nJDxYDhJBJTrv8wS'],
                },
                basic_form: ['IMKDCMwZxzZAeRIZ'],
                childbearing_method: ['Jjvn33r1BvOirbtN'],
                communication_method: ['R6o2sis7LzuLMYPM'],
                random_alien_names: ['Mkc45ls9gGal1kLL'],
                reproduction_method: ['vXlGiFxtnvtZI74D'],
                sensory_perception: ['QWnjl6AE3K1ZRQeu'],
                strange_alien_quality: ['bWs9ShNL58uiiu2K'],
            }
        },
        familiar: {
            cultural_tradition: {
                common_symbols_of_traditions: ['i598suTldJaieqe8'],
                tradition_category: ['w1ZtxtjSykGHD7ug'],
            },
            culture: {
                government_structure: ['mauMK4ErRusP6aiW'],
                primary_cultural_value: ['Q818dBO1NkQSbcEE'],
                societal_flaw: ['lWtjcbWESZRwcTFu'],
            },
            dimensions_of_cultures: {
                competitive: ['ZH52icOfOWMfOnYN'],
                individualism: ['pv3BNhXBPHSpL0xi'],
                long_term_orientation: ['H3cmYGL5GIuXMote'],
                power_distance: ['YWmAGkJy8wzc5gL7'],
                restraint: ['XQMGDghIkIquxjC7'],
                uncertainty_avoidance: ['UpBeEupz4qfPUp23']
            }
        }
    }
}

function mergeOracleTrees(target, source, path) {
    Object.entries(source).forEach(([key, value], i) => {
        const index = target.findIndex(e => e.dsIdentifier === key);
        let element = index === -1 ? {
            dsIdentifier: key,
            displayName: game.i18n.localize((path + key).replace("_starsmith", "") + "_label"),
            children: [],
            tables: []
        } : target[index];

        if (Array.isArray(value)) {
            const compendiumName = path.includes("culture") ? "starsmithculturesoracles" : "starsmithexpandedoracles";
            element.tables.push(...value.map(i => `Compendium.starsmith-expanded-oracles.${compendiumName}.RollTable.` + i));
        } else {
            mergeOracleTrees(element.children, value, path + key + ".");
        }

        if (index !== -1) {
            target[index] = element;
            return;
        }

        if (key.includes("_starsmith")) {
            const origKey = key.slice(0, -10);
            const prevIndex = target.findIndex(e => e.dsIdentifier === origKey);
            if (prevIndex !== -1) {
                target.splice(prevIndex + 1, 0, element);
                return;
            }
        }

        target.push(element);
    });
}

Hooks.once("ironswornOracleTreesReady", async () => {
    if (game.data.system.id === 'foundry-ironsworn') {
        if (game.settings.get('starsmith-expanded-oracles', 'enableOraclesInTree') && game.settings.get('foundry-ironsworn', 'ruleset-starforged')) {
            const starforgedOracles = CONFIG.IRONSWORN.getOracleTree('starforged');

            mergeOracleTrees(starforgedOracles.children, oracleData, "STARSMITH.");
            
            CONFIG.IRONSWORN.registerOracleTree('starforged', starforgedOracles)
        }
    }
}
);
