'use strict';
const {exec} = require('child_process');

module.exports = (file, options = {show: false}) => {
	if (!file) {
		return false;
	}

	if (typeof options.show !== 'boolean') {
		throw new TypeError(`Expected a boolean, got ${typeof options.show}`);
	}

	const hideExtension = options.show ? 'e' : 'E';

	exec(`SetFile -a ${hideExtension} ${file}`, (err, stdout, stderr) => {
		if (err) {
			console.error(err);
			return false;
		}

		if (stdout) {
			console.log(stdout);
		}

		if (stderr) {
			console.error(stderr);
		}
	});

	return true;
};
