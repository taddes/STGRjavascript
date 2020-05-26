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
* When we have nested functions, any child functions have access to variables defined in their parents
```javascript
function outer() {
  let movie = 'Star Trek;

  function inner() {
    console.log(movie.toUpperCase())
  }
  inner()
}

```