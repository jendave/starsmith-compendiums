# starsmith-expanded-oracles

![Download count of latest release](https://img.shields.io/github/downloads/jendave/starsmith-expanded-oracles/archive/refs/heads/main.zip?style=for-the-badge)

A FoundryVTT compendium of fan-created oracles for the Ironsworn: Starforged system.

To install it, use this URL:

```
https://github.com/jendave/starsmith-expanded-oracles/raw/main/module.json
```

# Credits

Oracles by Eric Bright and licensed for use under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license (creativecommons.org/licenses/by-nc-sa/4.0/).

https://www.drivethrurpg.com/product/417619/Starsmith-Expanded-Oracles

# Features and Notes
* Oracle tables from the PDF are included. 
* Open the compendium and import all RollTables to your World.
* Tables that are copies of the Starforged official tables are included if they are part of Starsmith 1-2, 3-4, 5-6 array. 
* Tables that are simply copies of official Starforged tables without the arry (some planet and several of the derelict tables for example) are not included since they would be redundant with the Starforged System tables.

# TODOs
* Fix casing of tables names
* Add descriptions to each table
* See if there is a way to roll a complete Registry Number Builder.

# Modules
[foundryvtt-importer](https://github.com/EthanJWright/foundryvtt-importer): This module was used to import the tables from text to RollTables.

# Text Manipulation Tips
Some small tips to manipulate the text

## Utilities
```
pdftotext -table -nodiag Starsmith-Expanded-Oracles-Dec-17-22.pdf Starsmith-Expanded-Oracles-Dec-17-22-4.txt # export PDF text to text file
```
## VIM Tips
```
:g/^\s*$/d # Remove blank space
:%s/\s\+$//e # Remove trailing blanks
ggVG :left # Remove leading blanks
:%s/^L//g # ^L using ctrl-V ctrl-L # Remove form feeds
Visual block mode for copying column text - ctrl-V and use arrow keys
:%s/13-14/13\r14\r/g # Find string '13-14' and put carriage returns between the numbers and after '-'
:.,.+99s/ \+/\r/g # Replace spaces with carriage return for current and following 99 lines
```
