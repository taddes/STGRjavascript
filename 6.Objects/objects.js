/* 
Objects
=======

Key/value pairs of information
Not indexed or ordered
All keys are stored as strings
*/

let cat = {
  name: "Pepper",
  stripes: true,
  crazy: true,
  toys: ["Gilgamesh", "Anger Bug", "Cat Dancer", "Purple Bird"],
};

console.log(cat.stripes);
console.log(cat['name'])

// Obj are reference types, not obj itself

let cat2 = cat
cat2.name = 'Pamina'
console.log(cat.name)

// Array/Object Equality -> must be same pointer in memory,not content
console.log(cat === cat2)