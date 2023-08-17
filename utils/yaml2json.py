#!/usr/bin/env python

import yaml
import json

with open('sfyml-test.yml', 'r') as file:
    data = yaml.safe_load_all(file)
    with open('sfjson-test.json', 'w') as json_file:
        for i in data:
            json.dump(i, json_file)
            json_file.write('\n')
