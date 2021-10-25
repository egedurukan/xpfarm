const chai = require('chai');
const { buildCastle } = require('./buildCastle');
chai.should();

describe('test cases for buildCastle function', () => {
    it('The parameter must be number', () => {
        buildCastle("One").should.equal(false);
    })
})