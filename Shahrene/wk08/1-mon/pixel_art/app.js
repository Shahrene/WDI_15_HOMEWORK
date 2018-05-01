
var $setColorBtn = $('.setColorBtn');
var $colorDiv = $('.color-div');
var $colorInput = $('.color-input');
var $squares = $('.squares');

$setColorBtn.on('click', function(event) {
  event.preventDefault();

  $colorInput.keypress(function(event) {
    console.log( "Handler for .keypress() called." );
  });

  $colorInput = $('.color-input');
  var colorVal = $colorInput[0].value;

  $colorDiv[0].style.backgroundColor = colorVal;
})

//create squares and append them to divs
$(document).ready(function() {
    for (var i = 0; i < 675; i++) {
      var $div = $('<div>')
      $div.addClass('square')
      //.mouseover(changeColor)
      $squares.append($div);
    }

  })
