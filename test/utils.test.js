import chai from 'chai';
import {isString, trim, removeSpaces, replace, removeNonChars, removeNonWords, append,
    at, between, chars, collapseWhitespace, contains, containsAll, containsAny, countSubstr,
    endsWith, startsWith} from '../src/vitjs'

describe('isString function', () => {
    it('should be false', () => {
        let fixtures = [
            1,
            false,
            1.2,
            [],
            {}
        ]

        fixtures.forEach(el => {
            chai.expect(isString(el)).to.equal(false);
        });
    });
    it('should be true', () => {
        let fixtures = [
            'string',
            "string"
        ]

        fixtures.forEach(el => {
            chai.expect(isString(el)).to.equal(true);
        });
    });
});

describe('trim, ltrim and rtrim function', () => {
    it('should be foo bar', () => {
        let fixtures = [
            "foo bar",
            "foo bar ",
            " foo bar",
            " foo bar "
        ]

        fixtures.forEach(el => {
            chai.expect(trim(el)).to.equal("foo bar");
        });
    })
});

describe('removeSpaces function', () => {
    it('should be foobar', () => {
        let fixtures = [
            "foo bar",
            "foo bar ",
            " foo bar",
            " foo bar "
        ]

        fixtures.forEach(el => {
            chai.expect(removeSpaces()(el)).to.equal("foobar");
        });
    })
    it('should be foo-bar', () => {
        let fixtures = [
            "foo bar"
        ]

        fixtures.forEach(el => {
            chai.expect(removeSpaces("-")(el)).to.equal("foo-bar");
        });
    })
});

describe('replace function', () => {
    it('should be bar bar', () => {
        let fixtures = [
            "foo bar"
        ]

        fixtures.forEach(el => {
            chai.expect(replace("foo", "bar")(el)).to.equal("bar bar");
        });
    });
    it('should be bar bar bar', () => {
        let fixtures = [
            "foo bar foo"
        ]

        fixtures.forEach(el => {
            chai.expect(replace("foo", "bar")(el)).to.equal("bar bar bar");
        });
    })
});

describe('removeNonChars function', () => {
    it('should be foo bar', () => {
        let fixtures = [
            "fóõ bár"
        ]

        fixtures.forEach(el => {
            chai.expect(removeNonChars(el)).to.equal("foo bar");
        });
    });
});

describe('removeNonWords function', () => {
    it('should be foobar', () => {
        let fixtures = [
            "foo bar",
            "foo&bar-"
        ]

        fixtures.forEach(el => {
            chai.expect(removeNonWords()(el)).to.equal("foobar");
        });
    });
});

describe('append function', () => {
    it('should be foobar', () => {
        chai.expect(append("f", "o", "o", "b", "a", "r")).to.equal("foobar");
        chai.expect(append("foobar")).to.equal("foobar");
        chai.expect(append("", "foobar")).to.equal("foobar");
    });
    it('should be throw', () => {
        chai.assert.throws(append.bind(this, "", 1), Error);
        chai.assert.throws(append.bind(this, "", []), Error);
        chai.assert.throws(append.bind(this, "", true), Error);
        chai.assert.throws(append.bind(this, "", false), Error);
        chai.assert.throws(append.bind(this, "", 1.2), Error);
        chai.assert.throws(append.bind(this, "", {}), Error);
    });
});

describe('at function', () => {
    it('should be f', () => {
        chai.expect(at("foobar", 0)).to.equal("f");
        chai.expect(at("ofobar", 1)).to.equal("f");
        chai.expect(at("oobarf", -1)).to.equal("f");
        chai.expect(at("oobafr", -2)).to.equal("f");

    });
    it('should be throw', () => {
        chai.assert.throws(at.bind(this, 1, 1), Error);
        chai.assert.throws(at.bind(this, [], 1), Error);
        chai.assert.throws(at.bind(this, true, 1), Error);
        chai.assert.throws(at.bind(this, false, 1), Error);
        chai.assert.throws(at.bind(this, 1.2, 1), Error);
        chai.assert.throws(at.bind(this, {}, 1), Error);
        chai.assert.throws(at.bind(this, "", ""), Error);
        chai.assert.throws(at.bind(this, "", []), Error);
        chai.assert.throws(at.bind(this, "", true), Error);
        chai.assert.throws(at.bind(this, "", false), Error);
        chai.assert.throws(at.bind(this, "", {}), Error);
    });
});

