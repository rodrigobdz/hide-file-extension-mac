#!/usr/bin/env node
'use strict';
const meow = require('meow');
const hideFileExtensionMac = require('.');

const cli = meow(
	`
	Usage
	  $ hide-extension <file>

	Options
	  --show, -s  Show extensions

	Examples
	  $ hide-extension --show ~/Downloads
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
