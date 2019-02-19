#!/usr/bin/env node
'use strict';
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

const {input: file} = cli;
hideFileExtensionMac(file, {show: cli.flags.show});
