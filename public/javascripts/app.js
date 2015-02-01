$(document).ready(function(){

  $('#submit-button').on('click', function(event){
    event.preventDefault();
    var randomResult = pubNamer.generate();
    $('#results').text(randomResult);
  });

});
