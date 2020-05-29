// Destructuring
// Clean syntax to unpack values from arrays, props from objects into vars.

const raceResults = ['Eliud Kipchoje', 'Feyisa Lelisa', 'Galen Rupp'];

const [ gold, silver, bronze ] = raceResults;
console.log({gold, silver, bronze})