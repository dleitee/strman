import chai from 'chai';
import {toStudlyCaps, isLowerCase, isUpperCase} from '../src/string.cases';

describe('#toStudlyCaps(value)', () => {
    it('should match DeCamelize', () => {
        let fixtures = [
            'deCamelize',
            'de-Camelize',
            'de camelize',
            'de  camelize',
            'de Camelize',
            'de-camelize',
            '-de--camelize',
            'de_camelize',
            '     de_camelize'
        ];

        fixtures.forEach(el => {
            chai.expect(toStudlyCaps(el)).to.equal('DeCamelize');
        });
    });
});


describe('isLowerCase function', () => {
    it('should be true', () => {
        let fixtures = [
            '',
            'foo',
            'foobarfoo'
        ];

        fixtures.forEach(el => {
            chai.expect(isLowerCase(el)).to.equal(true);
        });
    });
    it('should be false', () => {
        let fixtures = [
            'fooA',
            'foobarfoAo'
        ];

        fixtures.forEach(el => {
            chai.expect(isLowerCase(el)).to.equal(false);
        });
    });
});

describe('isUpperCase function', () => {
    it('should be true', () => {
        let fixtures = [
            '',
            'FOO',
            'FOOBARFOO'
        ];

        fixtures.forEach(el => {
            chai.expect(isUpperCase(el)).to.equal(true);
        });
    });
    it('should be false', () => {
        let fixtures = [
            'FOOa',
            'FOOBARFOOa'
        ];

        fixtures.forEach(el => {
            chai.expect(isUpperCase(el)).to.equal(false);
        });
    });
});
