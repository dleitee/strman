import chai from 'chai';
import {isString, trim, removeSpaces, replace, removeNonWords, append,
    at, between, chars, collapseWhitespace, contains, containsAll, containsAny, countSubstr,
    endsWith, startsWith, ensureLeft, ensureRight, first, last, indexOf, lastIndexOf, insert,
    length, leftPad, rightPad, prepend, removeLeft, appendArray, prependArray, removeRight,
    repeat, reverse, shuffle, surround, safeTruncate, transliterate, truncate, removeEmptyStrings,
    format, compare, equal, inequal, hexEncode, hexDecode, binEncode, binDecode, decEncode,
    decDecode, base64Encode, base64Decode, htmlDecode, htmlEncode}
    from '../src/strman';

describe('isString function', () => {
    it('should be false', () => {
        let fixtures = [
            1,
            false,
            1.2,
            [],
            {}
        ];

        fixtures.forEach(el => {
            chai.expect(isString(el)).to.equal(false);
        });
    });
    it('should be true', () => {
        let fixtures = [
            'string',
            'string'
        ];

        fixtures.forEach(el => {
            chai.expect(isString(el)).to.equal(true);
        });
    });
});

describe('trim, ltrim and rtrim function', () => {
    it('should be foo bar', () => {
        let fixtures = [
            'foo bar',
            'foo bar ',
            ' foo bar',
            '  foo bar   '
        ];

        fixtures.forEach(el => {
            chai.expect(trim(el)).to.equal('foo bar');
        });
    });
    it('should be foo bar without @', () => {
        let fixtures = [
            'foo bar',
            'foo bar@',
            '@foo bar',
            '@@foo bar@@@'
        ];

        fixtures.forEach(el => {
            chai.expect(trim(el, '@')).to.equal('foo bar');
        });
    });
    it('should be foo bar without @ and with #', () => {
        let fixtures = [
            '@#foo bar',
            '#foo bar@',
            '@#foo bar@',
            '@@#foo bar@@@'
        ];

        fixtures.forEach(el => {
            chai.expect(trim(el, '@')).to.equal('#foo bar');
        });
    });
});

describe('removeSpaces function', () => {
    it('should be foobar', () => {
        let fixtures = [
            'foo bar',
            'foo bar ',
            ' foo bar',
            ' foo bar '
        ];

        fixtures.forEach(el => {
            chai.expect(removeSpaces(el)).to.equal('foobar');
        });
    });
    it('should be foo-bar', () => {
        let fixtures = [
            'foo bar'
        ];

        fixtures.forEach(el => {
            chai.expect(removeSpaces(el, '-')).to.equal('foo-bar');
        });
    });
});

describe('replace function', () => {
    it('should be bar bar', () => {
        let fixtures = [
            'foo bar'
        ];

        fixtures.forEach(el => {
            chai.expect(replace(el, 'foo', 'bar')).to.equal('bar bar');
        });
    });
    it('should be bar bar bar', () => {
        let fixtures = [
            'foo bar foo'
        ];

        fixtures.forEach(el => {
            chai.expect(replace(el, 'foo', 'bar')).to.equal('bar bar bar');
        });
    });
});

describe('replace function caseSensitive', () => {
    it('should be bar bar', () => {
        let fixtures = [
            'FOO bar'
        ];

        fixtures.forEach(el => {
            chai.expect(replace(el, 'foo', 'bar', false)).to.equal('bar bar');
        });
    });
    it('should be bar bar bar', () => {
        let fixtures = [
            'FOO bar foo'
        ];

        fixtures.forEach(el => {
            chai.expect(replace(el, 'foo', 'bar', false)).to.equal('bar bar bar');
        });
    });
});

describe('transliterate function', () => {
    it('should be foo bar', () => {
        let fixtures = [
            'fóõ bár'
        ];

        fixtures.forEach(el => {
            chai.expect(transliterate(el)).to.equal('foo bar');
        });
    });
});

describe('append function', () => {
    it('should be foobar', () => {
        chai.expect(append('f', 'o', 'o', 'b', 'a', 'r')).to.equal('foobar');
        chai.expect(append('foobar')).to.equal('foobar');
        chai.expect(append('', 'foobar')).to.equal('foobar');
    });
});

