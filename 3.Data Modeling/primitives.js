// JS Primitives
/*
Number
String
Boolean
Null
Undefined
*/

// Template Literals `${}`
// Evaluate expressions within ${}. Return one string as a whole.
let tempLitTitle = 'Exemplar';
const tempLit = `${tempLitTitle.toUpperCase()}`;
console.log(tempLit);
console.log(tempLit.length)

// Null vs undefined 
// typeof null is an object!
// Null is intentional absense of any value and must be assigned
let forLater = null;
// Undefined are variables that do not have an assigned value
// typeof undefined is undefined
let undef;
console.log(forLater, undef);


// String Methods
let testString = 'Captain Kirk'

// NOTE -> Strings are immutable, so calling a method on it does not change it!

// Find using regex
console.log(testString.match('[C]'))
// repeat string
console.log(testString.repeat(5))
// slice via index
console.log(testString.slice(0,8).trim())
// contained within string
console.log(testString.includes('C'))
// Find index of value (only for first occurance)
console.log(testString.indexOf('K'))
// replace values
console.log(testString.replace('Kirk', 'Pike'))

// Get random number
let randomNumber = (Math.random() * 10) +1;
console.log(typeof parseInt(String(randomNumber)))
console.log(typeof randomNumber)