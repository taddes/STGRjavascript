## Objects and Their Methods

### Shorthand Object Properties
* Key: value matching within on object that let you set the key and value simultaneously.
* If a variable is named within an object and you want it to be a key, just set `keyword`, not `keyword: value` like you did in pre-ES5 code.

### Computed Properties
* A dynamic value for a key when defining an object. Use `[propertyName]` syntax.
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