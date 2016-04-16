import chai from 'chai';
import {isString} from '../dist/strman';

describe('Usage with es6', () => {
    describe('#require', () => {
        it('should be true when value is true', () => {
            chai.expect(isString('foo')).to.equal(true);
        });
    });
});
