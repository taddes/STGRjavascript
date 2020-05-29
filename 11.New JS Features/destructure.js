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

const { country: nation, title: honorific } = runner;

console.log({ nation });
console.log({ honorific });

const { first, last, ...other } = runner;
console.log(other);

// Nested Destructuring
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

console.log(country);
console.log(goldWinner);

// Parameter Destructuring
const fullName = ({first, last}) => {
  return `${first} ${last}`
}
const runnerPerson = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

console.log(fullName(runnerPerson))

function printName({ first, last, country }) {
  return `${first} ${last}, ${country}`
}

console.log(printName(runnerPerson))

const responses = ['HTTP/1.1', '200 OK', 'application/json']
function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status ${statusCode}`)
}

parseResponse(responses)