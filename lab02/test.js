var expect = require('chai').expect;

describe('hooks', function() {
  before(function() {
    // 在本区块的所有测试用例之前执行
  });
  after(function() {
    // 在本区块的所有测试用例之后执行
  });
  beforeEach(function() {
    // 在本区块的每个测试用例之前执行
  });
  afterEach(function() {
    // 在本区块的每个测试用例之后执行
  });
  // test cases
});

// beforeEach.test.js
describe('beforeEach示例', function() {
  var foo = false;

  beforeEach(function() {
    foo = true;
  });

  it('修改全局变量应该成功', function() {
    expect(foo).to.be.equal(true);
  });
});