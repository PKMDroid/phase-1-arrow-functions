// index.js

// 1. Function expression called divide
const divide = function() {
  return 2000 / 100;
};

// 2. Arrow function called square
const square = (num) => num * num;

// 3. Arrow function called add
const add = (a, b) => a + b;

// Export for testing
module.exports = { divide, square, add };
