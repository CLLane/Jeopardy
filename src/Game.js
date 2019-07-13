import Player from '../src/Player';
import Round from '../src/Round';


class Game {
  constructor() {
    this.currentRound = {};
    this.roundTracker = 0;
    this.players = []
  }

  generateRound() {
    this.currentRound = new Round();
  }

  generatePlayers(player1Name, player2Name, player3Name) {
    this.player1 = new Player(player1Name);
    this.players.push(this.player1);
    this.player2 = new Player(player2Name);
    this.players.push(this.player2);
    this.player3 = new Player(player3Name);
    this.players.push(this.player3);
    return this.players
  }
  
  startGame() {
    this.generateRound()
    this.generatePlayers()
    this.roundTracker ++
  }
  
}


export default Game;