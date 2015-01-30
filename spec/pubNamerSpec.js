describe('pubNamer', function(){

  beforeEach (function() {
    pubnamer = new pubNamer();
  });

  it('should pluralize a noun ending in S', function(){
    expect(pubnamer.pluralize('lass')).toEqual('lasses');
  });

  it('should pluralize a noun not ending in S', function(){
    expect(pubnamer.pluralize('stag')).toEqual('stags');
  });

  xit('should generate two random nouns for the "The noun and noun" formula', function(){
    expect(pubnamer.generate('nounandnoun')).toEqual('the duck and goose');
  });

  it('should return a random element of an array', function(){
    expect(pubnamer.getRandomWord(nouns)).toEqual(jasmine.any(String));
  });

});