describe('between function', () => {
    it('should be ["foo"]', () => {
        chai.expect(between("[foo]", "[", "]")[0]).to.equal("foo");
        chai.expect(between("<span>foo</span>", "<span>", "</span>")[0]).to.equal("foo");
        chai.expect(between("<span>bar</span><span>foo</span>", "<span>", "</span>")[0]).to.equal("bar");
        chai.expect(between("<span>bar</span><span>foo</span>", "<span>", "</span>")[1]).to.equal("foo");
    });
    it('should be throw', () => {
        chai.assert.throws(between.bind(this, "", "", 1), Error);
        chai.assert.throws(between.bind(this, "", "", []), Error);
        chai.assert.throws(between.bind(this, "", "", {}), Error);
        chai.assert.throws(between.bind(this, "", "", true), Error);
        chai.assert.throws(between.bind(this, "", "", false), Error);
        chai.assert.throws(between.bind(this, "", "", 1.2), Error);
        chai.assert.throws(between.bind(this, "", 1, ""), Error);
        chai.assert.throws(between.bind(this, "", [], ""), Error);
        chai.assert.throws(between.bind(this, "", {}, ""), Error);
        chai.assert.throws(between.bind(this, "", true, ""), Error);
        chai.assert.throws(between.bind(this, "", false, ""), Error);
        chai.assert.throws(between.bind(this, "", 1.2, ""), Error);
        chai.assert.throws(between.bind(this, 1, "", ""), Error);
        chai.assert.throws(between.bind(this, [], "", ""), Error);
        chai.assert.throws(between.bind(this, {}, "", ""), Error);
        chai.assert.throws(between.bind(this, true, "", ""), Error);
        chai.assert.throws(between.bind(this, false, "", ""), Error);
        chai.assert.throws(between.bind(this, 1.2, "", ""), Error);
    });
});

describe('between function', () => {
    it('should be ["t", "i", "t", "l", "e"]', () => {
        let title = "title";
        chai.expect(chars(title)[0]).to.equal("t");
        chai.expect(chars(title)[1]).to.equal("i");
        chai.expect(chars(title)[2]).to.equal("t");
        chai.expect(chars(title)[3]).to.equal("l");
        chai.expect(chars(title)[4]).to.equal("e");
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
            "foo    bar",
            "     foo     bar    ",
            " foo     bar   ",
            "    foo     bar "
        ]

        fixtures.forEach(el => {
            chai.expect(collapseWhitespace(el)).to.equal("foo bar");
        });
    })
});

describe('removeNonWords function', () => {
    it('should be foobar', () => {
        let fixtures = [
            "foo bar",
            "foo&bar-"
        ]

        fixtures.forEach(el => {
            chai.expect(removeNonWords()(el)).to.equal("foobar");
        });
    });
});

describe('contains function', () => {
    it('should be true, caseSensitive = true', () => {
        let fixtures = [
            "foo bar",
            "bar foo",
            "foobar",
            "foo"
        ]

        fixtures.forEach(el => {
            chai.expect(contains(el, "foo", true)).to.equal(true);
        });
    })

    it('should be true, caseSensitive = false', () => {
        let fixtures = [
            "foo bar",
            "bar foo",
            "foobar",
            "foo"
        ]

        fixtures.forEach(el => {
            chai.expect(contains(el, "FOO", false)).to.equal(true);
        });
    })

    it('should be false, caseSensitive = true', () => {
        let fixtures = [
            "foo bar",
            "bar foo",
            "foobar",
            "foo"
        ]

        fixtures.forEach(el => {
            chai.expect(contains(el, "FOO", true)).to.equal(false);
        });
    })

    it('should be false, caseSensitive = false', () => {
        let fixtures = [
            "foo bar",
            "bar foo",
            "foobar",
            "foo"
        ]

        fixtures.forEach(el => {
            chai.expect(contains(el, "dleitee", false)).to.equal(false);
        });
    })
});

