
var lists = (function(){

  //this way, data is encapsualated and made private - this is the client-side module
  //pattern through an IIFE

  var nailWords = {
    noun: ["slippers", "springtime", "day", "night", "lake"],
    describer: ["minty", "fresh", "bold", "suave", "juicy"],
    color: ["red", "orange", "yellow", "turquoise", "emerald"],
    formula: ["describer noun", "color", "color noun"]
  }

  return {
    random: function(list) {
              var index = Math.floor(Math.random() * nailWords[list].length);
              return nailWords[list][index];
            }
  }
}());
