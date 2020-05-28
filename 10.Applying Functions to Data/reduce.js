// Reduce
const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currentValue) => {
  return total * currentValue;
});
console.log({product})