describe('appendArray function', () => {
    it('should be foobar', () => {
        chai.expect(appendArray('f', ['o', 'o', 'b', 'a', 'r'])).to.equal('foobar');
        chai.expect(appendArray('foobar')).to.equal('foobar');
        chai.expect(appendArray('', ['foobar'])).to.equal('foobar');
    });
});

describe('prepend function', () => {
    it('should be foobar', () => {
        chai.expect(prepend('r', 'f', 'o', 'o', 'b', 'a')).to.equal('foobar');
        chai.expect(prepend('foobar')).to.equal('foobar');
        chai.expect(prepend('', 'foobar')).to.equal('foobar');
        chai.expect(prepend('bar', 'foo')).to.equal('foobar');
    });
});

describe('prependArray function', () => {
    it('should be foobar', () => {
        chai.expect(prependArray('r', ['f', 'o', 'o', 'b', 'a'])).to.equal('foobar');
        chai.expect(prependArray('foobar')).to.equal('foobar');
        chai.expect(prependArray('', ['foobar'])).to.equal('foobar');
        chai.expect(prependArray('bar', ['foo'])).to.equal('foobar');
    });
});

describe('at function', () => {
    it('should be f', () => {
        chai.expect(at('foobar', 0)).to.equal('f');
        chai.expect(at('ofobar', 1)).to.equal('f');
        chai.expect(at('oobarf', -1)).to.equal('f');
        chai.expect(at('oobafr', -2)).to.equal('f');

    });
});

describe('between function', () => {
    it('should be ["foo"]', () => {
        chai.expect(between('[foo]', '[', ']')[0]).to.equal('foo');
        chai.expect(between('<span>foo</span>', '<span>', '</span>')[0]).to.equal('foo');
        chai.expect(between('<span>bar</span><span>foo</span>', '<span>', '</span>')[0]).to.equal('bar');
        chai.expect(between('<span>bar</span><span>foo</span>', '<span>', '</span>')[1]).to.equal('foo');
    });
});

describe('chars function', () => {
    it('should be ["t", "i", "t", "l", "e"]', () => {
        let title = 'title';
        chai.expect(chars(title)[0]).to.equal('t');
        chai.expect(chars(title)[1]).to.equal('i');
        chai.expect(chars(title)[2]).to.equal('t');
        chai.expect(chars(title)[3]).to.equal('l');
        chai.expect(chars(title)[4]).to.equal('e');
    });
});

describe('collapseWhitespace function', () => {
    it('should be foo bar', () => {
        let fixtures = [
            'foo    bar',
            '     foo     bar    ',
            ' foo     bar   ',
            '    foo     bar '
        ];

        fixtures.forEach(el => {
            chai.expect(collapseWhitespace(el)).to.equal('foo bar');
        });
    });
});

describe('removeNonWords function', () => {
    it('should be foobar', () => {
        let fixtures = [
            'foo bar',
            'foo&bar-'
        ];

        fixtures.forEach(el => {
            chai.expect(removeNonWords(el)).to.equal('foobar');
        });
    });
});

describe('contains function', () => {
    it('should be true, caseSensitive = true', () => {
        let fixtures = [
            'foo bar',
            'bar foo',
            'foobar',
            'foo'
        ];

        fixtures.forEach(el => {
            chai.expect(contains(el, 'foo', true)).to.equal(true);
        });
    });

    it('should be true, caseSensitive = false', () => {
        let fixtures = [
            'foo bar',
            'bar foo',
            'foobar',
            'foo'
        ];

        fixtures.forEach(el => {
            chai.expect(contains(el, 'FOO', false)).to.equal(true);
        });
    });

    it('should be false, caseSensitive = true', () => {
        let fixtures = [
            'foo bar',
            'bar foo',
            'foobar',
            'foo'
        ];

        fixtures.forEach(el => {
            chai.expect(contains(el, 'FOO', true)).to.equal(false);
        });
    });

    it('should be false, caseSensitive = false', () => {
        let fixtures = [
            'foo bar',
            'bar foo',
            'foobar',
            'foo'
        ];

        fixtures.forEach(el => {
            chai.expect(contains(el, 'dleitee', false)).to.equal(false);
        });
    });
});

