var assert = require('assert'),
  toDot = require('../');

describe('jsonpath to dot', function(){
  it('should work', function(){
    assert.equal(toDot('/tags'), 'tags');
    assert.equal(toDot('/tags/1'), 'tags.1');
    assert.equal(toDot('/tags/blah'), 'tags.blah');
  });
});
