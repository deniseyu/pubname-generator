var pubNamer = (function(){

  return {
    generate: function() {
<<<<<<< HEAD
      var rawFormula = lists.formula();
      var pubWords = rawFormula.split(" ").map(function(word) {
        return lists.random(word);
      });
      return formula.makeName(rawFormula, pubWords);
=======
      var randomFormula = formula.random();
      var pubWords = randomFormula.split(" ").map(function(word) {
        return lists.random(word);
      });
      return formula.makeName(randomFormula, pubWords);
>>>>>>> refactor
    }
  }
}());
