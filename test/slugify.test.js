import chai from 'chai';
import {slugify} from '../src/vitjs'

describe('Slugfiy function', () => {
    it('teste', () => {
        let test = slugify(' Bar bár');
        chai.expect(test).to.equal('bar-bar');
    })
})
