var formula = (function() {
  var formulas = {
    'describer noun': describerNoun,
    'color noun': describerNoun,
    'color': color
  }
  function color(nailWords) {
    return nailWords[0];
  };
  function describerNoun(nailWords) {
    return nailWords[0] + ' ' + nailWords[1];
  };
  return {
    makeName: function(formula, nailWords) {
                return formulas[formula](nailWords)
              },
    random: function() {
              var keys = Object.keys(formulas)
              var index = Math.floor(Math.random() * keys.length);
              return keys[index];
            }
  }
}())
