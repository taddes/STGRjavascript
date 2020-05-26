## Functions
**Reusable Procedures**
* Allow us to write reusable, modular code
* Define a chunk of code that we can execute at a later point
* Arguments/Parameters are inputs to our function
    * Arguments are passed in values/variables when function executed.
    * Paremeters are placeholder/defined value names when function declared.
* `return` keyword returns defined value following it and exits the function's scope.

### Function Scope
* Location where a variable is defined dictates where we have access to that variable.
* Any variable declared within a function, even if it is 'shadowing' another external variable of the same name, a function's variables will not be accessible outside the function.

### Block Scope
* Any block of code defined within `{ }`, whether it is an `if() {}`, `while(){}`. `function(){}`, etc. all scope variables within the block to that local block scope. Old pre-ES6 `var` hoists block scope into global scope. Not recommended.

### Lexical Scope
* When we have nested functions, any child functions have access to variables defined in their parents.
* Nested functions are lexically bound to the scope of their parent or outer function. However, parent does not have access to the inner function's variables. 
* Closed, most innermost defined variable will be used when multiple nested functions. 
```javascript
function outer() {
  let movie = 'Star Trek';

  function inner() {
    console.log(movie.toUpperCase())
  }
  inner()
}
```
### Function Statements
* Where a function is defined with a keyword and its return statement is often assigned to a variable. **Name of function follows `function` keyword**
```javascript
function square (num) {
  return num * num;
}
square(2)
```

### Function Expressions
* Function itself is stored in a variable. Another syntax for defining functions.
* Because functions are objects, they can be stored as a variable.
```javascript
const square = function (num) {
  return num * num;
}
square(2)
```
* Can also create function expressions with a named function
```javascript
const product = function multiply(x, y) {
  return x * y;
}
product(2,3)
// can't call multiply!!!
```

### Higher Order Functions
* Functions are objects in JavaScript, so they can be assigned to variables, stored in arrays, values in objects, etc.

### Functions as arguments