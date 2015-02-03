describe('pubNamer', function() {

  describe('Naming pubs', function() {

    describe('names a', function() {

      beforeEach(function() {
        spyOn(Math, 'random').and.returnValue(0.1);
      });

      it('single-noun pub', function() {
        spyOn(formula, 'random').and.returnValue('noun');
        expect(pubNamer.generate()).toEqual('The Boot');
      });

      it('single-city pub', function() {
        spyOn(formula, 'random').and.returnValue('city');
        expect(pubNamer.generate()).toEqual('The Brixton');
      });

      it('single-place pub', function() {
        spyOn(formula, 'random').and.returnValue('place');
        expect(pubNamer.generate()).toEqual('The Close');
      });

      it('single-profession pub', function() {
        spyOn(formula, 'random').and.returnValue('profession');
        expect(pubNamer.generate()).toEqual('The Barista');
      });

      it('dual-profession pub', function() {
        spyOn(formula, 'random').and.returnValue('profession profession');
        expect(pubNamer.generate()).toEqual('The Barista and Barista');
      });

      it('dual-noun pub', function() {
        spyOn(formula, 'random').and.returnValue('noun noun');
        expect(pubNamer.generate()).toEqual('The Boot and Boot');
      });

      it('describer-famous person pub', function() {
        spyOn(formula, 'random').and.returnValue('describer famousPerson');
        expect(pubNamer.generate()).toEqual('The Crooked David');
      });

      it('describer-place pub', function() {
        spyOn(formula, 'random').and.returnValue('describer place');
        expect(pubNamer.generate()).toEqual('The Crooked Close');
      });

      it('city-noun pub', function() {
        spyOn(formula, 'random').and.returnValue('city noun');
        expect(pubNamer.generate()).toEqual('The Brixton Boot');
      });

      it('profession-noun pub', function() {
        spyOn(formula, 'random').and.returnValue('profession noun');
        expect(pubNamer.generate()).toEqual('The Barista and Boot');
      });

      it('profession-city pub', function() {
        spyOn(formula, 'random').and.returnValue('profession city');
        expect(pubNamer.generate()).toEqual('The Barista of Brixton');
      });

      it('number-noun pub', function() {
        spyOn(formula, 'random').and.returnValue('number noun');
        expect(pubNamer.generate()).toEqual('The Eleven Boots');
      });

      it('number-profession pub', function() {
        spyOn(formula, 'random').and.returnValue('number profession');
        expect(pubNamer.generate()).toEqual('The Eleven Baristas');
      });
    });
  });

});
