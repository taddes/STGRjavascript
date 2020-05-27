## Callback Methods
* Arrays come with many built in methods that accept callback functions.
* Among most important and useful functions in language.
* Run a function iterably; apply to each item of an iterable and return applied value to each element.

### forEach
Accepts a callback function. Calls the function once per element in the array

* Second parameter in anon function in  `forEach` allows us to access index. Comes first, before the element

```javascript
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function(n) {
  console.log(n*2)
});
```

### Map
Creates a new array with the results of calling a callback on every element in the array.
* Great for extracting values from other complex data structures. Can also return new data structures like an array of objects!
* Can create a new variable, map some subset into another **without affecting original**

```javascript
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums2 = nums.map(function(n) {
  return n* 2;
});

const numDetail = nums.map(function(n) {
  return {
    value: n,
    isEven: n % 2 === 0
  }
});

console.table(numDetail)
```

### Use of Arrow Functions
* Syntactically compact syntax for defining function expressions.
```javascript
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const numDetail = nums.map((n) => {
  return {
    value: n,
    isEven: n % 2 === 0
  }
});
```

### Find
* Returns the value of the **first element** in the array that satisfies the provided testing function.
* Stops after the first value is found.
```javascript
let movies = [
  'The Fantastic Mr. Fox',
  'Mr and Mrs Smith',
  'Mrs. Doubtfire',
  'Mr. Deeds'
];

let movie = movies.find(movie => {
  return movie.includes('Doubt')
}); 
// Mrs. Doubtfire
```

### Filter
* Creates a new array with all the elements that pass a test implemented by a provided function.
* The passed in callback function returns values that evaluate to true. If a value returns true, it is added to the new returned array.
```javascript
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => {
  return n % 2 === 1;
});
// [9, 7, 5, 3, 1]
```

```javascript
```