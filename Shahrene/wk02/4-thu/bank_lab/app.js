
//search for the deposit button by tag name
//better choice may be giving it a class name in HTML and search by that
var depositBtn = document.querySelector('.depositBtn');
var withdrBtn = document.querySelector('.withdrBtn');
var inputSave = document.querySelector('.inputSave');
var saveResult = document.querySelector('.saveResult');

var inputCheck = document.querySelector('.inputCheck');
var checkResult = document.querySelector('.checkResult');
//query selector returns an object with lots of properties
//including properties to change the value and textContent

var deposit = function() {
  var i = 1000;
  var total = Number(inputSave.value) +i;
  console.log('total');
  saveResult.onclick = total;
  // get the value from the input box - to do

  //add value to balance and show in span - to do
  //may be even just start by trying to set the span with the number 1000
  //when user clicks on the deposit button
}
// tell button to run a function on click event
depositBtn.addEventListener('click', deposit);
