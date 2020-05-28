## New JavaScript Features

### Default Function Parameters
* Add default parameters into functions. Styled after Python default parameters by setting within parenthesis.
* Can use any object as a default parameter, including a number, string, object or array.
* Order still matters. Must also ensure any default parameters come after non-defaults.
```javascript
function mult(x, y = 1) {
  return x * y
}
mult(5) // 5
```