#!/usr/bin/env python

import argparse

parser = argparse.ArgumentParser(description='Print the number of arguments.')
parser.add_argument('arguments', metavar='ARG', type=str, nargs='*', help='some arguments')
parser.add_argument('-m', dest='message', default='', help='custom message')
parser.add_argument('-v', nargs='*')
# TODO: add '-v' option for verbose mode

args = parser.parse_args()

count = 0
argstr = ''

for a in args.arguments:
    # TODO: add '-v' option for verbose mode
    # and print each argument
    count += 1
    argstr += a + ' '

print(args)
print(args.arguments)

if args.message != '':
    print(args.message)

print(count)
if argstr != '':
	print('Arguments: ' + argstr)
