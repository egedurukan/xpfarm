const chai = require('chai');
chai.should();

import { it } from 'mocha';
import buildCastle from './buildCastle';

describe('test cases for buildCastle function', () => {
    it('The parameter must be number', () => {
        buildCastle("One").should.equal(false);
    })
})