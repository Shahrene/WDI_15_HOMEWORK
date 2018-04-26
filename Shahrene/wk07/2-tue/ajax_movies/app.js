

var $queryInput = $('.query-input');
var $resultsDiv = $('.results');
var $searchBtn = $('.searchBtn');

var showResults = function(res) {
   res.Search.forEach(function(movie) {
    var $h2 = $('<h2>').addClass('title')
    var $a = $('<a>')
      .attr('target', '_blank')
      .attr('href', 'http://www.imdb.com/title/' + movie.imdbID)
      .text(movie.Title);

    $h2.append($a);

    $resultsDiv.append($h2);
  });
  }
$searchBtn.on('click', function (event){
  event.preventDefault();
  $resultsDiv.empty();
  var $searchForm = $('.search-form');
  var options = {
    url: 'http://omdbapi.com/?s=' + $queryInput.val() + '&apikey=2f6435d9'
  }
$.ajax(options).done(showResults)

});




//
// var searchForm = document.querySelector('.search-form');
// var queryInput = document.querySelector('.query-input');
// var resultDiv = document.querySelector('.results');
//
// searchForm.addEventListener('submit', function(event) {
//   event.preventDefault();
//   console.log(queryInput.value);
//
//   var options = {
//     url: 'http://omdbapi.com/?s=' + queryInput.value + '&apikey=2f6435d9'
//   }
//   // res if call back signature
//   var showResults = function(res) {
//     res.Search.forEach(function(movie) {
//       //append it back to the dom
//       var newElem = document.createElement('p')
//       newElem.textContent = 'movie.Title'
//       //
//       resultDiv.appendChild(newElem);
//     });
//   }
//
//   $.ajax(options).done(showResults)
//
// })
