// Spread operators that unpacks an iterable into multiple arguments
const nums = [9, 3, 2, 8];
console.log(Math.max(nums))
console.log(Math.max(...nums))

// Spread for array literals
const nums1 = [1,2,3];
const nums2 = [4, 5, 6];

const spreadArr = [...nums1, ...nums2]
console.log({spreadArr})
