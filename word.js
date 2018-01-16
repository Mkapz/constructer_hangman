var Letter= require('./letter.js');

var Word= function(GameWord){
    this.lives= 7;
    this.GameWord= GameWord;
    this.letters= [];
    this.Guesses= [];

    for(var i = 0; i < this.GameWord.length; i++) {
        this.letters.push(new Letter.Letter(this.GameWord[i]));
    }
};

Word.prototype.checkLetter= function(letter){
    this.incorrect= true;
    this.BeenGuessed= false;
    var letter= letter.toLowerCase();

    if(this.Guesses.indexOf(letter) != -1) {
        this.BeenGuessed= true;
    }else{
        this.Guesses.push(letter);
        for(var i= 0; i < this.letters.length; i++){
            if(this.letters[i].letter.toLowerCase() == letter){
                this.incorrect= false;
                this.letter[i].show= true;
            }
        }

            if(this.incorrect){
                this.lives --;
            }
    }   
};

Word.prototype.Complete= function() {
    for(var i= 0; i < this.letters.length; i++) {
        if(!this.letters[i].show){
            return false;
        }
    }
        return true;
};

Word.prototype.print= function() {
    var output= '';
    for(var i=0; i < this.letters.length; i++) {
        output += this.letters[i].printInfo();
    }
    return output;
};

module.exports= {Word
};