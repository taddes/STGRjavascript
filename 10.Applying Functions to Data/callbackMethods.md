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

### Every
* Tests whether *all* elements in an array pass the provided function. Returns a boolean

### Some
* Tests whether *some* elements in an array pass the provided function. Returns a boolean

```javascript
const words = ["dog", "log", "hog"];
const all3Lets = words.every(word => word.length === 3);

const isLetterG = words.some(word => {
  const last = word.length - 1;
  return word[last] === 'g'
});
```

### Sort

* Default sort in JS is to convert all values to strings and sort them based on that.
* Passing in a *compare function* is what allows you to sort integers and other data types, not just based on strings.
* Think of compare function performing its operation on 2 elements at a time.
```javascript
arr.sort(compareFunc(a, b))
```
* If `compareFunc(a, b)` returns less than 0:
    * Sort a before b
* If `compareFunc(a, b)` returns 0:
    * Leave a and b unchanged with respect to each other
* If `compareFunc(a, b)` returns greater than 0
    * Sort b before a

```javascript
const prices = [400.50, 3000, 99.99, 12.00, 9500, 35.95];
// Ascending
prices.sort((a, b) => a - b)
// Descending
prices.sort((a, b) => b - a)

const books = [
  {
    title: 'The Moon is Down',
    author: 'John Steinbeck',
    publicationDate: 1942,
    genres: ['fiction', 'literature', 'ww2']
  },
  {
    title: 'The Age of Surveilance Capitalism',
    author: 'Zoshanna Zuboff',
    publicationDate: 2019,
    genres: ['non-fiction', 'political', 'dystopian']
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley,',
    publicationDate: 1932,
    genres: ['fiction', 'literature', 'dystopian']
  }
];

const descBooks = books.slice().sort((a, b) => b.publicationDate - a.publicationDate)
[
  {
    title: 'The Age of Surveilance Capitalism',
    author: 'Zoshanna Zuboff',
    publicationDate: 2019,
    genres: ['non-fiction', 'political', 'dystopian']
  },
  { title: 'The Moon is Down',
    author: 'John Steinbeck',
    publicationDate: 1942,
    genres: [ 'fiction', 'literature', 'ww2' ] },
  { title: 'Brave New World',
    author: 'Aldous Huxley,',
    publicationDate: 1932,
    genres: [ 'fiction', 'literature', 'dystopian' ] 
    } 
  ]
```

### Reduce
* Executes a reducer function on each element of the array, **resulting in a single value**.
* Multiple elements in an array reduced into a single element at the end. Like summing, or an accumulator, a maximum value.
* First parameter is `previousValue`, which is the accumulator, which is referenced as the iteration proceeds. `CurrentValue` is the value directly following it.
* Optional third parameter is the initial accumulator/first value. Otherwise, the first value of the array is used as the `previousValue` argument.
```javascript
reduce(callback(previousValue, CurrentValue) => {
  return
})
```
```javascript
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue
});
/*
Callback  Accumulator currentValue  returnValue
first         3             5             8
second        8             7             15
third         15            9             24
fourth        24            11            35
*/
```

**Useful tallying example, for creating a hash table**
```javascript
const votes = ['y', 'y', 'n', 'y', 'y', 'y', 'n', 'n', 'n', 'y'];
const results = votes.reduce((tally, val ) => {
  if(tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
    return tally;
  }, {})

console.log({results})
// { results: { y: 6, n: 4 } }

const results_short = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {})
```