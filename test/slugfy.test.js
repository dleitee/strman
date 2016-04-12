import chai from 'chai';
import {slugfy} from '../src/vitjs'

describe('Slugfy function', () => {
    it('teste', () => {
        let test = slugfy(' Bar bár');
        chai.expect(test).to.equal('bar-bar');
    })
})
