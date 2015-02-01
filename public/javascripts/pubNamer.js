var pubNamer = (function(){

  return {
    //these function are for Jasmine test purposes, but left in just because
    isTrue: function() { return true; },
    random: function() { return Math.random(); },
    twiceRandom: function() { return Math.random() + Math.random(); },
    innerRef: function() { return this.isTrue() }, 

    //real work starts here
    generate: function() {
      var rawFormula = lists.formula()
      var formula = rawFormula.split(" ")
      if(formula.length === 2) {
        var names = []
        formula.forEach(function(formula) {
          names.push(lists.random(formula));
        });
        if(rawFormula === 'profession profession'
          || rawFormula === 'profession noun'
          || rawFormula === 'noun noun'){
          return 'The ' + names[0] + ' and ' + names[1];
        } else if(rawFormula === 'profession city') {
          return 'The ' + names[0] + ' of ' + names[1]; 
        } else if(rawFormula === 'number noun'
                  || rawFormula === 'number profession'){
          return 'The ' + names[0] + ' ' + this.pluralize(names[1]);
        } else {
          return 'The ' + names[0] + ' ' + names[1];
        }
      } else {
        var name = lists.random(formula[0])
        return 'The ' + name;
      }
    },
    pluralize: function(word) {
                 if(word[(word.length - 1)] === 's') {
                  return word + 'es';
                 } else if(word.slice(1) === 'oose') {
                    if(word[0] === 'm') {
                      return word;
                    } else {
                      return 'geese'
                    }
                 } else {
                 return word + 's';
                 }
               }
  }
  }())
