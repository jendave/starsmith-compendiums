# starsmith-expanded-oracles
A collection of fan-created oracles for the Ironsworn: Starforged system.

# VIM tips
Remove blank space - :g/^\s*$/d
Remove trailing blanks - :%s/\s\+$//e
Remove leading blanks - ggVG :left
Remove form feeds - :%s/^L//g # ^L using ctrl-V ctrl-L
Visual block mode for copying column text - ctrl-V and use arrow keys
Find string '13-14' and put carriage returns between the numbers and after - :%s/13-14/13\r14\r/g
Replace spaces with carriage return for current and following 99 lines - :.,.+99s/ \+/\r/g

# Modules
[foundryvtt-importer](https://github.com/EthanJWright/foundryvtt-importer)