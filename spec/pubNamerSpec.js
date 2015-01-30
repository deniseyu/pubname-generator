describe('pubNamer', function(){

  var pubnamer;

  beforeEach(function(){
    pubnamer = new pubNamer();
  });

  it('should pluralize stag', function(){
    expect(pubnamer.pluralize('stag')).toEqual('stags');
  });

  it('should pluralize cross', function(){
    expect(pubnamer.pluralize('cross')).toEqual('crosses');
  });

  it('should pluralize goose', function(){
    expect(pubnamer.pluralize('goose')).toEqual('geese');
  });

  it('should pluralize moose', function(){
    expect(pubnamer.pluralize('moose')).toEqual('moose');
  })

  it('should return a random element of an array', function(){
    expect(pubnamer.getRandom(nouns)).toEqual('dog');
  });

  it('should generate a name of two nouns', function(){
    expect(pubnamer.generate('nounNoun')).toEqual('The dog and moose');
  });

  it('should generate a name of two professions', function(){
    expect(pubnamer.generate('professionProfession')).toEqual('The baker and barista');
  });

  it('should generate a describer and famous person', function(){
    expect(pubnamer.generate('describerFamousPerson')).toEqual('The famous Pablo');
  });

  it('should generate a describer and place', function(){
    expect(pubnamer.generate('describerPlace')).toEqual('The old yard');
  });

  it('should generate a number and noun', function(){
    expect(pubnamer.generate('numberNoun')).toEqual('The Ten Bells');
  });

  it('should generate a number and profession', function(){
    expect(pubnamer.generate('numberProfession')).toEqual('The Five Barristers');
  });

  it('should generate a noun', function(){
    expect(pubnamer.generate('noun')).toEqual('The Dog');
  });

  it('should generate a city and noun', function(){
    expect(pubnamer.generate('cityNoun')).toEqual('The Essex Swan');
  });

  it('should generate a famous person', function(){
    expect(pubnamer.generate('famousPerson')).toEqual('The Elizabeth');
  })

  it('should generate a place', function(){
    expect(pubnamer.generate('place')).toEqual('The Yard');
  });

  it('should generate a city', function(){
    expect(pubnamer.generate('city')).toEqual('The Essex');
  });

  it('should generate a profession', function(){
    expect(pubnamer.generate('profession')).toEqual('The Duchess');
  })

  it('should generate a profession and noun', function(){
    expect(pubnamer.generate('professionNoun')).toEqual('The Barrister and Dog');
  });

  it('should generate a profession and city', function(){
    expect(pubnamer.generate('professionCity')).toEqual('The Duke of Wales');
  });

  it('should generate a city and place', function(){
    expect(pubnamer.generate('cityPlace')).toEqual('Islington Tavern');
  })

  it('should random pick a formula to use', function(){
    var randomFormula = pubnamer.getRandom(formulas);
    expect(pubnamer.generate(randomFormula)).toEqual('The baker and Angular developer');
  });

});