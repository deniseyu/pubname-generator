describe('Pluralizing', function() {

  it('words with a standard plural', function() {
    expect(pluralize('stag')).toEqual('stags');
  });

  describe('when a word already ends with s', function() {

    it('cross', function() {
      expect(pluralize('cross')).toEqual('crosses');
    });
  });

  describe('when a word has a non-standard plural', function() {

    it('goose', function() {
      expect(pluralize('goose')).toEqual('geese');
    });

    it('moose', function() {
      expect(pluralize('moose')).toEqual('moose');
    });
  });
});
