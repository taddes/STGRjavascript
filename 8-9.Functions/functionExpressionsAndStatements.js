// A function statement
function mult(x, y) {
  return x * y;
}
console.log(mult(2,3))

// Function Expression
const multiply = function (x, y) {
  return x* y;
}
console.log(multiply(3,4))

// Named function within Function Expression
const multi = function multiply(x, y) {
  return x * y;
}
console.log(multi(4,5))