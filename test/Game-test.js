import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game';

describe('Game', function() {

  it('should be a function', function() {
    
    expect(Game).to.be.a('function');
  });

});
