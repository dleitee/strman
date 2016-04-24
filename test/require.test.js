import chai from 'chai';

var strman = require('../transpiler/strman');
var isString = strman.isString;

describe('Usage with require', () => {
    describe('#require', () => {
        it('should be true when value is true', () => {
            chai.expect(isString('foo')).to.equal(true);
        });
    });
});
