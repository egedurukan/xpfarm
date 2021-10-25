const chai = require('chai');
//import { buildTower } from './buildCastle.js';
chai.should();

function buildTower (floor) {

    let towerArray = [];

    if(!validateParameter(floor)) return false

    let towerLine = "";
    for(i = 0; i < floor; i++){
        if(i === 0) {
            towerLine += "*";
        } else {
            towerLine += "**";
        }

        towerArray.push(towerLine);
    }
    
    return towerArray;
}

function validateParameter(param) {
    return typeof param === 'number' && param > 0
}

describe('test cases for buildCastle function', () => {
    it('The parameter must be number', () => {
        buildTower("One").should.equal(false);
    });

    it('The parameter must be bigger than 0', () => {
        buildTower(-1).should.equal(false);
    });

    it('The floors total asterixes incremented by 2', () => {
        chai.assert.deepEqual(buildTower(1), ["*"]);
    });
})