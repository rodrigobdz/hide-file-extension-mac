#!/usr/bin/env node

const {exec} = require('child_process');

const meow = require('meow');

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

if (file.length === 0) {
	console.error('Specify at least one path');
	process.exit(1);
}

const hideExtension = cli.flags.show ? 'e' : 'E';

exec(`SetFile -a ${hideExtension} ${file}`, (err, stdout, stderr) => {
	if (err) {
		console.log(err);
		return;
	}

	if (stdout) {
		console.log(`stdout: ${stdout}`);
	}

	if (stderr) {
		console.log(`stderr: ${stderr}`);
	}
});
