

var $queryInput = $('.query-input');
var $resultsDiv = $('.results');
var $searchBtn = $('.searchBtn');
var offset = 0;

var showResults = function(res) {
   res.data.forEach(function(gif) {
    var $div = $('<div>');
    var $gif = $('<img>');
    attr('src', gif.images.fixed_height.url);
    $div.append($gif);
    $resultsDiv.append($div);
  });
  }

$searchBtn.on('click', function (event){
  event.preventDefault();
  $resultsDiv.empty();
  var $searchForm = $('.search-form');
  var options = {
    url: 'https://api.giphy.com/v1/gifs/search?q=' + $queryInput.val() + '&api_key=SAAu8RpcPU9qVHa6Wnp83mhFRq16r2dB&q=&limit=10&offset=10&rating=G&lang=en'
  }
$.ajax(options).done(showResults)
  console.log($queryInput.input);
});

// $(window).scroll(function() {
