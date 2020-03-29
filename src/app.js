const print = require('./print.js');

module.exports = function addOne(num) {
  const result = num+1
  print(result)
  return result
}