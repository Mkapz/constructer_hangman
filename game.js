var prompt= require("prompt");
prompt.start();
var Word= require("./word.js");

var GameObj= {
WordArr: ["Transylvania", "Doge", "Petition", "Javascript", "Slovakia", "Fantasy", "Cavalier", "Cisco", "Microsoft", "Ohio", "Sergeant", "Kent", "Gnarly", "Colorado"],
numOfGuesses: 7,
currentWrd: null,
OnStart: function(wrd){
    var newWord= new Word(this.WordArr[Math.floor(Math.random()* this.Wordarr.length)]);
    this.currentWrd= newWord;
    this.currentWrd= getLets();
    this.continuePrompt();

},

continuePrompt: function() {
    var self= this;
    prompt.get(["guessLetter"], function(err, result) {
        console.log("The Letter or space you guessed is" + result.guessLetter);
        var howManyguess= self.currentWrd.checkIfLetterFound(result.guessLetter);
        if(howManyguess === 0) {
            console.log("you gussed wrong!");
            self.numOfGuesses -= 1;
        } else {
            console.log("you guessed right")
            if(self.currentWrd.WordFound() === true){
            console.log("you win!");
            return 1;
        } else {
            console.log("guesses remaining: " + self.numOfGuesses);
            console.log(self.currentWrd.wordRender());
        }
    }
    if (self.guessLetter > 0 && self.currentWrd.found === false) {
        self.continuePrompt();
    } else if (self.numOfGuesses === 0) {
        console.log("Game over, try again");
        console.log("the word was" + self.currentWrd.word); 
    } else {
        console.log(self.currentWrd.wordRender());
    }
});
}
};