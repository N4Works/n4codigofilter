"use strict";

describe('N4CodigoFilter', function()
{
  var _codigoFilter;

  beforeEach(module('n4CodigoFilter'));

  beforeEach(inject(function($injector)
  {
    _codigoFilter = $injector.get('CodigoFilter');
  }));

  describe('Methods', function()
  {
    it('should return an empty string when no value is specified', function()
    {
      expect(_codigoFilter()).toEqual('');
    });

    it('should return the input string when not a number value is specified', function()
    {
      expect(_codigoFilter('abc')).toEqual('abc');
    });

    it('should complete with zeros by default', function()
    {
        expect(_codigoFilter(1)).toEqual('000001');
    });

    it('should be a string with length equals 6 by default', function()
    {
        expect(_codigoFilter(1)).toEqual('000001');
        expect(_codigoFilter(10)).toEqual('000010');
        expect(_codigoFilter(100)).toEqual('000100');
        expect(_codigoFilter(1000)).toEqual('001000');
        expect(_codigoFilter(10000)).toEqual('010000');
        expect(_codigoFilter(100000)).toEqual('100000');
    });

    it('should be able to change the complete caractere', function()
    {
        expect(_codigoFilter(1, null, '1')).toEqual('111111');
    });

    it('should be able to change the return string length', function()
    {
        expect(_codigoFilter(1, 2)).toEqual('01');
    });
  });
});
