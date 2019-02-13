const model = require('./model');


class Services {
  constructor() {
    this.matches = [];
    let match1 = new model.Match('hey', [], [], "type1");
    this.matches.push(match1);
  };

  getMatchesByType(type){
    return this.matches;
  }

  addMatch(gameplayType){
    let id = new Date().getTime().toString();
    let result = new model.Match(id, [], [], gameplayType);
    this.matches.push(result);
    return result;
  }
}

module.exports = new Services();
