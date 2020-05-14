const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  'Star Trek V': 6,
  'Star Trek VI': 8,
  'Star Trek Beyond': 9.5
};

for (let movie in movieReviews) {
  console.log(movie);
  console.log(movieReviews[movie]);
}

// Because arrays are technically objects in JS, you can use a for in loop on an array
for (let k in [89, 34, 45, 57]) {
  console.log(k)
}