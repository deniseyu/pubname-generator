$(document).ready(function(){

  $('#submit-button').on('click', function(event){
    event.preventDefault();
    var pubnamer = new pubNamer();
    var randomFormula = pubnamer.getRandom(formulas);
    var randomResult = pubnamer.generate(randomFormula);
    $('#results').text(randomResult);
  });

});