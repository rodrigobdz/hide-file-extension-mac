import test from 'ava';
import hideFileExtensionMac from '.';

test('title', t => {
	const err = t.throws(() => {
		hideFileExtensionMac(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(hideFileExtensionMac('unicorns'), 'unicorns & rainbows');
});
