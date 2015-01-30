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

  it('should return a random word from nouns', function(){
    var wordCheck = pubnamer.nouns.indexOf(pubnamer.getRandomWord(pubnamer.nouns))
    expect(wordCheck > -1).toBeTruthy()
  });

});