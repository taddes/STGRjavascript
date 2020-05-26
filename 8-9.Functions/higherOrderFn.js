// Accept function as an argument
function callThreeTimes(f) {
  f();
  f();
  f();
}

function cry() {
  console.log('BOO HOO')
}

callThreeTimes(cry)

// Example
function makeBetweenFunction(x, y) {
  return function(num) {
    return num >= x && num <= y;
  }
}

const isMinor = makeBetweenFunction(0, 18);
console.log(isMinor(18));

const isSenior= makeBetweenFunction(65, 150);
console.log(isSenior(64))