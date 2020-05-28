// Reduce
const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currentValue) => {
  return total * currentValue;
});
console.log({ product });

// Find max value
let grades = [89, 96, 58, 77, 62, 93, 99, 81, 21, 45, 87, 66, 52, 79];
const topScore = grades.reduce((max, currentValue) => {
  if (currentValue > max) return currentValue;
  return max;
});
console.log({ topScore });

const topScoreMth = grades.reduce((max, currentValue) => (
  Math.max(max, currentValue)
))
console.log({topScoreMth});

// Pass in initial value

const initVal = nums.reduce((acc, currentVal) => {
  return acc + currentVal
}, 100);
console.log({initVal})

// Tallying 
const votes = ['y', 'y', 'n', 'y', 'y', 'y', 'n', 'n', 'n', 'y'];
const results = votes.reduce((tally, val ) => {
  if(tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
    return tally;
  }, {})

  console.log({results})

  const results_short = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
  }, {})

  // Ratings Book example
  const books = [
    {
      title: '1984',
      author: 'George Orwell',
      publicationDate: 1946,
      genres: ['fiction', 'political', 'literature', 'dystopian'],
      rating: 4.8
    },
    {
      title: 'Who Owns The Future?',
      author: 'Jaron Lanier',
      publicationDate: 2012,
      genres: ['non-fiction', 'technology'],
      rating: 3.4
    },
    {
      title: 'Dawn of the New Everything',
      author: 'Jaron Lanier',
      publicationDate: 2018,
      genres: ['non-fiction', 'technology'],
      rating: 4.2
    },
    {
      title: 'The Moon is Down',
      author: 'John Steinbeck',
      publicationDate: 1942,
      genres: ['fiction', 'literature', 'ww2'],
      rating: 3.2
    },
    {
      title: 'Brave New World',
      author: 'Aldous Huxley,',
      publicationDate: 1932,
      genres: ['fiction', 'literature', 'dystopian'],
      rating: 4.2
    },
    {
      title: 'The Road to Unfreedom',
      author: 'Timothy Snyder',
      publicationDate: 2018,
      genres: ['non-fiction', 'political'],
      rating: 5
    },
    {
      title: 'Bloodlands',
      author: 'Timothy Snyder',
      publicationDate: 2014,
      genres: ['non-fiction', 'political', 'ww2'],
      rating: 5
    },
    {
      title: 'The Age of Surveilance Capitalism',
      author: 'Zoshanna Zuboff',
      publicationDate: 2019,
      genres: ['non-fiction', 'political', 'dystopian'],
      rating: 5
    },
  ];

  const ratingBooks = books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if(!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book)
    return groupedBooks;
  }, {})

console.log(ratingBooks);