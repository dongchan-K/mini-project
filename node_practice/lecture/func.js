const { odd, even } = require('./var');

function checkOddOrEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}

module.exports = checkOddOrEven;

// module.exports === {} 이다
