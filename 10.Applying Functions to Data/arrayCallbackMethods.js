// forEach
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function(idx, n) {
  console.log(idx, n)
});

console.log(nums)

// Map
nums2 = nums.map(function(n) {
  return n* 2;
});

console.log(nums2);
// Same method using for of loop, pushing into new arr
nums2_alt = []
for (let num of nums) {
  nums2_alt.push(num * 2)
}

console.log(nums2_alt)

const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function(t) {
  return t.toUpperCase()
});
console.log({caps})

// Example
// Can use map to create any new data structure
const numbers = [20, 21, 22, 23, 24, 25, 26, 27]; 
const words = ['asap', 'brb', 'lol', 'rsvp', 'diy'];

const numDetail = numbers.map(function(n) {
  return {
    value: n,
    isEven: n % 2 === 0
  }
});

console.table(numDetail)
console.dir(numDetail)

