

var $searchBtn = $('.searchBtn');
  $searchBtn.on('click', function (event){
    event.preventDefault();
    var $input = $('.input');
    $.ajax ({
        url: 'http://omdbapi.com/?s=' + $input + '&apikey=2f6435d9' }).done(function(res){
    $('h2').text(res.Title);
    });
  });
