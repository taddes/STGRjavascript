let veganArr = ["Broccoli", "Asparagus", "Tofu", "Seitan"];

// push
veganArr.push("Hempeh");

// pop
veganArr.pop();

// shift - remove from start
veganArr.shift();
console.log(veganArr);
// unshift - add to start
veganArr.unshift("Kale");
console.log(veganArr);

// concat
let newVegArr = veganArr.concat("sprouts", " yams");
console.log(newVegArr);

// includes
console.log(newVegArr.includes("sprouts"));
// FROM index second argument
console.log(newVegArr.includes("Tofu", 2));

// indexof - finds index of first occurance
console.log(newVegArr.indexOf("Beets"));

// reverse -  reverse arr
let reversedVegArr = newVegArr.reverse();
console.log(reversedVegArr);

// split - split string to an array
let stringToArr = 'RESPECT';
console.log(stringToArr.split(''))
console.log(stringToArr.split('').join('_'))

// Slice - return a new arr that is a subarray 
console.log(newVegArr.slice(2))

// Splice - remove/replace elements, or add in new
// 3 args - start, deleteCount, whatToInsert
console.log(newVegArr)
console.log(newVegArr.splice(3, 1))

// Sort - updates array in place
const nums = [2, 43, 10, 65, 3]
// sorts strings by default, weird because it doesn't sort numerically
nums.sort((a,b) => a - b)
console.log(nums)