describe('containsAll function', () => {
    it('should be true, if needle = []', () => {
        chai.expect(containsAll('a', [], true)).to.equal(false);
    });

    it('should be true, caseSensitive = true', () => {
        let fixtures = [
            'foo bar',
            'bar foo',
            'foobar'
        ];

        fixtures.forEach(el => {
            chai.expect(containsAll(el, ['foo', 'bar'], true)).to.equal(true);
        });
    });

    it('should be true, caseSensitive = false', () => {
        let fixtures = [
            'foo bar',
            'bar foo',
            'foobar'
        ];

        fixtures.forEach(el => {
            chai.expect(containsAll(el, ['FOO', 'BAR'], false)).to.equal(true);
        });
    });

    it('should be false, caseSensitive = true', () => {
        let fixtures = [
            'foo',
            'bar foo',
            'foobar',
            'foo'
        ];

        fixtures.forEach(el => {
            chai.expect(containsAll(el, ['FOO', 'BAR'], true)).to.equal(false);
        });
    });

    it('should be false, caseSensitive = false', () => {
        let fixtures = [
            'foo bar',
            'bar foo',
            'foobar',
            'foo'
        ];

        fixtures.forEach(el => {
            chai.expect(containsAll(el, ['foo', 'bar', 'dleitee'], false)).to.equal(false);
        });
    });
});


describe('containsAny function', () => {
    it('should be true, caseSensitive = true', () => {
        let fixtures = [
            'foo bar',
            'bar foo',
            'foobar'
        ];

        fixtures.forEach(el => {
            chai.expect(containsAny(el, ['foo', 'bar', 'test'], true)).to.equal(true);
        });
    });

    it('should be true, caseSensitive = false', () => {
        let fixtures = [
            'foo bar',
            'bar foo',
            'foobar'
        ];

        fixtures.forEach(el => {
            chai.expect(containsAny(el, ['FOO', 'BAR', 'Test'], false)).to.equal(true);
        });
    });

    it('should be false, caseSensitive = true', () => {
        let fixtures = [
            'foo',
            'bar foo',
            'foobar',
            'foo'
        ];

        fixtures.forEach(el => {
            chai.expect(containsAny(el, ['FOO', 'BAR', 'TEST'], true)).to.equal(false);
        });
    });

    it('should be false, caseSensitive = false', () => {
        let fixtures = [
            'foo bar',
            'bar foo',
            'foobar',
            'foo'
        ];

        fixtures.forEach(el => {
            chai.expect(containsAny(el, ['dleitee'], false)).to.equal(false);
        });
    });
});

describe('countSubstr function', () => {
    it('should be 7', () => {
        let fixtures = [
            'aaaaaAaaAA',
            'faaaAAaaaaAA',
            'aaAAaaaaafA',
            'AAaaafaaaaAAAA'
        ];

        fixtures.forEach(el => {
            chai.expect(countSubstr(el, 'a')).to.equal(7);
        });
    });

    it('should be 7 without caseSensitive', () => {
        let fixtures = [
            'aaaaaaa',
            'faaaaaaa',
            'aaaaaaaf',
            'aaafaaaa'
        ];

        fixtures.forEach(el => {
            chai.expect(countSubstr(el, 'A', false)).to.equal(7);
        });
    });


    it('should be 2 with allowOverlaping', () => {
        chai.expect(countSubstr('aaa', 'aa', true, true)).to.equal(2);
    });

    it('should be 1 without allowOverlaping', () => {
        chai.expect(countSubstr('aaa', 'aa', true, false)).to.equal(1);
    });
});

describe('endsWith function', () => {
    it('should be true', () => {
        let fixtures = [
            'foo bar',
            'bar'
        ];

        fixtures.forEach(el => {
            chai.expect(endsWith(el, 'bar')).to.equal(true);
        });

        let fixtures2 = [
            'foo barr',
            'barr'
        ];

        fixtures2.forEach(el => {
            chai.expect(endsWith(el, 'bar', el.length-1)).to.equal(true);
        });
    });
});

