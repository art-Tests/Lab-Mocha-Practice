module.exports = function (wallaby) {
  return {
    files: [
      'browser/Calculator.js',
      'node_modules/chai/chai.js'
    ],
    tests: [
      'browser/tests.js'
    ],
    env: {
      type: 'node'
    }
  };
};