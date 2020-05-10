// Classic == vs === 

// == checks for equality of values, but not type
// Coerces values of different type to compare
console.log('5' == 5)

// Strict equality checks for type and value
console.log('5' === 5)

// Falsiness of using some methods returning -1 are useful for control flow
let password = 'thisisapassword'
if (password.length >= 6) {
  // Checks to make sure no spaces
  if (password.indexOf(' ') === -1) {
    console.log('No spaces in password. Well done')
  }
}

// Every value has an inherent truthyness or falsyness
let falsy = [false, 0, '', null, NaN, undefined]
for (let item of falsy){
  console.log(`The value ${item} is falsy`)
}
// Truthy - Anything holding a value

/* 
Falsy 
====
false
0
""
null
undefined
NaN
-1 in bool eval
*/
