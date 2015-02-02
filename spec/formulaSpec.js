describe('Formula', function() {

  describe('', function() {
    //beforeEach(function() {
      //var pubWords = ['Lamp', 'Lamp'];
    //});

    it('composes a pub name when given a formula', function() {
      var pubWords = ['Lamp', 'Lamp']
      expect(formula.makeName('noun noun', pubWords)).toEqual('The Lamp and Lamp')
    });

    it('otherwise gives the simple form', function() {
      var pubWords = ['Lamp', 'Lamp']
      expect(formula.makeName('noun', pubWords)).toEqual('The Lamp')
    });
  });
});
