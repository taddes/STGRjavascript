## Objects and Their Methods

### Shorthand Object Properties
* Key: value matching within on object that let you set the key and value simultaneously.
* If a variable is named within an object and you want it to be a key, just set `keyword`, not `keyword: value` like you did in pre-ES5 code.

### Computed Properties
* A dynamic value for a key when defining an object. Use `[propertyName]` syntax. They won't be a static string as usual, like `keyname`.
```javascript
const team = {};
team[role] = person;

const team = {
  [role] = person,
  [1 + 6 + 7] = 'seventeen'
};
```
```javascript
// Not using computed properties
function addProp(obj, k, v) {
  const copy {
    ...obj
  };
  copy[k] = v;
  return copy
}

// Using computed properties
const addProp = {obj, k, v} => {
  return {...obj, [k]: v}
}

const res = addProp(team, 'happy', ':)')
```

### Shorthand Method Definition
```javascript
const auth = {
  username: 'Botnik'
  login() {
    console.log('Logged in')
  },
  // versus old
  login: function() {
    console.log('logged out');
  }
}
```

### `this` keyword
* Reference to the current execution scope.  Inside a normal JS program, it is either the `window` or `global` execution scope, whether it is in the Browser or Node.
* Depends on the *invocation context* of the function it is used in.
* Within an object, any invoked property or function refers to that current function's execution scope. `this` refers to the object from which something is referenced or called. 
* `this` in a method of an object ties to the instance of that object itself. Any methods called set the invocation context when a method is called.
* **ARROW FUNCTIONS** behave differently. They do not get their own version of `this` referencing the object in which it's called. *usually don't use arrow functions within methods of an object*.