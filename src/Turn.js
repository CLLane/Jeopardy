class Turn {
  constructor(player) {
    this.player = player;
    // this.guess = guess;
    // this.category = obj.category
    // this.question = obj.clues
    // this.answer = obj.answer
  }

  turnThings() {
    //highlight one player 
    //tell them to select a category and a clue
    //they click one clue
    //clue display
    //input their guess
    //click submit
    this.evaluateGuess()   
    //change score
  }

  
  acceptGuess(){

  }

  evaluateGuess() {
    if (this.guess.toLowerCase().replace(/[^\w\s]|_/g, "") === this.answer.toLowerCase().replace(/[^\w\s]|_/g, "")) {
      this.player.score += this.question.pointValue
      domUpdates.updateScore(this.player)
    } else {
      this.player.score -= this.question.pointValue;
      domUpdates.updateScore(this.player)
    }
    round.currentPlayer ++
  }

  selectCategory() {
  
  }


  displayClue() {
  }



}

export default Turn; 