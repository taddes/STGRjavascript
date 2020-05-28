// Sorting Arrays
const prices = [400.50, 3000, 99.99, 12.00, 9500, 35.95];

// Sort 1
console.log('a - b')
console.log(prices.sort((a, b) => a - b))

console.log(prices.sort((a, b) => a + b))

const books = [
  {
    title: '1984',
    author: 'George Orwell',
    publicationDate: 1946,
    genres: ['fiction', 'political', 'literature', 'dystopian']
  },
  {
    title: 'Who Owns The Future?',
    author: 'Jaron Lanier',
    publicationDate: 2012,
    genres: ['non-fiction', 'technology']
  },
  {
    title: 'Dawn of the New Everything',
    author: 'Jaron Lanier',
    publicationDate: 2018,
    genres: ['non-fiction', 'technology']
  },
  {
    title: 'The Moon is Down',
    author: 'John Steinbeck',
    publicationDate: 1942,
    genres: ['fiction', 'literature', 'ww2']
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley,',
    publicationDate: 1932,
    genres: ['fiction', 'literature', 'dystopian']
  },
  {
    title: 'The Road to Unfreedom',
    author: 'Timothy Snyder',
    publicationDate: 2018,
    genres: ['non-fiction', 'political']
  },
  {
    title: 'Bloodlands',
    author: 'Timothy Snyder',
    publicationDate: 2014,
    genres: ['non-fiction', 'political', 'ww2']
  },
  {
    title: 'The Age of Surveilance Capitalism',
    author: 'Zoshanna Zuboff',
    publicationDate: 2019,
    genres: ['non-fiction', 'political', 'dystopian']
  },
];

const oldBooks = books.filter(b => {
  return b.publicationDate < 1950
})
console.log(oldBooks)
console.log()


// Sort for books
console.log()
console.log('BOOKS SORT')

const descBooks = books.slice().sort((a, b) => b.publicationDate - a.publicationDate)
console.log(descBooks)