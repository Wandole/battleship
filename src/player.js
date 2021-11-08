export const Player = function (name, board, IA) {
  /* A player that can fired on the ennemy board. 
    IA=true to make a player with automatic play choice */

  this.name = name;
  this.board = board;
  this.IA = IA || false;

  this.play = (pos) => {
    /* Make a shot and return true if it touched smthg */

    // For IA : choose pos randomly
    if (this.IA) {
      pos = this.IAChooseCoord();
    }
    // Make the shot
    const hitSmthg = this.board.receiveAttack(pos);

    return hitSmthg;
  };

  this.IAChooseCoord = () => {
    // For IA: choose pos randomly
    let pos = [];
    let playing = true;
    while (playing) {
      pos = this.rdmCoord();
      if (board.isNotAlreadyFired(pos)) playing = false;
    }
    return pos;
  };

  this.rdmCoord = () => {
    /* Pick a random coord (x,y) in the enemy board */
    const x = Math.floor(Math.random() * this.board.dimension);
    const y = Math.floor(Math.random() * this.board.dimension);
    return [x, y];
  };
};
