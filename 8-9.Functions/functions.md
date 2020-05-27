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
### Function Declarations/Statements
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
* Functions are objects in JavaScript, so they can be assigned to variables, stored in arrays, values in objects, etc. Therefore, they are 'higher order functions'
* Higher Order Functions are Functions that operate on/with other functions. They can:
    * Accept other functions as arguments
    ```javascript
    function callTwice(func) {
      func();
      func();
    }

    function say() {
      console.log(`Hello There`)
    }

    callTwice(say);
    ```

    * Return another function or functions as return values
        * Good to think of as 'factories', in that they make new versions of a function and tweak it.
        * By passing in an outer argument, you adjust how the function behaves, as it will accept the inner arguments when called.
        * Factory function
        * Returns a pattern of logic for reuse.
    ```javascript
    function multiplyBy(num) {
      return function(x) {
        return x * num;
      }
    }
    
    const triple = multiplyBy(3);
    triple(5) // 15

    const double = multiplyBy(2);
    double(5) // 10
    
    const halve = multiplyBy(0.5)/
    halve(10) // 5
    ```

### Callbacks
* Functions that are passed into another function as an argument, which is then invoked inside the outer function.
```javascript
// Example
function callTwice(func) {
  func();
  func();
}

function say() {
  console.log(`Hello There`)
}

callTwice(say);
```
* Common for requests that take time and require another resource to do something.
* Most common to pass in an anonomyous function as a callback. If you don't need to reuse the function, this is the easiest way.
```javascript
setTimeout(() => {
  alert('WELCOME!')
}, 3000);
```

### Hoisting
* ES6 variable declarations of `let` and `const` do not allow hoisting like `var`. 
* Functions assigned to a variable, or function expressions, do not hoist.  The variable is set, but it's value set to undefined at execution, just like any variable. `cannot access 'varname' before initialization`.
* Function statements/declarations do hoist, however and you can access call them before defined.
* Regardless, it is best not to depend on hoisting when writing code.

### Arrow Functions
* Syntactically compact syntax for defining function expressions.
```javascript
const square = (x) => {
  return x*x;
}

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const numDetail = nums.map((n) => {
  return {
    value: n,
    isEven: n % 2 === 0
  }
});
```
* A single parameter defined for the function lets you leave out the parenthesis after equals sign.
* **Implicit Returns to Arrow Functions**:
    * A simple arrow function that returns a simple, single expression, `return` can be left out. You have to wrap the expression with parenthesis.
    * You can only return one thing with an implicit return, must be a simple expression. 
    ```javascript
    const square = n => (n * n);
    const isEven = num => num % 2 === 0;

    // One shorthand
    const parityList = nums.map((n) => {
      if (n % 2 === 0) return 'even';
      return 'odd'
    });

    // Same as above, using ternary exp
    const parityList = nums.map((n) => {
      n % 1 === 0 ? 'even' : 'odd'
    });
    ```