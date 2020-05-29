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

* **Arguments Object** (Older way):
    * Iterable available inside every function **Except arrow functions**. under `arguments` keyword.
    * *array-like* object that has a length property, but does not have array methods like push or pop. 
    * Contains all arguments passed into function and their index.
    * Again, array methods cannot be used. However, you can convert it to an array using `[...arguments]` or `Array(arguments)`
    * Again, not usable in arrow functions.
    ```javascript
    function sum(x, y, z) {
      argsArr = [...arguments];
      return argsArr.reduce((total, curVal) => {
        return total + curVal;
      });
    }
      ```

* **REST PARAMS**:
    * Collects all remaining arguments (any that have not matched a specific parameter) into an actual array.
    * Put everything not accounted for into an array. 
    * Order matters. Must come before any other parameters. **Will always be last param**.
    ```javascript
    function sum2(...nums) {
      return nums.reduce((total, currVal) => {
        return total + currVal
      });
    }
    ```

### Destructuring
* A short, clean syntax to unpack values from arrays or properties from objects into distinct variables.
* Arrays:
    * Unpack variables from an array into their own variables
    ```javascript
    const raceResults = ['Eliud Kipchoje', 'Feyisa Lelisa', 'Galen Rupp'];
    const [ gold, silver, bronze ] = raceResults;
    console.log({gold, silver, bronze}) //'Eliud Kipchoje', 'Feyisa Lelisa', 'Galen Rupp'
    ```
    * Using the order of the written variable names within the array sets the index values of the referenced array.
    * Can use commas to reference empty spaces to 'iterate' though and pass elements.
    ```javascript
    const [first, , , fourth] = raceResults;
    ```
    * Can use spread operator to combine other values into an array.
    ```javascript
    const [winner, ...others] = raceResults;
    ```
* Objects:
    * Variables based off of name of property of an object.
    ```javascript
        const runner = {
          first: "Eliud",
          last: "Kipchoge",
          country: "Kenya",
          title: "Elder of the Order of the Golden Heart of Kenya",
      };

      const {country: nation, title: honorific } = runner;
      console.log({nation}) // 'Kenya;
      console.log({honorific}) // 'Elder of the Order of the Golden Heart of Kenya'
      ```
    * Nested Destructuring
        * Reference objects, or pass them with comma, reference array or object elements as you would, were they not nested.
        ```javascript
          const results = [
          {
            first: "Eliud",
            last: "Kipchoge",
            country: "Kenya",
          },
          {
            first: "Feyisa",
            last: "Lilesa",
            country: "Ethiopia",
          },
          {
            first: "Galen",
            last: "Rupp",
            country: "United States",
          },
        ];
        const [{ first: goldWinner }, { country }] = results;
        ```
    * Parameter Destucturing
        * Passing in an object literal with references to the desired keys as the arguments to pass in.  
        ```javascript
        function printName({ first, last, country }) {
          return `${first} ${last}, ${country}`
        }
        ```
