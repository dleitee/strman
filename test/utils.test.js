import chai from 'chai';
import {isString, trim, removeSpaces, replace, removeNonChars, removeNonWords, append,
    at, between, chars, collapseWhitespace, contains, containsAll, containsAny, countSubstr,
    endsWith, startsWith, ensureLeft, ensureRight, first, last, indexOf, lastIndexOf, insert,
    length, leftPad, rightPad, prepend, removeLeft, appendArray, prependArray, removeRight,
    repeat, reverse, shuffle, surround, safeTruncate}
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
            ' foo bar '
        ];

        fixtures.forEach(el => {
            chai.expect(trim(el)).to.equal('foo bar');
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

describe('removeNonChars function', () => {
    it('should be foo bar', () => {
        let fixtures = [
            'fóõ bár'
        ];

        fixtures.forEach(el => {
            chai.expect(removeNonChars(el)).to.equal('foo bar');
        });
    });
});

describe('append function', () => {
    it('should be foobar', () => {
        chai.expect(append('f', 'o', 'o', 'b', 'a', 'r')).to.equal('foobar');
        chai.expect(append('foobar')).to.equal('foobar');
        chai.expect(append('', 'foobar')).to.equal('foobar');
    });
    it('should be throw', () => {
        chai.assert.throws(append.bind(this, '', 1), Error);
        chai.assert.throws(append.bind(this, '', true), Error);
        chai.assert.throws(append.bind(this, '', false), Error);
        chai.assert.throws(append.bind(this, '', 1.2), Error);
        chai.assert.throws(append.bind(this, '', {}), Error);
        chai.assert.throws(append.bind(this, '', []), Error);
    });
});

describe('appendArray function', () => {
    it('should be foobar', () => {
        chai.expect(appendArray('f', ['o', 'o', 'b', 'a', 'r'])).to.equal('foobar');
        chai.expect(appendArray('foobar')).to.equal('foobar');
        chai.expect(appendArray('', ['foobar'])).to.equal('foobar');
    });
    it('should be throw', () => {
        chai.assert.throws(appendArray.bind(this, '', 1), Error);
        chai.assert.throws(appendArray.bind(this, '', true), Error);
        chai.assert.throws(appendArray.bind(this, '', false), Error);
        chai.assert.throws(appendArray.bind(this, '', 1.2), Error);
        chai.assert.throws(appendArray.bind(this, '', {}), Error);
        chai.assert.throws(appendArray.bind(this, '', [1]), Error);
        chai.assert.throws(appendArray.bind(this, '', [true]), Error);
        chai.assert.throws(appendArray.bind(this, '', [false]), Error);
        chai.assert.throws(appendArray.bind(this, '', [1.2]), Error);
        chai.assert.throws(appendArray.bind(this, '', [{}]), Error);
    });
});

describe('prepend function', () => {
    it('should be foobar', () => {
        chai.expect(prepend('r', 'f', 'o', 'o', 'b', 'a')).to.equal('foobar');
        chai.expect(prepend('foobar')).to.equal('foobar');
        chai.expect(prepend('', 'foobar')).to.equal('foobar');
        chai.expect(prepend('bar', 'foo')).to.equal('foobar');
    });
    it('should be throw', () => {
        chai.assert.throws(prepend.bind(this, '', 1), Error);
        chai.assert.throws(prepend.bind(this, '', []), Error);
        chai.assert.throws(prepend.bind(this, '', true), Error);
        chai.assert.throws(prepend.bind(this, '', false), Error);
        chai.assert.throws(prepend.bind(this, '', 1.2), Error);
        chai.assert.throws(prepend.bind(this, '', {}), Error);
    });
});

describe('prependArray function', () => {
    it('should be foobar', () => {
        chai.expect(prependArray('r', ['f', 'o', 'o', 'b', 'a'])).to.equal('foobar');
        chai.expect(prependArray('foobar')).to.equal('foobar');
        chai.expect(prependArray('', ['foobar'])).to.equal('foobar');
        chai.expect(prependArray('bar', ['foo'])).to.equal('foobar');
    });
    it('should be throw', () => {
        chai.assert.throws(prependArray.bind(this, '', 1), Error);
        chai.assert.throws(prependArray.bind(this, '', true), Error);
        chai.assert.throws(prependArray.bind(this, '', false), Error);
        chai.assert.throws(prependArray.bind(this, '', 1.2), Error);
        chai.assert.throws(prependArray.bind(this, '', {}), Error);
        chai.assert.throws(prependArray.bind(this, '', [1]), Error);
        chai.assert.throws(prependArray.bind(this, '', [true]), Error);
        chai.assert.throws(prependArray.bind(this, '', [false]), Error);
        chai.assert.throws(prependArray.bind(this, '', [1.2]), Error);
        chai.assert.throws(prependArray.bind(this, '', [{}]), Error);
    });
});

describe('at function', () => {
    it('should be f', () => {
        chai.expect(at('foobar', 0)).to.equal('f');
        chai.expect(at('ofobar', 1)).to.equal('f');
        chai.expect(at('oobarf', -1)).to.equal('f');
        chai.expect(at('oobafr', -2)).to.equal('f');

    });
    it('should be throw', () => {
        chai.assert.throws(at.bind(this, 1, 1), Error);
        chai.assert.throws(at.bind(this, [], 1), Error);
        chai.assert.throws(at.bind(this, true, 1), Error);
        chai.assert.throws(at.bind(this, false, 1), Error);
        chai.assert.throws(at.bind(this, 1.2, 1), Error);
        chai.assert.throws(at.bind(this, {}, 1), Error);
        chai.assert.throws(at.bind(this, '', ''), Error);
        chai.assert.throws(at.bind(this, '', []), Error);
        chai.assert.throws(at.bind(this, '', true), Error);
        chai.assert.throws(at.bind(this, '', false), Error);
        chai.assert.throws(at.bind(this, '', {}), Error);
    });
});

describe('between function', () => {
    it('should be ["foo"]', () => {
        chai.expect(between('[foo]', '[', ']')[0]).to.equal('foo');
        chai.expect(between('<span>foo</span>', '<span>', '</span>')[0]).to.equal('foo');
        chai.expect(between('<span>bar</span><span>foo</span>', '<span>', '</span>')[0]).to.equal('bar');
        chai.expect(between('<span>bar</span><span>foo</span>', '<span>', '</span>')[1]).to.equal('foo');
    });
    it('should be throw', () => {
        chai.assert.throws(between.bind(this, '', '', 1), Error);
        chai.assert.throws(between.bind(this, '', '', []), Error);
        chai.assert.throws(between.bind(this, '', '', {}), Error);
        chai.assert.throws(between.bind(this, '', '', true), Error);
        chai.assert.throws(between.bind(this, '', '', false), Error);
        chai.assert.throws(between.bind(this, '', '', 1.2), Error);
        chai.assert.throws(between.bind(this, '', 1, ''), Error);
        chai.assert.throws(between.bind(this, '', [], ''), Error);
        chai.assert.throws(between.bind(this, '', {}, ''), Error);
        chai.assert.throws(between.bind(this, '', true, ''), Error);
        chai.assert.throws(between.bind(this, '', false, ''), Error);
        chai.assert.throws(between.bind(this, '', 1.2, ''), Error);
        chai.assert.throws(between.bind(this, 1, '', ''), Error);
        chai.assert.throws(between.bind(this, [], '', ''), Error);
        chai.assert.throws(between.bind(this, {}, '', ''), Error);
        chai.assert.throws(between.bind(this, true, '', ''), Error);
        chai.assert.throws(between.bind(this, false, '', ''), Error);
        chai.assert.throws(between.bind(this, 1.2, '', ''), Error);
    });
});

describe('between function', () => {
    it('should be ["t", "i", "t", "l", "e"]', () => {
        let title = 'title';
        chai.expect(chars(title)[0]).to.equal('t');
        chai.expect(chars(title)[1]).to.equal('i');
        chai.expect(chars(title)[2]).to.equal('t');
        chai.expect(chars(title)[3]).to.equal('l');
        chai.expect(chars(title)[4]).to.equal('e');
    });
    it('should be throw', () => {
        chai.assert.throws(chars.bind(this, 1), Error);
        chai.assert.throws(chars.bind(this, []), Error);
        chai.assert.throws(chars.bind(this, {}), Error);
        chai.assert.throws(chars.bind(this, true), Error);
        chai.assert.throws(chars.bind(this, false), Error);
        chai.assert.throws(chars.bind(this, 1.2), Error);
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
        chai.expect(leftPad('1', 5, 0)).to.equal('00001');
        chai.expect(leftPad('01', 5, 0)).to.equal('00001');
        chai.expect(leftPad('001', 5, 0)).to.equal('00001');
        chai.expect(leftPad('0001', 5, 0)).to.equal('00001');
        chai.expect(leftPad('00001', 5, 0)).to.equal('00001');
    });
});

describe('rightPad function', () => {
    it('should be 10000', () => {
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
    });
});

describe('safeTruncate function', () => {
    it('should be strings safeTruncated', () => {
        chai.expect(safeTruncate('foo bar', 3, '.')).to.equal('foo');
        chai.expect(safeTruncate('foo bar', 2, '.')).to.equal('.');
        chai.expect(safeTruncate('foo bar', 4, '.')).to.equal('foo.');
        chai.expect(safeTruncate('foo bar', 7, '.')).to.equal('foo bar');
        chai.expect(safeTruncate('foo bar', 8, '.')).to.equal('foo bar');
    });
});
