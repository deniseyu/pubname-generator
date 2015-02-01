describe('Testing testing', function(){

  beforeEach(function(){
    spyOn(Math, 'random').and.returnValue(0.1);
  });

  //testing the module pattern && multi-spying, can and should be deleted
  it('works', function(){
    expect(pubNamer.isTrue()).toBe(true);
  });

  it('stubs out Math.rand', function(){
    expect(pubNamer.random()).toEqual(0.1);
  });

  it('stubs out Math.rand twice', function(){
    expect(pubNamer.twiceRandom()).toEqual(0.2);
  });
});

describe('lists', function() {

  beforeEach(function(){
    spyOn(Math, 'random').and.returnValue(0.1);
  });

  it('selects a random element of a given list', function(){
    //in this case, Math.random being set to 0.1 always returns 6, so the 5th array
    //element
    expect(lists.random('noun')).toEqual('Boot');
  });

  it('provides a random naming formula', function(){
    expect(lists.formula()).toEqual('city noun');
  });
});

describe('pubNamer', function() {

  describe('Naming pubs', function(){

    describe('names a', function() {

      beforeEach(function(){
        spyOn(Math, 'random').and.returnValue(0.1);
      });

      it('single-noun pub', function(){
        spyOn(lists, 'formula').and.returnValue('noun');
        expect(pubNamer.generate()).toEqual('The Boot');
      });

      it('single-city pub', function(){
        spyOn(lists, 'formula').and.returnValue('city');
        expect(pubNamer.generate()).toEqual('The Brixton');
      });

      it('single-place pub', function(){
        spyOn(lists, 'formula').and.returnValue('place');
        expect(pubNamer.generate()).toEqual('The Close');
      });

      it('single-profession pub', function(){
        spyOn(lists, 'formula').and.returnValue('profession');
        expect(pubNamer.generate()).toEqual('The Barista');
      });

      it('dual-profession pub', function(){
        spyOn(lists, 'formula').and.returnValue('profession profession');
        expect(pubNamer.generate()).toEqual('The Barista and Barista');
      });

      it('dual-noun pub', function() {
        spyOn(lists, 'formula').and.returnValue('noun noun');
        expect(pubNamer.generate()).toEqual('The Boot and Boot');
      });

      it('describer-famous person pub', function(){
        spyOn(lists, 'formula').and.returnValue('describer famousPerson');
        expect(pubNamer.generate()).toEqual('The Crooked David');
      });

      it('describer-place pub', function(){
        spyOn(lists, 'formula').and.returnValue('describer place');
        expect(pubNamer.generate()).toEqual('The Crooked Close');
      });

      it('city-noun pub', function(){
        spyOn(lists, 'formula').and.returnValue('city noun');
        expect(pubNamer.generate()).toEqual('The Brixton Boot');
      });

      it('profession-noun pub', function(){
        spyOn(lists, 'formula').and.returnValue('profession noun');
        expect(pubNamer.generate()).toEqual('The Barista and Boot');
      });
    });
  });
});
//TODO
//it('pluralizes stag', function(){
//expect(pluralizeWord('stag')).toEqual('stags');
//});

//it('pluralizes cross', function(){
//expect(pluralizeWord('cross')).toEqual('crosses');
//});

//it('pluralizes goose', function(){
//expect(pluralizeWord('goose')).toEqual('geese');
//});

//it('pluralizes moose', function(){
//expect(pluralizeWord('moose')).toEqual('moose');
//})

//it('should generate a name of two nouns', function(){
//expect(pubnamer.generate('nounNoun')).toEqual('The dog and moose');
//});

//it('should generate a name of two professions', function(){
//expect(pubnamer.generate('professionProfession')).toEqual('The baker and barista');
//});

//it('should generate a describer and famous person', function(){
//expect(pubnamer.generate('describerFamousPerson')).toEqual('The famous Pablo');
//});

//it('should generate a describer and place', function(){
//expect(pubnamer.generate('describerPlace')).toEqual('The old yard');
//});

//it('should generate a number and noun', function(){
//expect(pubnamer.generate('numberNoun')).toEqual('The Ten Bells');
//});

//it('should generate a number and profession', function(){
//expect(pubnamer.generate('numberProfession')).toEqual('The Five Barristers');
//});

//it('should generate a noun', function(){
//expect(pubnamer.generate('noun')).toEqual('The Dog');
//});

//it('should generate a city and noun', function(){
//expect(pubnamer.generate('cityNoun')).toEqual('The Essex Swan');
//});

//it('should generate a famous person', function(){
//expect(pubnamer.generate('famousPerson')).toEqual('The Elizabeth');
//})

//it('should generate a place', function(){
//expect(pubnamer.generate('place')).toEqual('The Yard');
//});

//it('should generate a city', function(){
//expect(pubnamer.generate('city')).toEqual('The Essex');
//});

//it('should generate a profession', function(){
//expect(pubnamer.generate('profession')).toEqual('The Duchess');
//})

//it('should generate a profession and noun', function(){
//expect(pubnamer.generate('professionNoun')).toEqual('The Barrister and Dog');
//});

//it('should generate a profession and city', function(){
//expect(pubnamer.generate('professionCity')).toEqual('The Duke of Wales');
//});

//it('should generate a city and place', function(){
//expect(pubnamer.generate('cityPlace')).toEqual('Islington Tavern');
//})



//});
