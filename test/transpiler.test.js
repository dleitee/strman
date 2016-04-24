import chai from 'chai';
import {isString} from '../transpiler/strman';

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
