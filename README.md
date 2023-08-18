# starsmith-expanded-oracles
A FoundryVTT compendium of fan-created oracles for the Ironsworn: Starforged system.

By Eric Bright 

https://www.drivethrurpg.com/product/417619/Starsmith-Expanded-Oracles

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

# Modules
[foundryvtt-importer](https://github.com/EthanJWright/foundryvtt-importer): This module was used to import the tables from text to RollTables.