describe('endsWith function caseSensitive', () => {
    it('should be true', () => {
        let fixtures = [
            'foo bar',
            'bar'
        ];

        fixtures.forEach(el => {
            chai.expect(endsWith(el, 'BAR', null, false)).to.equal(true);
        });

        let fixtures2 = [
            'foo barr',
            'barr'
        ];

        fixtures2.forEach(el => {
            chai.expect(endsWith(el, 'BAR', el.length-1, false)).to.equal(true);
        });
    });
});

describe('startsWith function', () => {
    it('should be true', () => {
        let fixtures = [
            'foo bar',
            'foobar',
            'foo'
        ];

        fixtures.forEach(el => {
            chai.expect(startsWith(el, 'foo')).to.equal(true);
        });

        let fixtures2 = [
            'afoo barr',
            'afoo'
        ];

        fixtures2.forEach(el => {
            chai.expect(startsWith(el, 'foo', 1)).to.equal(true);
        });
    });
});

describe('startsWith function caseSensitive', () => {
    it('should be true', () => {
        let fixtures = [
            'foo bar',
            'foobar',
            'foo'
        ];

        fixtures.forEach(el => {
            chai.expect(startsWith(el, 'FOO', 0, false)).to.equal(true);
        });

        let fixtures2 = [
            'afoo barr',
            'afoo'
        ];

        fixtures2.forEach(el => {
            chai.expect(startsWith(el, 'FOO', 1, false)).to.equal(true);
        });
    });
});

describe('ensureLeft function', () => {
    it('should be foobar', () => {
        let fixtures = [
            'bar',
            'foobar'
        ];

        fixtures.forEach(el => {
            chai.expect(ensureLeft(el, 'foo')).to.equal('foobar');
        });
    });
});

describe('ensureRight function', () => {
    it('should be foobar', () => {
        let fixtures = [
            'foo',
            'foobar'
        ];

        fixtures.forEach(el => {
            chai.expect(ensureRight(el, 'bar')).to.equal('foobar');
        });
    });
});

describe('first function', () => {
    it('should be foo', () => {
        let fixtures = [
            'foo',
            'foobar'
        ];

        fixtures.forEach(el => {
            chai.expect(first(el, 3)).to.equal('foo');
        });
    });
});

describe('last function', () => {
    it('should be foo', () => {
        let fixtures = [
            'foo',
            'foobarfoo'
        ];

        fixtures.forEach(el => {
            chai.expect(last(el, 3)).to.equal('foo');
        });
    });
});

describe('indexOf function', () => {
    it('should be true', () => {
        let value = 'foobar';
        chai.expect(indexOf(value, 'f')).to.equal(0);
        chai.expect(indexOf(value, 'o')).to.equal(1);
        chai.expect(indexOf(value, 'b')).to.equal(3);
        chai.expect(indexOf(value, 'a')).to.equal(4);
        chai.expect(indexOf(value, 'r')).to.equal(5);
        chai.expect(indexOf(value, 't')).to.equal(-1);
    });
});

describe('indexOf function caseSensitive', () => {
    it('should be true', () => {
        let value = 'FOOBAR';
        chai.expect(indexOf(value, 'f', undefined, false)).to.equal(0);
        chai.expect(indexOf(value, 'o', undefined, false)).to.equal(1);
        chai.expect(indexOf(value, 'b', undefined, false)).to.equal(3);
        chai.expect(indexOf(value, 'a', undefined, false)).to.equal(4);
        chai.expect(indexOf(value, 'r', undefined, false)).to.equal(5);
        chai.expect(indexOf(value, 't', undefined, false)).to.equal(-1);
    });
});

describe('lastIndexOf function', () => {
    it('should be true', () => {
        let value = 'foobarfoobar';
        chai.expect(lastIndexOf(value, 'f')).to.equal(6);
        chai.expect(lastIndexOf(value, 'o')).to.equal(8);
        chai.expect(lastIndexOf(value, 'b')).to.equal(9);
        chai.expect(lastIndexOf(value, 'a')).to.equal(10);
        chai.expect(lastIndexOf(value, 'r')).to.equal(11);
        chai.expect(lastIndexOf(value, 't')).to.equal(-1);
    });
});

