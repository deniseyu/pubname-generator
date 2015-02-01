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
      var formula = rawFormula.split(" ");
      if(formula.length === 2) {
        var names = [];
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
          return 'The ' + names[0] + ' ' + pluralize(names[1]);
        } else {
          return 'The ' + names[0] + ' ' + names[1];
        }
      } else {
        var name = lists.random(formula[0]);
        return 'The ' + name;
      }
    }
  }
  //private

  //function formulas(name) {
    //var strings = {
    //'profession profession':  
    //'profession noun':
    //'profession city':
    //'number noun':
    //'number profession':
    //'noun noun':
  //}
}())
