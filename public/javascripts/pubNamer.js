var pubNamer = (function(){

  return {
    //these function are for Jasmine test purposes, but left in for now
    isTrue: function() { return true; },
    random: function() { return Math.random(); },
    twiceRandom: function() { return Math.random() + Math.random(); },
    innerRef: function() { return pubNamer.isTrue() },

    //real work starts here
    generate: function() {
      var rawFormula = lists.formula();
      var pubWords = rawFormula.split(" ").map(function(word) {
        return lists.random(word);
      });
      return formula.makeName(rawFormula, pubWords);
    }
  }
}())
