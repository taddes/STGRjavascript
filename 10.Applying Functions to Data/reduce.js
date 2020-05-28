// Reduce
const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currentValue) => {
  return total * currentValue;
});
console.log({ product });

// Find max value
let grades = [89, 96, 58, 77, 62, 93, 99, 81, 21, 45, 87, 66, 52, 79];
const topScore = grades.reduce((max, currentValue) => {
  if (currentValue > max) return currentValue;
  return max;
});
console.log({ topScore });

const topScoreMth = grades.reduce((max, currentValue) => {
  Math.max(max, currentValue);
});
console.log(topScoreMth);
