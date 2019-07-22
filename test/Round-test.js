import chai from 'chai';
const expect = chai.expect;


import Round from '../src/Round';
import spies from 'chai-spies';
import domUpdates from "../src/domUpdates";

let round;

chai.use(spies);

chai.spy.on(domUpdates, ['updateQuestionDisplay'], () => {});


beforeEach(() => {
  round = new Round()
});

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should start with no clues', function() {
    expect(round.currentClue).to.equal(null)
  });

  it('should be able to begin the turn', function(){
    round.beginTurn();
    expect(round.currentTurn).to.be.a('object')
    expect(round.turnTracker).to.equal(1);
  });

  it('should return a string with any punctuation removed', function(){
    expect(round.evaluateTestGuess('St. Paul', 'St. Paul')).to.equal(true);
    expect(round.evaluateTestGuess('St Paul', 'St. Paul')).to.equal(true);
    expect(round.evaluateTestGuess('St Paul!', 'St. Paul')).to.equal(true);
    expect(round.evaluateTestGuess('st paul', 'St. Paul')).to.equal(true);
    expect(round.evaluateTestGuess('Saint Paul', 'St. Paul')).to.equal(false);

 
  });


});
