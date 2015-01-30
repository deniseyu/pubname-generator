describe('pubNamer', function(){

  it('should pluralize a noun ending in S', function(){
    var pubnamer = new pubNamer();
    expect(pubnamer.pluralize('lass')).toEqual('lasses');
  });

  it('should pluralize a noun not ending in S', function(){
    var pubnamer = new pubNamer();
    expect(pubnamer.pluralize('stag')).toEqual('stags');
  });

  it('should generate two random nouns for the "The noun and noun" formula', function(){
    var pubnamer = new pubNamer();
    expect(pubnamer.generate('nounandnoun')).toEqual('the duck and goose');
  });

  it('should return a random element of an array', function(){
    var pubnamer = new pubNamer();
    expect(pubnamer.getRandomWord(nouns)).toEqual('dog');
  });

});