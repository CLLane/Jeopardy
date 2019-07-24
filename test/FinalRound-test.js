import chai from 'chai';
const expect = chai.expect;

import FinalRound from '../src/FinalRound';


var finalRound

beforeEach(() => {
  finalRound = new FinalRound
});

describe('FinalRound', function() {

  it('should be a function', function() {
    expect(FinalRound).to.be.a('function');
  });

 it('should be an instance of FinalRound', function() {
    expect(finalRound).to.be.an.instanceof(FinalRound);
  });

});