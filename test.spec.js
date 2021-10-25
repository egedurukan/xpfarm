const chai = require('chai');
//import { buildTower } from './buildCastle.js';
chai.should();

function buildTower (floor) {
    return validateParameter(floor);
}

function validateParameter(param) {
    return typeof param === 'number' && param > 0
}

describe('test cases for buildCastle function', () => {
    it('The parameter must be number', () => {
        buildTower("One").should.equal(false);
    })
    it('The parameter must be bigger than 0', () => {
        buildTower(1).should.equal(true);
    })
})