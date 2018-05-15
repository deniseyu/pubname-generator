var pubNamer = (function(){

  return {
    generate: function() {
      var randomFormula = formula.random();
      var nailWords = randomFormula.split(" ").map(function(word) {
        return lists.random(word);
      });
      return formula.makeName(randomFormula, nailWords);
    }
  }
}());
