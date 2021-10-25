const chai = require('chai');
//import { buildTower } from './buildCastle.js';
chai.should();

function buildTower (floor) {

    let towerArray = [];

    if(!validateParameter(floor)) return false

    let towerLine = "";
    let lineSpace = "";
    let spaceCounter = 0;
    for(i = 0; i < floor; i++){
        if(i === 0) {
            towerLine += "*";
        } else {
            towerLine += "**";
        }

        towerLine = lineSpace + towerLine + lineSpace;

        towerArray.push(towerLine);
    }

    for(k = 0; k < towerArray[towerArray.length-1].length; k++){
        spaceCounter = (towerArray[towerArray.length-1].length - towerArray[i].length) / 2
        for(j = 0; j < spaceCounter; j++){
            lineSpace += " ";
        }
        towerArray[k] = lineSpace + towerArray[i] + lineSpace;
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

    it('Spaces should be added according to the floor lenght', () => {
        chai.assert.deepEqual(buildTower(3), ["  *  ", " *** ", "*****"]);
    })
})