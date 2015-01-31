describe('pubNamer', function(){
  var pubnamer;

  beforeEach(function(){
    // spyOn(Math, 'random').and.returnValue(0.1);
    pubnamer = new pubNamer();
  });

    it('should random pick a formula to use', function(){
    var randomFormula = getRandomWord(formulas);
    expect(pubnamer.generate(randomFormula)).toEqual('The baker and Angular developer');
  });

  it('pluralizes stag', function(){
    expect(pluralizeWord('stag')).toEqual('stags');
  });

  it('pluralizes cross', function(){
    expect(pluralizeWord('cross')).toEqual('crosses');
  });

  it('pluralizes goose', function(){
    expect(pluralizeWord('goose')).toEqual('geese');
  });

  it('pluralizes moose', function(){
    expect(pluralizeWord('moose')).toEqual('moose');
  })

  it('returns a random element of an array', function(){
    expect(pubnamer.getRandom(nouns)).toEqual('Boot');
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



});