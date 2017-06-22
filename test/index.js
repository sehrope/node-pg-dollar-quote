var assert = require('assert');
var dollarQuote = require('../index');

describe('dollarQuote', function() {
    it('should return NULL for null inputs', function() {
        dollarQuote(null).should.equal('NULL');
    });

    it('should return NULL for undefined inputs', function() {
        dollarQuote(undefined).should.equal('NULL');
    });

    it('should return $$$$ for empty strings', function() {
        dollarQuote('').should.equal('$$$$');
    });

    it('should use $$ to wrap regular strings', function() {
        dollarQuote('test').should.equal('$$test$$');
    });

    it('should use something other than $$ wrap strings that contain $$', function() {
        dollarQuote('$$').should.match(/\$[a-zA-Z0-9]+\$\$\$\$[a-zA-Z0-9]+\$/);
    });

    it('should throw an error if value is a number', function() {
        assert.throws(function() {
            dollarQuote(123);
        });
    });

    it('should throw an error if value is a boolean', function() {
        assert.throws(function() {
            dollarQuote(true);
        });
    });

    it('should throw an error if value is an object', function() {
        assert.throws(function() {
            dollarQuote({foo: 123});
        });
    });
});
