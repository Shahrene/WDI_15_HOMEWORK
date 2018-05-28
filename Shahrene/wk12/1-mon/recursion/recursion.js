
// # recursion
//
// - work out the *constant base case*
// - problem
// - sub problem
//
// - counting numbers of items in a list
// ```
// var numbers = [1,2,3,4]
// // do not use .length
// // do not use for
// // do not use forEach or map
//
// count(numbers) // => 4
// ```
// - suming a list of numbers
// - calculating factorial
//
// # big O
//
// const numbes = [1,3,4,3,6,8,12]
//
// - find first repeated element in a list


var numbers = [1, 2, 3, 4]
function count(array) {
  if (array[index+1]) {
    return arrayLength(array, index+1);
  } else if (index === 0) {
    return 0;
  } else {
    return index + 1;
  }
  }


count(numbers)
