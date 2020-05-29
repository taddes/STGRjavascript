function sum(x, y, z) {
  console.log(arguments);
  argsArr = [...arguments];
  return argsArr.reduce((total, curVal) => {
    return total + curVal;
  });
}

console.log(sum(3, 4, 6))