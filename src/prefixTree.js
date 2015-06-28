var PrefixTree = function(){
  this.children = {};
};

PrefixTree.prototype.addWord = function(word){
  /* Implement me! */
  var myWord = word.slice().split('');
  var index = -1;
  var letter;
  var that = this;

  var addLetter = function() {
    index++;
    if(index > 0) {
      that = that.children[letter];
    }
    letter = myWord.shift();
    if(that.children[letter] === undefined) {
      that.children[letter] = new PrefixTree();
      that.children[letter].letter = letter;
    }
  };

  while(myWord.length > 0) {
    addLetter();
  }
};

PrefixTree.prototype.getWords = function(prefix){
  /* Implement me! */
  var myPrefix = prefix.slice().split('');
  var wordList = [];
  var index = -1;
  var that = this;

  var getTheWords = function() {
    index++;

  };



  if(prefix === undefined) {
    console.log(this.children);
    return this;
  }



};

PrefixTree.prototype.removeWord = function(word){
  /* I'm extra credit! */
};
