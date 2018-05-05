
var $searchForm = $('.search-form');
var $queryInput = $('.query-input');
var $resultsDiv = $('.results');
var $searchBtn = $('.searchBtn');
var number = 20;


//Show gifs and append them to the div class 'results'
var showResults = function(res) {
   res.data.forEach(function(gif) {
      var $div = $('<div>');
      var $gif = $('<img>');
        $gif.attr('src', gif.images.fixed_height.url);
        $div.append($gif);
        $resultsDiv.append($div);
        number +=10;
  });
  }

// search button function
$searchBtn.on('click', function(event){
  event.preventDefault();
  $resultsDiv.empty();
  offset = 0;
  var options = {
    url: 'http://api.giphy.com/v1/gifs/search?q=' + $queryInput.val() + '&api_key=SAAu8RpcPU9qVHa6Wnp83mhFRq16r2dB&limit=10&offset='+number
  }
$.ajax(options).done(showResults)

});

$(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	 if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
    offset = 0;
	    // when scroll to bottom of the page
      var options = {
          url: 'http://api.giphy.com/v1/gifs/search?q=' + $queryInput.val() + '&api_key=SAAu8RpcPU9qVHa6Wnp83mhFRq16r2dB&limit=10&offset='+number
         }
       }
       $.ajax(options).done(showResults)
   });
