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
  title: 'Mole',
  serves: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa']

}
console.log(favRecipe.title);
console.log('Serves: '+ favRecipe.serves);
console.log('Ingredients:');
console.log(favRecipe.ingredients[0]);
console.log(favRecipe.ingredients[1]);
console.log(favRecipe.ingredients[2]);

/*
Create an array of objects, where each object describes a book and has properties
for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

Iterate through the array of books. For each book, log the book title and book author 
like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not.
 If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien',
 and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
 */
