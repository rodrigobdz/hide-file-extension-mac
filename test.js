import test from 'ava';
import hideFileExtensionMac from '.';

test.beforeEach(t => {
	t.context.file = 'filepath';
});

test('checks type of file argument', t => {
	t.false(hideFileExtensionMac(''));
});

test('checks type of show argument', t => {
	const err = t.throws(() => {
		hideFileExtensionMac(t.context.file, {show: 123});
	}, TypeError);
	t.is(err.message, 'Expected a boolean, got number');
});

test('returns values', t => {
	t.true(hideFileExtensionMac(t.context.file));
});

test.todo('test file extension functionality');
