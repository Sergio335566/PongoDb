class Player{

  constructor(id, x, y, z, score, name){
    this.id = id;
    this.x = x;
    this.y = y;
    this.z = z;
    this.score = score;
    this.name = name;
  };

}


class Match{
    constructor(id, players, balls, gameplayType){
      this.id = id;
      this.players = players;
      this.startDate = null;
      this.balls = balls;
      this.gameplayType = gameplayType;
    };
}

class Ball{

  constructor(id, x, y, z, type, props){
    this.id = id;
    this.x = x;
    this.y = y;
    this.z = z;
    this.type = type;
    this.props = props;
  };
}

module.exports.Ball = Ball;
module.exports.Match = Match;
module.exports.Player = Player;
