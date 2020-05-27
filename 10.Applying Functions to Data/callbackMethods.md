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
```javascript
```

```javascript
```