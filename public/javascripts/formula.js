var formula = (function() {
  var pubResult = {
    'profession profession': theOneAndTwo,
    'profession noun': theOneAndTwo,
    'profession city': theOneOfTwo,
    'number noun': theOneTwos,
    'number profession': theOneTwos,
    'noun noun': theOneAndTwo,
    'describer place': theOneTwo,
    'describer famousPerson': theOneTwo,
    'city noun': theOneTwo,
    'city place': theOneTwo,
    'city name': theOneTwo,
    'simple' : theOne
  }
  function theOneAndTwo(pubWords) {
    return 'The ' + pubWords[0] + ' and ' + pubWords[1];
  };
  function theOneOfTwo(pubWords) {
    return 'The ' + pubWords[0] + ' of ' + pubWords[1]; 
  }; 
  function theOneTwos(pubWords) {
    return 'The ' + pubWords[0] + ' ' + pluralize(pubWords[1]);
  }; 
  function theOneTwo(pubWords) {
    return 'The ' + pubWords[0] + ' ' + pubWords[1];
  };
  function theOne(pubWords) {
    return 'The ' + pubWords[0];
  };
  return {
    makeName: function(formula, pubWords) {
                return (pubResult[formula] || pubResult['simple'])(pubWords) 
              }
  }
}())
