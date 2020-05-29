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
* Allows an iterable such as an array to be **expanded** in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
* Expanding some iterable into multiple arguments, at its simplest. 
* 3 Main uses:
    * Spread in a function Call.
        * Expands an iterable (array, string, etc.) into a list of arguments.
        ```javascript
          nums = [25, 45, 33, 85, 48]
          Math.max(nums) // NaN
          Math.max(...nums) // 85
        ```
    * Spread in array literals.
        * Create new array using an existing array(s). Spreads elements from one array into a new array.
        * Can combine multiple arrays, even pass in new values while spreading
        ```javascript
        const nums1 = [1, 2, 3];
        const nums2 = [4, 5, 6];
        const spreadArr = [...nums1, ...nums2, 7, 8, 9]
        console.log({spreadArr}) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
        ```
        * Similar to array.concat() `array1.concat(array2)`
        ```javascript
        const combArr = nums1.concat(nums2)
        ```
        * Excellent way to make a copy of an array, *but cannot clone nested arrays*:
        ```javascript
        const copy = [...otherArr]
        ```
        * Good for spreading out a string:
        ```javascript
        [...'abcdef'] // ['a', 'b', 'c', 'd', 'e', 'f']
        ```
    * Spread in object literals.
        * Ability to spread out objects, unpack them into other objects.
        ```javascript
        const feline = { legs: 4, family: "Felidae" };
        const lion = { ...feline, genus: "Panthera" };
        ```
        * Can be used to copy/clone obejcts *but will not clone nested objects*
        ```javascript
        const houseCat = {
          ...feline,
          isUnpredictable: true,
          stripes: true
        };
        ```

### Rest Operator (Arguments Object)
* Collects multiple objects into a single array.
* Make functions accept a variable number of arguments. Like `*args` in Python.
