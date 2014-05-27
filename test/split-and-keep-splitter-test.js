var splitter = require('../split-and-keep-splitter');
var test = require('tape');
var s = require('../s');

var regex = /{[^}]*}/g;

test('splits and keeps the bits', function (t) {
    var parts = splitter("foo {bar} baz {bux} qux", regex);

    t.deepEqual(parts, ['foo ', '{bar}', ' baz ', '{bux}', ' qux']);
    t.end();
});

test('splits even at the start', function (t) {
    var parts = splitter("{bar} baz {bux}", regex);

    t.deepEqual(parts, ['{bar}', ' baz ', '{bux}']);
    t.end();
});

test('it calls first function on matches and second on spaces', function (t) {
    var questionIt = function (s) {
        return '??' + s + '??';
    };

    var exclaimIt = function (s) {
        return '!!' + s + '!!';
    };

    var parts = splitter("foo {bar} baz {bux} qux", regex, exclaimIt, questionIt);

    t.deepEqual(parts, ['??foo ??', '!!{bar}!!', '?? baz ??', '!!{bux}!!', '?? qux??']);
    t.end();
});
