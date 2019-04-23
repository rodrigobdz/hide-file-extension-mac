#!/usr/bin/env node
'use strict';
const updateNotifier = require('update-notifier');
const meow = require('meow');
const hideFileExtensionMac = require('.');

const cli = meow(
	`
	Usage
	  $ hide-file-extension-mac <file>

	Options
	  --show, -s  Show extensions

	Examples
		$ hide-file-extension-mac --show foo.txt
		$ hide-file-extension-mac foo.txt
`,
	{
		flags: {
			show: {
				type: 'boolean',
				alias: 's'
			}
		}
	}
);

updateNotifier({pkg: cli.pkg}).notify();

const {input: file} = cli;

if (file.length === 0) {
	console.error('Specify at least one path');
	process.exit(1);
}

const result = hideFileExtensionMac(file, {show: cli.flags.show}) ? 0 : 1;
process.exit(result);
