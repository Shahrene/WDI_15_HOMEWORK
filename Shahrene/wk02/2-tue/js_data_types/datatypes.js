console.log ('Data Types Exercise');

typeof 15
// Prediction: Number
// Actual: Number

typeof 5.5
// Prediction: Number
// Actual: Number

typeof NaN
// Prediction: Number
// Actual: number

typeof "hello"
// Prediction: string
// Actual:

typeof true
// Prediction: boolean
// Actual: boolean

typeof 1 != 2
// Prediction: true
// Actual: true


"hamburger" + "s"
// Prediction: "hamburgers"
// Actual: "hamburgers"

"hamburgers" - "s"
// Prediction: "hamburger"
// Actual: NaN

"1" + "3"
// Prediction: "13"
// Actual: "13"

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: "johnny5"
// Actual: "johnny5"

"johnny" - 5
// Prediction: "johnny-5"
// Actual: NaN

99 * "luftbaloons"
// Prediction: "99 luftballons"
// Actual: NaN


//Add an element to the back of an array.
var thingsINeed = ['pen', 'laptop', 'pencil', 'exercise book'];
thingsINeed.push('brain');
< 5

// Remove an element from the back of an array.
var thingsINeed = ['pen', 'laptop', 'pencil', 'exercise book', 'brain'];
thingsINeed.pop();
< "brain"

// Add an element to the front of an array.
var thingsINeed = ['pen', 'laptop', 'pencil', 'exercise book'];
thingsINeed.unshift('brain');
< 5

// Remove an element from the front of an array.
var thingsINeed = ['pen', 'laptop', 'pencil', 'exercise book', 'brain'];
thingsINeed.shift();
< "pen"

// Concatenates all the elements in an array into a string.
var thingsINeed = ['pen', 'laptop', 'pencil', 'exercise book', 'brain'];
thingsINeed.join();
< "pen,laptop,pencil,exercise book,brain"

// Separates the characters of a string into an array. This one is a string method.
var string = "We all love javascript";
var result = string.split(" ");
> (4) ["We", "all", "love", "javascript"]

var numbers = [2, 4, 6, 8]
numbers.pop()
numbers.push(10)
numbers.unshift(3)
< 3, 2, 4, 6, 10

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")
< "dot" "dash " "pause" "dash" "dot"

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()
bands[0].shift()
bands[1][3] = "Ringo"

beatles = ["Paul", "John", "George" "Ringo"]
stones = ["Mick", "Keith", "Ronnie", "Charlie"]

a	b	a AND b
true	true	true
true	false	false
false	true	false
false	false	false

a	b	a OR b
true	true	true
true	false	true
false	true	true
false	false	false

a	b	a != b
3	3	false
1	5	true
2	"2"	false

a	b	!a AND (a OR b)
true	true	false
true	false	false
false	true	true
false	false	false
