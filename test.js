var assert = require('assert')
var ntol = require('./')

describe('number-to-letter', function() {
  it('should work properly', function() {
    assert.equal('A', ntol(0));
    assert.equal('Z', ntol(25));
    assert.equal('AA', ntol(26));
    assert.equal('AZ', ntol(51));
    assert.equal('BA', ntol(52));
    assert.equal('ZA', ntol(676));
    assert.equal('ZZ', ntol(701));
    assert.equal('AAA', ntol(702));
  })
})