describe('lastIndexOf function caseSensitive', () => {
    it('should be true', () => {
        let value = 'foobarfoobar';
        chai.expect(lastIndexOf(value, 'F', undefined, false)).to.equal(6);
        chai.expect(lastIndexOf(value, 'O', undefined, false)).to.equal(8);
        chai.expect(lastIndexOf(value, 'B', undefined, false)).to.equal(9);
        chai.expect(lastIndexOf(value, 'A', undefined, false)).to.equal(10);
        chai.expect(lastIndexOf(value, 'R', undefined, false)).to.equal(11);
        chai.expect(lastIndexOf(value, 'T', undefined, false)).to.equal(-1);
    });
});

describe('insert function', () => {
    it('should be foo bar', () => {
        chai.expect(insert('fbar', 'oo ', 1)).to.equal('foo bar');
        chai.expect(insert('foo', ' bar', 3)).to.equal('foo bar');
        chai.expect(insert('foo bar', 'asadasd', 13)).to.equal('foo bar');
    });
});


describe('length function', () => {
    it('should be 3', () => {
        chai.expect(length('foo')).to.equal(3);
        chai.expect(length('bar')).to.equal(3);
        chai.expect(length('dan')).to.equal(3);
    });
});

describe('leftPad function', () => {
    it('should be 00001', () => {
        chai.expect(leftPad('1', 5, '00')).to.equal('00001');
        chai.expect(leftPad('1', 5, 0)).to.equal('00001');
        chai.expect(leftPad('01', 5, 0)).to.equal('00001');
        chai.expect(leftPad('001', 5, 0)).to.equal('00001');
        chai.expect(leftPad('0001', 5, 0)).to.equal('00001');
        chai.expect(leftPad('00001', 5, 0)).to.equal('00001');
    });
});

describe('rightPad function', () => {
    it('should be 10000', () => {
        chai.expect(rightPad('1', 5, '00')).to.equal('10000');
        chai.expect(rightPad('1', 5, 0)).to.equal('10000');
        chai.expect(rightPad('10', 5, 0)).to.equal('10000');
        chai.expect(rightPad('100', 5, 0)).to.equal('10000');
        chai.expect(rightPad('1000', 5, 0)).to.equal('10000');
        chai.expect(rightPad('10000', 5, 0)).to.equal('10000');
    });
});


describe('removeLeft function', () => {
    it('should be true', () => {
        let fixtures = [
            'foobar',
            'bar'
        ];

        fixtures.forEach(el => {
            chai.expect(removeLeft(el, 'foo')).to.equal('bar');
        });
    });
});

describe('removeRight function', () => {
    it('should be true', () => {
        let fixtures = [
            'foobar',
            'foo'
        ];

        fixtures.forEach(el => {
            chai.expect(removeRight(el, 'bar')).to.equal('foo');
        });

        chai.expect(removeRight('foofoofoobar', 'bar')).to.equal('foofoofoo');
        chai.expect(removeRight('foofoofoobar', 'foobar')).to.equal('foofoo');
    });
});

describe('repeat function', () => {
    it('should be 1 repeated', () => {
        chai.expect(repeat('1', 1)).to.equal('1');
        chai.expect(repeat('1', 2)).to.equal('11');
        chai.expect(repeat('1', 3)).to.equal('111');
        chai.expect(repeat('1', 4)).to.equal('1111');
        chai.expect(repeat('1', 5)).to.equal('11111');
    });
});

describe('reverse function', () => {
    it('should be strings reverse', () => {
        chai.expect(reverse('foo')).to.equal('oof');
        chai.expect(reverse('daniel')).to.equal('leinad');
        chai.expect(reverse('')).to.equal('');
        chai.expect(reverse('bar')).to.equal('rab');
        chai.expect(reverse('foo_')).to.equal('_oof');
        chai.expect(reverse('f')).to.equal('f');
    });
});

describe('shuffle function', () => {
    it('should be strings shuffle', () => {
        chai.expect(length(shuffle('foo'))).to.equal(3);
        chai.expect(length(shuffle('daniel'))).to.equal(6);
        chai.expect(shuffle('')).to.equal('');
        chai.expect(shuffle('b')).to.equal('b');
    });
});

