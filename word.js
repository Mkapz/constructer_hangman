var Letter = require("./letter.js");

function Word(wrd) {
  this.word = wrd;
  this.Guess = [];
  this.found = false;
  this.getLets = function() {
    for (var i = 0; i < this.word.length; i++) {
      this.Guess.push(new Letter(this.word[i]));
    }
  };
  this.checkIfLetterFound = function(guessLetter) {
    var whatToReturn = 0;
    for(var i = 0; i < this.Guess.length; i++) {
      if(this.Guess[i].charac === guessLetter) {
        this.Guess[i].appear = true;
        whatToReturn += 1;
     }
    } 
    return whatToReturn;
  };
  this.Wordfound = function() {
    if (this.Guess.every(function(curLet) {
      return curLet.appear === true;
    })){
      this.found === true;
    }
    return this.found;
  };
  this.wordRender = function() {
    var emptyStr = "";
    for(var i = 0; i < this.Guess.length; i++) {
      emptyStr+=this.Guess[i].letterRender();
    }
    return emptyStr;
  };
};

module.exports = Word;