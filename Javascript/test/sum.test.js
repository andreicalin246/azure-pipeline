
const math  = require("../sum");
var assert = require('assert');


describe('Math module', function () {
  describe('sum', function () {
    it('should return 2 when a=1 and b=1', function () {
      assert.equal(math.sum(1,1), 2);
    });
  });
  describe('dif', function () {
    it('should return 1 when a=2 and b=1', function () {
      assert.equal(math.dif(2,1), 1);
    });
  });
});