const multiply = require('basics-operations').multiply;

function factorial(a) {
  if (a === 1) return 1;
  return multiply (a * factorial(a -1));
}

exports.factorial = factorial;

function summation(value, times) {
  let result = value;
  for (let i = 0; i < times; ++i) {
    result = basicOperations.add(result, value);
  }
  
  return result;
}