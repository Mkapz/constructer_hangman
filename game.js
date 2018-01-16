var prompt= require("prompt");
prompt.start();
var Word= require("./word.js");

var GameObj= {
Wordarr: ["Transylvania", "Doge", "Petition", "Javascript", "Slovakia", "Fantasy", "Cavalier", "Cisco", "Microsoft", "Ohio", "Sergeant", "Kent", "Gnarly", "Colorado"],
numOfGuesses: 7,
currentWrd: null,
OnStart: function(wrd){
    var newWord= new Word(this.Wordarr[Math.floor(Math.random()* this.Wordarr.length)]);
    this.currentWrd= newWord;
    this.continuePrompt();

},


