function pubNamer(){
  this.getRandom = getRandomWord;
  this.pluralize = pluralizeWord;
}

pubNamer.prototype.generate = function(formula) {
  return formulasHash[formula];
}

var getRandomWord = function(array) {
  return array[Math.floor(Math.random() * array.length)]
};

var pluralizeWord = function(string) {
  if (string === 'moose') {
    return 'moose';
  } else if (string === 'goose') {
    return 'geese';
  } else if (string.split("")[string.length-1] === 's'){
    return string + 'es';
  } else {
    return string + 's';
  }
};

var formulasHash = {
  'nounNoun' : 'The ' + getRandomWord(nouns) + ' and ' + getRandomWord(nouns),
  'professionProfession' : 'The ' + getRandomWord(professions) + ' and ' + getRandomWord(professions),
  'describerFamousPerson' : 'The ' + getRandomWord(describers) + ' ' +getRandomWord(famousPeople),
  'describerPlace' : 'The ' + getRandomWord(describers) + ' ' + getRandomWord(places),
  'numberNoun' : 'The ' + getRandomWord(numbers) + ' ' + pluralizeWord(getRandomWord(nouns)),
  'numberProfession' : 'The ' + getRandomWord(numbers) + ' ' + pluralizeWord(getRandomWord(professions)),
  'noun' : 'The ' + getRandomWord(nouns),
  'cityNoun' : 'The ' + getRandomWord(cities) + ' ' + getRandomWord(nouns),
  'famousPerson' : 'The ' + getRandomWord(famousPeople),
  'place' : 'The ' + getRandomWord(places),
  'city' : 'The ' + getRandomWord(cities),
  'cityPlace' : getRandomWord(cities) + ' ' + getRandomWord(places),
  'profession' : 'The ' + getRandomWord(professions),
  'professionCity' : 'The ' + getRandomWord(professions) + ' of ' + getRandomWord(cities),
  'professionNoun' : 'The ' + getRandomWord(professions) + ' and ' + getRandomWord(nouns)
};