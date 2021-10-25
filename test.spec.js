const chai = require('chai');
//import { buildTower } from './buildCastle.js';
chai.should();

function buildTower () {
    return false;
}

describe('test cases for buildCastle function', () => {
    it('The parameter must be number', () => {
        buildTower("One").should.equal(false);
        buildTower(1).should.equal(true);
    })
})