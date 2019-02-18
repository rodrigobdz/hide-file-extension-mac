#!/usr/bin/env node
'use strict';
const meow = require('meow');
const hideFileExtensionMac = require('.');

const cli = meow(`
	Usage
	  $ hide-file-extension-mac [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ hide-file-extension-mac
	  unicorns & rainbows
	  $ hide-file-extension-mac ponies
	  ponies & rainbows
`);

console.log(hideFileExtensionMac(cli.input[0] || 'unicorns'));
