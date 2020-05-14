const examScores = [98, 76, 82, 65, 92];

for (let i = 0; i < examScores.length; i++) {
  console.log(examScores[i]);
}

// Reverse word method
const word = "tigers";
let reversedWord = "";
for (let i = word.length - 1; i >= 0; i--) {
  console.log(word[i]);
  reversedWord += word[i]
}

console.log(reversedWord)

// Nested 
// Total iterations multiplies outer loop executions by inner loop executions
// For each outer loop of 10, 5 others have to run inner
for (let i = 1; i <= 10; i++) {
  console.log('outer loop ', i)
  for (let j = 10; j >- 0; j-= 2) {
    console.log('inner loop ', j)

  }
}

// Game board example
const gameBoard = [
  [ 4, 32, 8, 4 ],
  [ 64, 8, 32, 4 ],
  [ 8, 32, 16, 4 ],
  [ 2, 8, 4, 2 ],
]

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++){
  let row = gameBoard[i];
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j]
  }
}
console.log(totalScore)

// for of alt
fullSum = 0
for (let row of gameBoard) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  fullSum += sum;
  console.log(`${row} summed to ${sum}`)
}
console.log(`Full sum ${fullSum}`)

// For of
let subreddits = ['cats', 'books', 'popcorn', 'tea']

for (let reddit of subreddits) {
  console.log(reddit)
  for (let character of reddit) {
    console.log(character)
  }
}

// Simultaneous iteration (best NOT to use for of)
let words1  = ['cat', 'dog', 'bird', 'mouse'];
let words2  = ['fish', 'meat', 'seed', 'cheese'];

for (let i = 0; i < words1.length; i++) {
  console.log(`${words1[i]} ${words2[i]}`)
}