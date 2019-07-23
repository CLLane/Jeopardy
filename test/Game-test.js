import chai from "chai";
const expect = chai.expect;


import data from "../src/data";
import Game from "../src/Game";
import Player from "../src/Player"
import spies from 'chai-spies';
import domUpdates from '../src/domUpdates'
import Round from "../src/Round";
import FinalRound from "../src/FinalRound";

var game, board;

chai.use(spies);

chai.spy.on(domUpdates, ['populateGameBoard', 'populatePlayerDashboard'], () => {});



beforeEach(() => {
  board = [[], [], []]
  game = new Game(board);
});

describe("Game", function() {
  it("should be a function", function() {
    expect(Game).to.be.a("function");
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it("should hold a place for the current round", function() {
    expect(game.currentRound).to.deep.equal({});
  });

  it("should start with current round as 0", function() {
    expect(game.roundTracker).to.equal(0);
  });

  it("should have a place to hold the dailyDouble turn numbers", function() {
    expect(game.dailyDoubleTurns).to.deep.equal([]);
  });

  it("should hold a spot for the players", function() {
    expect(game.players).to.be.a("array");
  });

  it("should have a spot for the winner", function() {
    expect(game.winner).to.equal(null);
  });

  it("should generate a dailyDoubles array", function() {
    game.generateDailyDoubleTurns();
    expect(game.dailyDoubleTurns).to.have.lengthOf(3);
  });

  it("should set a dailyDouble turn between 1 and 16 for the first round", function() {
    game.generateDailyDoubleTurns();
    expect(game.dailyDoubleTurns[0]).to.be.within(1, 16);
  });

  it("should set a firt dailyDouble turn between 1 and 8 for the R2", function() {
    game.generateDailyDoubleTurns();
    expect(game.dailyDoubleTurns[1]).to.be.within(1, 8);
  });

  it("should set a second dailyDouble turn between 9 and 16 for R2", function() {
    game.generateDailyDoubleTurns();
    expect(game.dailyDoubleTurns[2]).to.be.within(9, 16);
  });

 it('should instantiate all of the players', function() {
    game.generatePlayers(["Jon", "Chris", "Alyssa"]);
    expect(game.player1).to.be.an.instanceof(Player);
    expect(game.player2).to.be.an.instanceof(Player);
    expect(game.player3).to.be.an.instanceof(Player);
  });

  // it("should be able to generate new rounds", function() {
  //   game.startGame(["Jon", "Chris", "Alyssa"]);
  //   expect(game.roundTracker).to.equal(1);
  //   game.generateRound();
  //   expect(game.roundTracker).to.equal(2);
  //   game.generateRound();
  //   expect(game.roundTracker).to.equal(3);
  // });


  // it("should not create more than three rounds", function() {
  //   game.startGame(["Jon", "Chris", "Alyssa"]);
  //   expect(game.roundTracker).to.equal(1);
  //   game.generateRound();
  //   expect(game.roundTracker).to.equal(2);
  //   game.generateRound();
  //   expect(game.roundTracker).to.equal(3);
  //   game.generateRound();
  //   expect(game.roundTracker).to.equal(3);
  // });

  it("should create three new Players from the player input fields", function() {
    game.generatePlayers(["Jon", "Chris", "Alyssa"]);
    expect(game.players).to.be.a("array");
  });

  it("should be able to start the game", function() {
    game.startGame(["Jon", "Chris", "Alyssa"]);
    expect(game.currentRound).to.be.a("object");
    expect(game.roundTracker).to.equal(1);
    expect(game.players).to.be.a("array");
    expect(domUpdates.populateGameBoard).to.have.been.called(1);
  });

  it("should keep track of the current round", function() {
    game.startGame(["Jon", "Chris", "Alyssa"]);
    expect(game.roundTracker).to.equal(1);
  });

  it("should declare a winner at the end of the third round", function() {
    game.startGame(["Jon", "Chris", "Alyssa"]);
    game.player1.score = +10;
    expect(game.determineGameWinner()).to.deep.equal("Jon");
  });

  it.only("should end the game at the end of the third round", function() {
    // game.startGame(["Jon", "Chris", "Alyssa"]);
    // game.player1.score = +10;
    let players = [{'name': "Moe", 'score': 5000}, {'name': "Larry", 'score': 6000}, {'name': "Curly", 'score': 12000}];
    game.endGame(players);
    expect(game.winner).to.equal("Curly");
  });
});
