# Starsmith Compendiums for Ironsworn: Starforged

![GitHub all releases](https://img.shields.io/github/downloads/jendave/starsmith-compendiums/total)
[![Latest Version](https://img.shields.io/github/v/release/jendave/starsmith-compendiums?display_name=tag&sort=semver&label=Latest%20Version)](https://github.com/jendave/starsmith-compendiums/releases/latest)
![Foundry Version](https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https%3A%2F%2Fraw.githubusercontent.com%2Fjendave%2Fstarsmith-compendiums%2Fmain%2Fmodule.json)
[![License](https://img.shields.io/github/license/jendave/starsmith-compendiums)](LICENSE)

## About

FoundryVTT compendiums of the Starsmith supplements for Ironsworn: Starforged by Eric Bright.

## Contact

* [Ironsworn/Starforged Discord Server - FoundryVTT Channel](https://discord.com/channels/437120373436186625/867434336201605160) (jendave)
* [FoundryVTT Discord Server - Module Discussion Channel](https://discord.com/channels/170995199584108546/513918036919713802) (jendave)
* [VOID Affiliate Network Discord Server - Game Hacks Channel](https://discord.com/channels/1222986351272787990/1222986351792619687) (jendave)
* [GitHub Repository](https://github.com/jendave/augmented-reality-foundry)
* [Itch.io](https://jendave.itch.io/)

## Features and Notes

* Oracles, Assets, Moves and Foes from the PDFs are included.
  * [Starsmith Expanded Oracles](https://www.drivethrurpg.com/product/417619/Starsmith-Expanded-Oracles)
  * [Starsmith Assets](https://preview.drivethrurpg.com/en/product/429227/starsmith-assets)
  * [Starsmith Mecha Mercs](https://preview.drivethrurpg.com/en/product/421157/starsmith-mecha-mercs)
  * [Starsmith Cultures](https://preview.drivethrurpg.com/en/product/436860/starsmith-cultures)
* Tables that are copies of the Starforged official tables are included if they are part of Starsmith 1-2, 3-4, 5-6 array.
* Tables that are simply copies of official Starforged tables without the array (some planet and several of the derelict tables for example) are not included since they would be redundant with the standard Starforged System tables.
* Assets can be imported and used on the character sheet.
* Truths can be imported into the Journal tab.
* The Oracle/Rolltable compendiums are system-agnostic. The other compendiums are only available for the [Ironsworn & Starforged](https://foundryvtt.com/packages/foundry-ironsworn).

## Module Installation

To install the module, search for `Starsmith` or `Starforged` in the `Add-On Modules` tab of of the Foundry VTT game setup screen. Then click on `Install`.

Or use this URL and click on `Install`:

```bash
https://github.com/jendave/starsmith-compendiums/releases/latest/download/module.json
```

The compendiums are organized into folders. This works for new worlds, but older worlds may not get updated.

![Compendium Folder Packs](https://github.com/jendave/starsmith-compendiums/blob/main/docs/compendium-folder-packs.jpg?raw=true)

## Tabletop Integration

By default, the Oracles will be integrated into the Oracle Tree in the Character Sheet. The Starforged ruleset must be enabled.

![Character Sheet - Oracles Tree](https://github.com/jendave/starsmith-compendiums/blob/main/docs/oracle-tree-character-sheet.jpg?raw=true)

If this is not desired, then uncheck the `Enable Oracles in Default Tree` in `Configure Settings` game settings.

![Module Game Settings](https://github.com/jendave/starsmith-compendiums/blob/main/docs/module-game-settings.jpg?raw=true)

The Oracles can also be added to the character sheet by using the `Custom Folders` method below.
The Assets can be added to the character sheet by using the `Custom Folders` method below.

Macros for Starship Registry Number, Dice rolling and NPC generation can be found in the `Starsmith Expanded Oracles Macros` compendium. Drag and drop any you need into the macro toolbar. Macros use the current `Roll Mode` when executed.

### (Optional) Use Custom Folders to add Oracles, Assets, Truths and Moves to the Character Sheet

* If integrating the Starsmith Oracles directly into the default Oracle Tree if not desired, then use this method to add the Starsmith Oracles.
  * If it does not already exist, create a `Custom Oracles` folder in `Rollable Tables` tab called:
    * `Custom Oracles` - EN
    * `Oráculos personalizados` - ES
    * `Oracles personnalisés` - FR
    * `Własne Wyrocznie` - PL
    * `Свои оракулы` - RU
  * Open the `Starsmith Expanded Oracles` and `Starsmith Cultures Oracles` compendiums and copy the folders into the `Rollable Tables` tab `Custom Oracles` folder.
    * ![Rollable Tables - Custom Oracles](https://github.com/jendave/starsmith-compendiums/blob/main/docs/custom-oracles-rollable-tables.jpg?raw=true)
  * The Oracles will be available in the Character sheet under `Custom Oracles`.
    * ![Character Sheet - Custom Oracles](https://github.com/jendave/starsmith-compendiums/blob/main/docs/custom-oracles-character-sheet.jpg?raw=true)
* Use the following method to integrate the `Starsmith Assets` and `Starsmith Mecha Mercs Assets` into the character sheet.
  * Create a `Custom Assets` folder in the `Items` tab called:
    * `Custom Assets` - EN
    * `Recursos Personalizados` - ES
    * `Ressources personnalisées` - FR
    * `Własne Aspekty` - PL
  * Open the `Starsmith Assets` compendium and the `Starsmith Mecha Mercs Assets` compendiums and copy the Items into the `Items` `Custom Assets` folder.
    * ![Items - Custom Assets](https://github.com/jendave/starsmith-compendiums/blob/main/docs/custom-assets-items.jpg?raw=true)
  * The Assets will be available in the Character sheet under `Custom Assets`.
    * ![Character Sheet - Custom Assets](https://github.com/jendave/starsmith-compendiums/blob/main/docs/custom-assets-character-sheet.jpg?raw=true)
* Use the following method to integrate the `Starsmith Cultures Moves` into the character sheet.
  * Create a `Custom Moves` folder in the `Items` tab called:
    * `Custom Moves` - EN
    * `Movimientos personalizados` - ES
    * `Actions personnalisées` - FR
    * `Własne Ruchy` - PL
  * Open the `Starsmith Cultures Moves` compendium and copy the Items into the `Items` `Custom Moves` folder.
    * ![Items - Custom Moves](https://github.com/jendave/starsmith-compendiums/blob/main/docs/custom-moves-items.jpg?raw=true)
  * The Moves will be available in the Character sheet under `Custom Moves`.
    * ![Character Sheet - Custom Moves](https://github.com/jendave/starsmith-compendiums/blob/main/docs/custom-moves-character-sheet.jpg?raw=true)
* For Truths, copy the Journal entries from the `Starsmith Mecha Mercs Truths` and `Starsmith Cultures` compendiums to the `Journal` tab.

## Troubleshooting

* Due to changes in version `2.0.0`, uninstalling and re-installing the module may be needed.

## Credits

[Starsmith Expanded Oracles](https://www.drivethrurpg.com/product/417619/Starsmith-Expanded-Oracles) by Eric Bright is licensed for use under the [Creative Commons Attribution 4.0 International License (CC-BY)](https://creativecommons.org/licenses/by/4.0/).

[Starsmith Assets](https://preview.drivethrurpg.com/en/product/429227/starsmith-assets) by Eric Bright is licensed for use under the [Creative Commons Attribution 4.0 International License (CC-BY)](https://creativecommons.org/licenses/by/4.0/).

[Starsmith Mecha Mercs](https://preview.drivethrurpg.com/en/product/421157/starsmith-mecha-mercs) by Eric Bright is licensed for use under the [Creative Commons Attribution 4.0 International License (CC-BY)](https://creativecommons.org/licenses/by/4.0/).

[Starsmith Cultures](https://preview.drivethrurpg.com/en/product/436860/starsmith-cultures) by Eric Bright is licensed for use under the [Creative Commons Attribution 4.0 International License (CC-BY)](https://creativecommons.org/licenses/by/4.0/).

Original oracles by Shawn Tomkin from [Ironsworn: Starforged](https://tomkinpress.com/) are used under the [Creative Commons Attribution 4.0 International License (CC-BY)](https://creativecommons.org/licenses/by/4.0/).

Module by David Hudson and licensed for use under the [MIT license](https://opensource.org/license/mit/).

Starship Registry number generator macro was contributed by @el_reverend (Discord).

Ask the Oracle macros were contributed by Ben Straub.

Licenses and permissions for the macros are listed in the source code.

## Acknowledgements

Created for the incredible [Ironsworn and Ironsworn: Starforged](https://tomkinpress.com/) family of games.

Many thanks to Ben Straub for his fantastic [Ironsworn & Starforged Game System](https://foundryvtt.com/packages/foundry-ironsworn).

### Modules

The following modules were used in the development process

* [foundryvtt-importer module](https://github.com/EthanJWright/foundryvtt-importer)
* [Mana's Compendium Importer](https://gitlab.com/mkahvi/fvtt-compendium-importer)
* [DF Manual Rolls](https://foundryvtt.com/packages/df-manual-rolls)

## FoundryVTT Modules and Other Resources

Please check out my other modules and resources for Ironsworn, Ironsworn: Starforged and other systems.

### [FoundryVTT](https://foundryvtt.com/community/david-hudson/packages) Modules

* [Starforged Custom Compendiums](https://foundryvtt.com/packages/starforged-custom-oracles)
* [Starsmith Compendiums for Ironsworn: Starforged](https://foundryvtt.com/packages/starsmith-expanded-oracles)
* [Ironsmith Expanded Oracles for Ironsworn](https://foundryvtt.com/packages/ironsmith-expanded-oracles)
* [Augmented Reality Cyberpunk City Kit](https://foundryvtt.com/packages/augmented-reality-foundry)
* [Token Note Hover](https://github.com/jendave/token-note-hover)
* [Token Action HUD Ironsworn](https://foundryvtt.com/packages/token-action-hud-ironsworn)
* [VOID 1680 AM for FoundryVTT](https://foundryvtt.com/packages/void-1680-am)
* [Ancient Wonders](https://foundryvtt.com/packages/ancient-wonders)
* [Rise & Shiningstar - An Adventure for Ironsworn: Starforged](https://foundryvtt.com/packages/rise-and-shining-star)
* [Roll Table Importer](https://foundryvtt.com/packages/roll-table-importer)

### [Itch.io](https://jendave.itch.io/) Resources

* [The City on the Breeze - Cyberpunk-inspired Oracle arrays](https://jendave.itch.io/the-city-on-the-breeze)
* [I'll Be Home for Life Day! - Star Wars Life Day Oracle](https://jendave.itch.io/ill-be-home-for-life-day)
* [Critical Success Oracles](https://jendave.itch.io/critical-success-oracles)
* [I Owe My Soul to the Company Planet Oracles](https://jendave.itch.io/i-owe-my-soul-to-the-company-planet)
* [Creature Rank Generator](https://jendave.itch.io/creature-rank-generator)
