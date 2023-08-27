#!/usr/bin/env python

import yaml
import json

oraclesList = []

with open('sf-test-tmp.db', 'r') as json_file:
    for jsonObj in json_file:
        oraclesDict = json.loads(jsonObj)
        oraclesList.append(oraclesDict)

with open('sf-test.yml', 'w') as yaml_file:
    yaml.dump_all(oraclesList, yaml_file)
