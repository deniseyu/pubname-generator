describe('Lists', function() {

  beforeEach(function() {
    spyOn(Math, 'random').and.returnValue(0.1);
  });

  it('selects a random element of a given list', function() {
    //in this case, Math.random being set to 0.1 always returns 6, so the 5th array
    //element
    expect(lists.random('noun')).toEqual('Boot');
  });
});

