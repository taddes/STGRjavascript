// Basic while with a break
let num = 0;

while (num <= 10) {
  console.log(num);
  if (num == 8) {
    break
  }
  num++;
}

// Conditional
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(guess)
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`)

