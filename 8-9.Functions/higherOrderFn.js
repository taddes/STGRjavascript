function callThreeTimes(f) {
  f();
  f();
  f();
}

function cry() {
  console.log('BOO HOO')
}

callThreeTimes(cry)