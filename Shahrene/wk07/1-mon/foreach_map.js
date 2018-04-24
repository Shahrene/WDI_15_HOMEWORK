
// .forEach()
// countIntegers – counts how many integers there are in an array
// ex: countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]) // => 4
// Hint: Google how you can check if a number is an integer in JavaScript

numArr = [4, 2.2, 5, 6, 4.2, 8.2, 4]

var countIntegers = function(numArr) {
  var intsArr = [];
  numArr.forEach(function(num) {
    if (num % 1 ===0) {
      intsArr.push(num)
    }
  })
  return intsArr;
}
countIntegers(numArr);

// .map()
// Write code using .map() to have the following input and output:
//
// getSquares – takes in an array of numbers and returns an array of their squares
// ex: getSquares([1, 2, 3, 4, 5]) => [1, 4, 9, 16, 25]

arr = [1, 2, 3, 4, 5]

var getSquares = function(arr) {
  var squareNums =  arr.map(function(num) {
    return Math.pow(num, 2);
  });
  return squareNums;
}
getSquares(arr);
