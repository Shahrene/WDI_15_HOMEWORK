
$setColorBtn = $('.setColorBtn');
$colorDiv = $('.color-div');
$colorInput = $('.color-input');

$setColorBtn.on('click', function(event) {
  event.preventDefault();

  $colorInput.keypress(function(event) {
    console.log( "Handler for .keypress() called." );
  });

  $colorInput = $('.color-input');
  var colorVal = $colorInput[0].value;

  $colorDiv[0].style.backgroundColor = colorVal;
})
