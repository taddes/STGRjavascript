## Modern JS Loops

### for loop
```javascript
for (let i = 0; i <= 10; i++) {
  console.log(i)
}
```

Standard syntax sets up an initial increment variable, then a range (while condition), then the operation to increment variable.


### while loop
```javascript
let num = 0;
while (num < 10) {
  console.log(num);
  num++;
}
```

A loop that runs until a test condition is met. Always require a base variable to compare to, and an operation to increment and decrement within the loop, should a condition be met.

*When you're unsure of the exact number of times you need something to run, a while loop is the best bet*

`break` is commonly used to break out of the loop execution if a specific condition is met.

```javascript
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(guess)
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`)
```

### for ... of loop
Iterate over arrays, or other iterables.
New ES6 Feature. IE does not have support.

```javascript
for (variable of iterable) {
  statement
}

for (let char of word) {
  console.log(char)
}
```


```javascript
let subreddits = ['cats', 'books', 'popcorn', 'tea']

for (let reddit of subreddits) {
  console.log(reddit)
  for (let character of reddit) {
    console.log(character)
  }
}
```
### for ... in loop
Iterate Over Objects (keys, specifically)
```javascript
for (variable in object) {
  statement
}
```

Because arrays are technically objects still in JS, you can use for in on an array
* Index value of array will be the returned variable, then you can call the property of that array using the index: `value[k]`
```javascript
for (let k in [89, 34, 45, 57]) {
  console.log(k)
}
```