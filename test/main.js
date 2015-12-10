var chai = require('chai');
var assert = chai.assert;
var Country = require('../src');


describe('Country', function() {
    describe('#constructor()', function() {
        it('should construct from full name', function() {
        	var c = new Country('Christmas Island');
            assert.equal(c.toFullName(), 'Christmas Island');
        });        

        it('should construct from short name', function() {
        	var c = new Country('Åland');
            assert.equal(c.toName(), 'Åland');
        });        

        it('should construct from iso code', function() {
        	var c = new Country('AU');
            assert.equal(c.toCode(), 'AU');
        });

        it('should construct from Alpha code', function() {
        	var c = new Country('BB');
            assert.equal(c.toAlphaCode(), 'BB');
        });

        it('should construct from Alpha3 code', function() {
        	var c = new Country('CYM');
            assert.equal(c.toAlpha3Code(), 'CYM');
        });
        
        it('should construct from Phone code', function() {
        	var c = new Country('86');
            assert.equal(c.toPhoneCode(), '86');
            assert.equal(c.toAlpha3Code(), 'CHN');
        });

        it('should return all country list', function() {
            assert.equal(Country.list().length, 249);
        });
    });
});
