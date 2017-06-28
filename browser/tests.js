
try {
  // node
	var expect = require("chai").expect;
  var Calculator = require("../browser/Calculator");
}catch(e){
  // browser
  var expect = chai.expect;
}

describe('Calculator', function() {
  it('1 加 1 应该等于 2', function() {
    expect(Calculator.add(1, 1)).to.be.equal(2);
  });

  it('任何数加0等于自身', function() {
    expect(Calculator.add(1, 0)).to.be.equal(1);
    expect(Calculator.add(0, 0)).to.be.equal(0);
  });
});
