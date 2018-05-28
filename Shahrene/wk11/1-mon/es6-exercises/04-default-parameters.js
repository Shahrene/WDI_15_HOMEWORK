// Write a function that takes 3 parameters: greeting, firstName,
// and lastName. Set the default values to 'hello' and your first
// and last name, if no input is provided.

const greeting = function(greeting = 'hi', firstName = 'harry', lastName = 'hedger'){
  return `${greeting} ${firstName} ${lastName}`
}

console.log(greeting());
