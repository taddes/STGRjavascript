const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  'Star Trek V': 6,
  'Star Trek VI': 8,
  'Star Trek Beyond': 9.5
};

// Alternate Iterative Loop Method
console.log(Object.keys(movieReviews));
console.log(Object.values(movieReviews));

for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

