describe('Testing testing', function() {

  beforeEach(function() {
    spyOn(Math, 'random').and.returnValue(0.1);
  });

  //testing the module pattern && multi-spying, can and will be deleted
  it('works', function() {
    expect(pubNamer.isTrue()).toBe(true);
  });

  it('stubs Math.rand', function() {
    expect(pubNamer.random()).toEqual(0.1);
  });

  it('stubs Math.rand twice', function() {
    expect(pubNamer.twiceRandom()).toEqual(0.2);
  });

  it('can call inner functions', function() {
    expect(pubNamer.innerRef()).toBe(true);
  });
});

describe('pubNamer', function() {

  describe('Naming pubs', function() {

    describe('names a', function() {

      beforeEach(function() {
        spyOn(Math, 'random').and.returnValue(0.1);
      });

      it('single-noun pub', function() {
        spyOn(lists, 'formula').and.returnValue('noun');
        expect(pubNamer.generate()).toEqual('The Boot');
      });

      it('single-city pub', function() {
        spyOn(lists, 'formula').and.returnValue('city');
        expect(pubNamer.generate()).toEqual('The Brixton');
      });

      it('single-place pub', function() {
        spyOn(lists, 'formula').and.returnValue('place');
        expect(pubNamer.generate()).toEqual('The Close');
      });

      it('single-profession pub', function() {
        spyOn(lists, 'formula').and.returnValue('profession');
        expect(pubNamer.generate()).toEqual('The Barista');
      });

      it('dual-profession pub', function() {
        spyOn(lists, 'formula').and.returnValue('profession profession');
        expect(pubNamer.generate()).toEqual('The Barista and Barista');
      });

      it('dual-noun pub', function() {
        spyOn(lists, 'formula').and.returnValue('noun noun');
        expect(pubNamer.generate()).toEqual('The Boot and Boot');
      });

      it('describer-famous person pub', function() {
        spyOn(lists, 'formula').and.returnValue('describer famousPerson');
        expect(pubNamer.generate()).toEqual('The Crooked David');
      });

      it('describer-place pub', function() {
        spyOn(lists, 'formula').and.returnValue('describer place');
        expect(pubNamer.generate()).toEqual('The Crooked Close');
      });

      it('city-noun pub', function() {
        spyOn(lists, 'formula').and.returnValue('city noun');
        expect(pubNamer.generate()).toEqual('The Brixton Boot');
      });

      it('profession-noun pub', function() {
        spyOn(lists, 'formula').and.returnValue('profession noun');
        expect(pubNamer.generate()).toEqual('The Barista and Boot');
      });

      it('profession-city pub', function() {
        spyOn(lists, 'formula').and.returnValue('profession city');
        expect(pubNamer.generate()).toEqual('The Barista of Brixton');
      });

      it('number-noun pub', function() {
        spyOn(lists, 'formula').and.returnValue('number noun');
        expect(pubNamer.generate()).toEqual('The Eleven Boots');
      });

      it('number-profession pub', function() {
        spyOn(lists, 'formula').and.returnValue('number profession');
        expect(pubNamer.generate()).toEqual('The Eleven Baristas');
      });
    });
  });

});
