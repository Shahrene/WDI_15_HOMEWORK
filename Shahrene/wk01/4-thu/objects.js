console.log('objects');
/*
Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
*/

var favRecipe = {
  title: "Fish Tacos",
  serves: 4,
  ingredients:
  [ "tortillas",
    "fish",
    "taco sauce",
    "onion",
    "capsicum",
    "lettuce"]
}

console.log(favRecipe.title);
console.log('Serves: ' + favRecipe.serves);
console.log('Ingredients:')
for (var i = 0; i < favRecipe.ingredients.length; i++) {
  console.log(favRecipe.ingredients[i]);
}

/*
Create an array of objects, where each object describes a book and has properties
for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

Iterate through the array of books. For each book, log the book title and book author
like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not.
 If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien',
 and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
 */

 var bookList =[
  { title: "The Handmaids Tale",
    author: "Margaret Atwood",
    read: true
  },
  { title: "The Disaster Artist",
    author: "Greg Sestero",
    read: true
  },
  { title: "The Ministry of Utmost Happiness",
    author: "Arundhati Roy",
    read: false
  },
  { title: "A Story Lately Told",
    author: "Anjelica Houston",
    read: false
  }
]

for (i = 0; i < bookList.length; i++) {
  if (bookList[i].read === true) {
    console.log("I have read " + bookList[i].title + " by " + bookList[i].author);
  } else if (bookList[i].read === false ) {
    console.log("I have not read " + bookList[i].title + " by " + bookList[i].author);
  }
}

/*
It's like IMDB, but much much smaller!
Create an object to store the following information about your favorite movie:
title (a string), duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes.
Stars: Puff, Jackie, Living Sneezes."
*/

var movie = {
  title: "The Room",
  duration: 99,
  released: 2004,
  stars: ["Tommy Wiseau", "Greg Sestero", "Juliette Danielle", "Philip Haldiman"]
}

var movieInfo = function(movie) {
  console.log("{movie.title} was released in {movie.released} and goes for {movie.duration} minutes and stars: {movie.stars.join(' ')"};
}
details(movie);
