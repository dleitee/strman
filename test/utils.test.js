import chai from 'chai';
import {isString, trim, removeSpaces, replace, removeNonChars, removeNonWords, append} from '../src/vitjs'

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


