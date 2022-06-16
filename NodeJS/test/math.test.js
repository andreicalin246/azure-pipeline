const math = require('../math');
var assert = require('assert');

describe('Math', function () {
  describe('sum()', function () {
	it('should return 3 when a=1 and b=2', function () {
      assert.equal(math.sum(1, 2), 3);
    });
	it('should return 4 when a=2 and b=2', function () {
      assert.equal(math.sum(2, 2), 4);
    });
  })
});