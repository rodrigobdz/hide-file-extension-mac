'use strict';
const {exec} = require('child_process');

module.exports = (file = '', options = {show: false}) => {
	if (file.length === 0) {
		console.error('Specify at least one path');
		return false;
	}

	if (typeof options.show !== 'boolean') {
		throw new TypeError(`Expected a boolean, got ${typeof options.show}`);
	}

	const hideExtension = options.show ? 'e' : 'E';

	exec(`SetFile -a ${hideExtension} ${file}`, (err, stdout, stderr) => {
		if (err) {
			console.log(err);
			return false;
		}

		if (stdout) {
			console.log(`stdout: ${stdout}`);
		}

		if (stderr) {
			console.log(`stderr: ${stderr}`);
		}
	});

	return true;
};
