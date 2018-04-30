
var $searchForm = $('.search-form');
var $queryInput = $('.query-input');
var $resultsDiv = $('.results');
var $searchBtn = $('.searchBtn');
var offset = 0;
var options = {
   url: 'https://api.giphy.com/v1/gifs/search?q=' + $queryInput.val() + '&api_key=SAAu8RpcPU9qVHa6Wnp83mhFRq16r2dB&q=&limit=10&rating=G&lang=en&offset=' + offset
 }
//Show gifs and append them to the div class 'results'
var showResults = function(res) {
   res.data.forEach(function(gif) {

      var $div = $('<div>');
      var $gif = $('<img>');
      $gif.attr('src', gif.images.fixed_height.url);
      $div.append($gif);
      $resultsDiv.append($div);
  });
  }


// search button function
$searchBtn.on('click', function(event){
  event.preventDefault();
  $resultsDiv.empty();
  //offset = 0;
  //var Search = $queryInput.val()
  var options = {
    url: 'http://api.giphy.com/v1/gifs/search?q=' + $queryInput.val() + '&api_key=SAAu8RpcPU9qVHa6Wnp83mhFRq16r2dB&q=&limit=10&rating=G&lang=en&offset=' + offset
  }

$.ajax(options).done(showResults)
});

// $(window).scroll(function() {
