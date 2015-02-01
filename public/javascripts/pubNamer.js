var pubNamer = (function(){

  return {
    //these function are for Jasmine test purposes, but left in just because
    isTrue: function() { return true; },
    random: function() { return Math.random(); },
    twiceRandom: function() { return Math.random() + Math.random(); },
    
    //real work starts here
    generate: function(){
      var rawFormula = lists.formula()
      var formula = rawFormula.split(" ")
      if(formula.length === 2){
        var names = []
        formula.forEach(function(formula){
          names.push(lists.random(formula));
        });
        if(rawFormula === 'profession profession'
          || rawFormula === 'profession noun'
          || rawFormula === 'noun noun'){
          return 'The ' + names[0] + ' and ' + names[1];
        } else {
          return 'The ' + names[0] + ' ' + names[1];
        }
      } else {
        var name = lists.random(formula[0])
        return 'The ' + name;
      }
    }
  }
  }())

//TODO
//var pluralizeWord = function(string) {
  //if (string === 'moose') {
    //return 'moose';
  //} else if (string === 'goose') {
    //return 'geese';
  //} else if (string.split("")[string.length-1] === 's'){
    //return string + 'es';
  //} else {
    //return string + 's';
  //}
//};

//var formulasHash = {
  //'numberNoun' : 'The ' + getRandomWord(numbers) + ' ' + pluralizeWord(getRandomWord(nouns)),
  //'numberProfession' : 'The ' + getRandomWord(numbers) + ' ' + pluralizeWord(getRandomWord(professions)),
  //'professionCity' : 'The ' + getRandomWord(professions) + ' of ' + getRandomWord(cities),
//};