describe('surround function', () => {
    it('should be strings surround', () => {
        chai.expect(surround('foo', 'bar')).to.equal('barfoobar');
        chai.expect(surround('daniel', '_')).to.equal('_daniel_');
        chai.expect(surround('', '>')).to.equal('>>');
        chai.expect(surround('bar', '')).to.equal('bar');
        chai.expect(surround('f')).to.equal('f');
        chai.expect(surround('div','<','>')).to.equal('<div>');
    });
});

describe('safeTruncate function', () => {
    it('should be strings safeTruncated', () => {
        chai.expect(safeTruncate('foo bar', 0, '.')).to.equal('');
        chai.expect(safeTruncate('foo bar', 4, '.')).to.equal('foo.');
        chai.expect(safeTruncate('foo bar', 3, '.')).to.equal('.');
        chai.expect(safeTruncate('foo bar', 2, '.')).to.equal('.');
        chai.expect(safeTruncate('foo bar', 4, '.')).to.equal('foo.');
        chai.expect(safeTruncate('foo bar', 7, '.')).to.equal('foo bar');
        chai.expect(safeTruncate('foo bar', 8, '.')).to.equal('foo bar');
        chai.expect(safeTruncate('A Javascript string manipulation library.', 16, '...')).to.equal('A Javascript...');
        chai.expect(safeTruncate('A Javascript string manipulation library.', 15, '...')).to.equal('A Javascript...');
        chai.expect(safeTruncate('A Javascript string manipulation library.', 14, '...')).to.equal('A...');
    });
});

describe('truncate function', () => {
    it('should be strings truncated', () => {
        chai.expect(truncate('foo bar', 0, '.')).to.equal('');
        chai.expect(truncate('foo bar', 3, '.')).to.equal('fo.');
        chai.expect(truncate('foo bar', 2, '.')).to.equal('f.');
        chai.expect(truncate('foo bar', 4, '.')).to.equal('foo.');
        chai.expect(truncate('foo bar', 7, '.')).to.equal('foo bar');
        chai.expect(truncate('foo bar', 8, '.')).to.equal('foo bar');
    });
});

describe('format function', () => {
    it('should be formated strings', () => {
        chai.expect(format('foo bar')).to.equal('foo bar');
        chai.expect(format('{0} bar', ['foo'])).to.equal('foo bar');
        chai.expect(format('foo {0}', ['bar'])).to.equal('foo bar');
        chai.expect(format('foo {0}', ['bar', 'foo'])).to.equal('foo bar');
        chai.expect(format('{0} {1}', ['foo', 'bar'])).to.equal('foo bar');
        chai.expect(format('{1} {0}', ['bar', 'foo'])).to.equal('foo bar');
        chai.expect(format('{1} {0}', ['bar'])).to.equal('undefined bar');
        chai.expect(format('{foo} bar', {foo: 'foo'})).to.equal('foo bar');
        chai.expect(format('{foo} {bar}', {foo: 'foo', bar: 'bar'})).to.equal('foo bar');
    });

    it('should be undefined', () => {
        chai.expect(format('foo bar {0}')).to.equal('foo bar undefined');
    });
});

describe('removeEmptyStrings function', () => {
    it('should be [ \'aa\', \'bb\', \'cc\' ]', () => {
        chai.expect(removeEmptyStrings([ 'aa', '', 'bb', null, 'cc', undefined ])).to.deep.equal([ 'aa', 'bb', 'cc' ]);
    });
});

describe('compare function', () => {
    it('should be 1, -1, 0', () => {
        chai.expect(compare('a', 'b')).to.equal(-1);
        chai.expect(compare('b', 'a')).to.equal(1);
        chai.expect(compare('a', 'a')).to.equal(0);
        chai.expect(compare('0', '1')).to.equal(-1);
        chai.expect(compare('1', '0')).to.equal(1);
        chai.expect(compare('0', '0')).to.equal(0);
    });
});

describe('equal function', () => {
    it('should be true or false', () => {
        chai.expect(equal('a', 'b')).to.equal(false);
        chai.expect(equal('a', 'a')).to.equal(true);
        chai.expect(equal('0', 0)).to.equal(false);
    });
});

