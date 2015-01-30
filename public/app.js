$(document).ready(function(){
  var pubnamer = new pubNamer();

  $('#submit-button').on('click', function(event){
    event.preventDefault();
    var randomFormula = pubnamer.getRandom(formulas);
    var randomResult = pubnamer.generate(randomFormula);
    $('#results').text(randomResult);
    // $('#results').append("<br>" + Math.random());
  });

});