var lists = (function(){
  
  //this way, data is encapsualated and made private - this is the client-side module
  //pattern through an IIFE

  var data = {
    noun: ["Angel", "Apple", "Ball", "Bayonet", "Beet", "Bell", "Boot", "Bottle", "Bull", "Candle", "Cane", "Cat", "Cheese", "Chip", "Coat", "Cock", "Cricket", "Cross", "Cup", "Dog", "Dolphin", "Donkey", "Door", "Duck", "Eagle", "Feather", "Fella", "Fiddle", "Fife", "Flag", "Flute", "Frog", "Goat", "Goblet", "Goose", "Grape", "Gun", "Hare", "Harp", "Hart", "Hat", "Hawk", "Hen", "Horse", "Hound", "Key", "Lamp", "Lyre", "Mill", "Mirror", "Moon", "Moose", "Pen", "Quill", "Rabbit", "Ram", "Rooster", "Sardine", "Shield", "Staff", "Stag", "Stallion", "Sun", "Swan", "Sword"],
    famousPerson: ["Charles", "Churchill", "David", "Edward", "Elizabeth", "George", "Harry Potter", "Henry", "Hodor", "James", "Jon Snow", "Kate", "Leo", "Mary", "Philip", "Rylan", "Shakespeare", "Sherlock", "Snozza", "William"],
  profession: ["Alchemist", "Baker", "Banker", "Barber", "Barista", "Barrister", "Barrowboy", "Beggar", "Blacksmith", "Brewer", "Butcher", "Candlemaker", "Doctor", "Duchess", "Duke", "Farmer", "Fiddler", "Fisherman", "Foreman", "Gardener", "Hatmaker", "Hunter", "Innkeep", "Jester", "Jockey", "King", "Locksmith", "Millner", "Minister", "Pharmacist", "Physician", "Plowman", "Plumber", "Postman", "Prince", "Princess", "Queen", "Schoolteacher", "Shoemaker", "Solicitor", "Tailor", "Toffeemaker", "Veterinarian", "Warden", "Writer"], 
  number: ["Eight", "Eleven", "Fifteen", "Five", "Four", "Nine", "Seven", "Six", "Ten", "Thirteen", "Three", "Twelve"],
  describer: ["Bent", "Black", "Crooked", "Dancing", "Famous", "Fighting", "Golden", "Green", "Jolly", "Laughing", "Metal", "Old", "Red", "Rusty", "Singing", "Silver", "White", "Wooden", "Yellow", "Young"],
  place: ["Canyon", "Castle", "Close", "Common", "Farm", "Gate", "Hall", "Heaven", "Hill", "Mountain", "Palace", "Path", "Port", "Room", "Square", "Stable", "Tavern", "Valley", "Wharf", "Yard"],
  city: ["Bath", "Bristol", "Brixton", "Chelsea", "Cockfosters", "Cumbria", "Dublin", "Edinburgh", "Essex", "Exmouth", "Hackney", "Islington", "Kensington", "Lancaster", "London", "Manchester", "Newcastle", "Norfolk", "Plymouth", "Portsmouth", "Shoreditch", "Soho", "Surrey", "Sussex", "Tottenham", "Wales", "Westminster", "Yorkshire"],
  formula: ["city", "city noun", "city place", "describer place", "famousPerson", "noun", "noun noun", "number noun", "number profession", "place", "profession", "profession city", "profession noun", "profession profession"]
  }

  return {
    random: function(list) {
              var index = Math.floor(Math.random() * data[list].length);
              return data[list][index];
            },
    formula: function() {
              return lists.random('formula');
             }
  }
}());
