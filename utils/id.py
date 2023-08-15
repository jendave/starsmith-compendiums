#!/usr/bin/env python

import random
import string
from sys import stderr

def main():
    for x in range(300):
        print(''.join(random.choice(string.ascii_lowercase + string.digits) for _ in range(16)))

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        stderr.write("ok, bye\n")
        exit(1)