describe('inequal function', () => {
    it('should be true or false', () => {
        chai.expect(inequal('a', 'b')).to.equal(true);
        chai.expect(inequal('a', 'a')).to.equal(false);
        chai.expect(inequal('0', 0)).to.equal(true);
    });
});

describe('hexEncode function', () => {
    it('should be hexadecimal', () => {
        chai.expect(hexEncode('漢')).to.equal('6f22');
        chai.expect(hexEncode('A')).to.equal('0041');
        chai.expect(hexEncode('Á')).to.equal('00c1');
        chai.expect(hexEncode('AA')).to.equal('00410041');
    });
});

describe('hexDecode function', () => {
    it('should be string', () => {
        chai.expect(hexDecode('6f22')).to.equal('漢');
        chai.expect(hexDecode('0041')).to.equal('A');
        chai.expect(hexDecode('00c1')).to.equal('Á');
        chai.expect(hexDecode('00410041')).to.equal('AA');
    });
});

describe('binEncode function', () => {
    it('should be binary', () => {
        chai.expect(binEncode('漢')).to.equal('0110111100100010');
        chai.expect(binEncode('A')).to.equal('0000000001000001');
        chai.expect(binEncode('Á')).to.equal('0000000011000001');
        chai.expect(binEncode('AA')).to.equal('00000000010000010000000001000001');
    });
});

describe('binDecode function', () => {
    it('should be string', () => {
        chai.expect(binDecode('0110111100100010')).to.equal('漢');
        chai.expect(binDecode('0000000001000001')).to.equal('A');
        chai.expect(binDecode('0000000011000001')).to.equal('Á');
        chai.expect(binDecode('00000000010000010000000001000001')).to.equal('AA');
    });
});

describe('decEncode function', () => {
    it('should be binary', () => {
        chai.expect(decEncode('漢')).to.equal('28450');
        chai.expect(decEncode('A')).to.equal('00065');
        chai.expect(decEncode('Á')).to.equal('00193');
        chai.expect(decEncode('AA')).to.equal('0006500065');
    });
});

describe('decDecode function', () => {
    it('should be string', () => {
        chai.expect(decDecode('28450')).to.equal('漢');
        chai.expect(decDecode('00065')).to.equal('A');
        chai.expect(decDecode('00193')).to.equal('Á');
        chai.expect(decDecode('0006500065')).to.equal('AA');
    });
});

describe('base64Encode function', () => {
    it('should be string', () => {
        chai.expect(base64Encode('Daniel')).to.equal('RGFuaWVs');
        chai.expect(base64Encode('foo')).to.equal('Zm9v');
        chai.expect(base64Encode('bar')).to.equal('YmFy');
        chai.expect(base64Encode('bár!')).to.equal('YsOhciE=');
        chai.expect(base64Encode('漢')).to.equal('5ryi');
    });
});

describe('base64Decode function', () => {
    it('should be string', () => {
        chai.expect(base64Decode('RGFuaWVs')).to.equal('Daniel');
        chai.expect(base64Decode('Zm9v')).to.equal('foo');
        chai.expect(base64Decode('YmFy')).to.equal('bar');
        chai.expect(base64Decode('YsOhciE=')).to.equal('bár!');
        chai.expect(base64Decode('5ryi')).to.equal('漢');
    });
});

describe('htmlDecode function', () => {
    it('should be decoded html', () => {
        chai.expect(htmlDecode('&aacute;')).to.equal('\u00E1');
        chai.expect(htmlDecode('&SHcy;')).to.equal('Ш');
        chai.expect(htmlDecode('&ZHcy;')).to.equal('Ж');
        chai.expect(htmlDecode('&boxdl;')).to.equal('┐');
    });
});

describe('htmlEncode function', () => {
    it('should be encoded html', () => {
        chai.expect(htmlEncode('á')).to.equal('&aacute;');
        chai.expect(htmlEncode('áéíóú')).to.equal('&aacute;&eacute;&iacute;&oacute;&uacute;');
        chai.expect(htmlEncode('Ш')).to.equal('&SHcy;');
        chai.expect(htmlEncode('Ж')).to.equal('&ZHcy;');
        chai.expect(htmlEncode('┐')).to.equal('&boxdl;');
    });
});
