// Destructuring
// Clean syntax to unpack values from arrays, props from objects into vars.

// Arrays
const raceResults = ["Eliud Kipchoge", "Feyisa Lelisa", "Galen Rupp"];

const [gold, silver, bronze] = raceResults;
console.log({ gold, silver, bronze });
const [, middle] = raceResults;
console.log(middle);

const [winner, ...others] = raceResults;
console.log(winner, others);

// Objects
const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

const {country: nation, title: honorific } = runner;

console.log({nation})
console.log({honorific})