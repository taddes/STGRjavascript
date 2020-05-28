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
### Spread 
* Allows an iterable such as an array to be **expanded** in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected