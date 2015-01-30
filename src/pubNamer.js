function pubNamer(){

this.nouns = ["dog", "duck", "goose", "candle", "cat", "fox", "lamp", "hart", "hare", "rabbit", "stag", "moose", "hound", "swan", "stallion", "horse", "bull", "sword", "cheese", "grape", "goat", "ram", "mill",  "bottle", "apple", "quill", "pen", "feather", "cup", "bell", "staff", "ball", "sun", "moon", "cross", "cricket", "arms", "coat", "fish", "dolphin", "chip", "potato", "fella"]

this.famousPeople = ["Churchill", "Shakespeare", "Queen", "King", "Prince", "Edward", "Henry", "George", "Snozza", "Mihai", "Misifu", "Elizabeth", "Philip", "Charles", "James", "David", "Rylan", "Harry Potter", "Mary Poppins", "Roi", "Crispy", "Leo", "Pablo", "Stevie G"]

this.professions = ["barrister", "solicitor", "baker", "fisherman", "hunter", "butcher", "plumber", "schoolteacher", "Angular developer", "millner", "hatmaker", "tailor", "blacksmith", "brewer", "farmer", "plowman", "candlemaker", "jockey", "shoemaker", "doctor", "gardener", "innkeep", "locksmith", "barista", "toffeemaker", "banker", "barrowboy", "vet", "foreman", "writer", "postman"]

this.numbers = ["three", "ten", "fifteen", "twelve", "four", "five", "six", "seven", "eight", "nine", "eleven", "thirteen"]

this.describers = ["famous", "red", "golden", "old", "white", "black", "tanned", "rusty", "young", "bent", "crooked", "straight", "gay", "jolly"]

this.places = ["stable", "heaven", "wharf", "valley", "canyon", "gate", "tavern", "square", "common", "hall", "yard", "castle", "palace", "farm"]

this.cities = ["Exmouth", "Surrey", "London", "Essex", "Cumbria", "Norfolk", "Bristol", "Bath", "Brixton", "Islington", "Shoreditch", "Hackney", "Commercial", "Sussex", "Newcastle", "Yorkshire", "Lancaster", "Portsmouth", "York", "Dublin", "Wales", "Manchester", "Sheffield", "Edinburgh", "Stoke", "Sunderland", "Birmingham", "Tottenham", "Leicester", "Soho", "Kensington", "Brighton", "Plymouth", "Guernsey"]

this.formulas = ["The noun and noun", "The profession and profession", "The describer famousPeople", "The describer place", "The number noun", "The describer city", "The city noun", "The noun", "The famousPerson", "The place", "The city", "The profession"]

}

pubNamer.prototype.pluralize = function(word){
  if(word.split("")[word.length-1] === 's'){
    return word + 'es';
  } else {
    return word + 's';
  }
}

pubNamer.prototype.getRandomWord = function(array) {
  return array[Math.floor(Math.random() * array.length)]
};