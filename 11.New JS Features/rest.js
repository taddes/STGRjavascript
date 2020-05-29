function sum(x, y, z) {
  console.log(arguments);
  argsArr = [...arguments];
  return argsArr.reduce((total, curVal) => {
    return total + curVal;
  });
}

console.log(sum(3, 4, 6))

// REST PARAMS
function sum2(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal
  });
}

function fullName(first, last, ...titles) {
  console.log('first ',first)
  console.log('last ', last)
  console.log('titles ', titles)
}

fullName('Tom', 'Jones', 'Whitworth', 'III', 'Esq.')