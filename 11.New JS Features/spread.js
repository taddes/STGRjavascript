// Spread operators that unpacks an iterable into multiple arguments
const nums = [9, 3, 2, 8];
console.log(Math.max(nums));
console.log(Math.max(...nums));

// Spread for array literals
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

const spreadArr = [...nums1, ...nums2, 7, 8, 9];
console.log({ spreadArr });

const smallCats = ["Pepper", "Pip", "Pamina"];
const bigCats = ["Tiger", "Panther", "Lion"];
const allCats = [...smallCats, ...bigCats];

console.log({ allCats });

// copy
const moreCats = [...allCats, "Cougar"];
console.log({ moreCats });

// Spread string into an array
const name = 'albert';
console.log(name.split(''))
console.log([...name])