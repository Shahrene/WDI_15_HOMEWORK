
var $setColorBtn = $('.setColorBtn');
var $brushBox = $('.color-div');
var $colorInput = $('.color-input');
var $squares = $('.squares');
var $div = $('.square')

//create squares and append them to divs
var createSquares = function() {
    for (var i = 0; i < 650; i++) {
      var $div = $('<div>')
      $div.addClass('square')
      $squares.append($div);
    }
  }

createSquares();

//sets the color and event listener for div squares to match the colour input
var paintBrush = function() {
  var colorVal = $colorInput[0].value;
    $brushBox[0].style.backgroundColor;
      $brushBox.css('background-color',$colorInput.val());
        $squares.on('mouseover', function(event){
          if ($(event.target).hasClass('square')){
            $(event.target).css('background-color',$colorInput.val());
        }
      })
}
paintBrush();

//listens for the set button click or enter keypress and stops page reloading
$setColorBtn.on('click', function(event) {
  event.preventDefault();
 //  var movieTitle = $searchInput.val();
 //  var options = {
 //   url: 'http://omdbapi.com/?t=' + movieTitle + '&apikey=2f6435d9'
 //    };
 // $.ajax(options).done(setBackgroundImage);
//});
  $colorInput.keypress(function(event) {
    if (event.keycode === 13) {
    console.log( "Handler for .keypress() called." );
  }
})
})