describe('containsAll function', () => {
    it('should be true, caseSensitive = true', () => {
        let fixtures = [
            "foo bar",
            "bar foo",
            "foobar"
        ]

        fixtures.forEach(el => {
            chai.expect(containsAll(el, ["foo", "bar"], true)).to.equal(true);
        });
    })

    it('should be true, caseSensitive = false', () => {
        let fixtures = [
            "foo bar",
            "bar foo",
            "foobar"
        ]

        fixtures.forEach(el => {
            chai.expect(containsAll(el, ["FOO", "BAR"], false)).to.equal(true);
        });
    })

    it('should be false, caseSensitive = true', () => {
        let fixtures = [
            "foo",
            "bar foo",
            "foobar",
            "foo"
        ]

        fixtures.forEach(el => {
            chai.expect(containsAll(el, ["FOO", "BAR"], true)).to.equal(false);
        });
    })

    it('should be false, caseSensitive = false', () => {
        let fixtures = [
            "foo bar",
            "bar foo",
            "foobar",
            "foo"
        ]

        fixtures.forEach(el => {
            chai.expect(containsAll(el, ["foo", "bar", "dleitee"], false)).to.equal(false);
        });
    })
});


describe('containsAny function', () => {
    it('should be true, caseSensitive = true', () => {
        let fixtures = [
            "foo bar",
            "bar foo",
            "foobar"
        ]

        fixtures.forEach(el => {
            chai.expect(containsAny(el, ["foo", "bar", "test"], true)).to.equal(true);
        });
    })

    it('should be true, caseSensitive = false', () => {
        let fixtures = [
            "foo bar",
            "bar foo",
            "foobar"
        ]

        fixtures.forEach(el => {
            chai.expect(containsAny(el, ["FOO", "BAR", "Test"], false)).to.equal(true);
        });
    })

    it('should be false, caseSensitive = true', () => {
        let fixtures = [
            "foo",
            "bar foo",
            "foobar",
            "foo"
        ]

        fixtures.forEach(el => {
            chai.expect(containsAny(el, ["FOO", "BAR", "TEST"], true)).to.equal(false);
        });
    })

    it('should be false, caseSensitive = false', () => {
        let fixtures = [
            "foo bar",
            "bar foo",
            "foobar",
            "foo"
        ]

        fixtures.forEach(el => {
            chai.expect(containsAny(el, ["dleitee"], false)).to.equal(false);
        });
    })
});

describe('countSubstr function', () => {
    it('should be 7', () => {
        let fixtures = [
            "aaaaaAaaAA",
            "faaaAAaaaaAA",
            "aaAAaaaaafA",
            "AAaaafaaaaAAAA"
        ]

        fixtures.forEach(el => {
            chai.expect(countSubstr(el, "a")).to.equal(7);
        });
    });

    it('should be 7 without caseSensitive', () => {
        let fixtures = [
            "aaaaaaa",
            "faaaaaaa",
            "aaaaaaaf",
            "aaafaaaa"
        ]

        fixtures.forEach(el => {
            chai.expect(countSubstr(el, "A", false)).to.equal(7);
        });
    });


    it('should be 2 with allowOverlaping', () => {
        chai.expect(countSubstr("aaa", "aa", true, true)).to.equal(2);
    });

    it('should be 1 without allowOverlaping', () => {
        chai.expect(countSubstr("aaa", "aa", true, false)).to.equal(1);
    });
});

describe('endsWith function', () => {
    it('should be true', () => {
        let fixtures = [
            "foo bar",
            "bar"
        ]

        fixtures.forEach(el => {
            chai.expect(endsWith(el, "bar")).to.equal(true);
        });

        let fixtures2 = [
            "foo barr",
            "barr"
        ]

        fixtures2.forEach(el => {
            chai.expect(endsWith(el, "bar", el.length-1)).to.equal(true);
        });
    });
});

describe('startsWith function', () => {
    it('should be true', () => {
        let fixtures = [
            "foo bar",
            "foobar",
            "foo"
        ]

        fixtures.forEach(el => {
            chai.expect(startsWith(el, "foo")).to.equal(true);
        });

        let fixtures2 = [
            "afoo barr",
            "afoo"
        ]

        fixtures2.forEach(el => {
            chai.expect(startsWith(el, "foo", 1)).to.equal(true);
        });
    });
});

