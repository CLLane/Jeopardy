import Clue from '../src/Clue';
import Turn from '../src/Turn';
import Game from '../src/Game';
import domUpdates from './domUpdates';
import $ from 'jquery';

class Round {
  constructor(board, players, dailyDoubleTurns) {
    this.currentTurn = null;
    this.turnTracker = 0;
    this.currentClue = null;
    this.board = board;
    this.currentPlayer = 0;
    this.players = players;
    this.answer = '';
    this.dailyDoubleTurns = dailyDoubleTurns;
  }
 
  initiateDailyDoubleTurn(round) {
    this.currentTurn = new DailyDouble(this.currentPlayer)
    this.turnTracker ++
  }

  changePlayer() {
    if (this.currentPlayer < 2) {
      this.currentPlayer ++; 
    } else {
      this.currentPlayer = 0;
    }
  }

  beginTurn() {
    if (this.turnTracker === 16) {
      this.endRound()
    } else {
      this.currentTurn = new Turn(this.currentPlayer)
      this.turnTracker ++
    }
  }

  takeTurn(clueID) {
    this.turnTracker++;
  
    let value = this.board[parseInt(clueID.split('')[0])].clues[parseInt(clueID.split('')[1])].pointValue; 
    this.answer = this.board[parseInt(clueID.split('')[0])].clues[parseInt(clueID.split('')[1])].answer; 
    domUpdates.updateQuestionDisplay(this.board[parseInt(clueID.split('')[0])].clues[parseInt(clueID.split('')[1])].question);
    return [value, this.answer];
  }
  
  updateScores(pointValue) {
    this.players[this.currentPlayer].score += parseInt(pointValue);
    if (this.players[this.currentPlayer].score < 0) {
      this.players[this.currentPlayer].score = 0
    }
    domUpdates.populatePlayerDashboard(this.players);
    this.changePlayer(this.currentPlayer);
  }

  evaluateGuess(guess) {
    if (guess.toLowerCase() === this.answer.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  
  }
}

export default Round;