## GIPHY LOCO

# Go Gif Crazy!

The purpose of this app is to search for gifs from the Giphy database. When the search button is clicked the gifs display on screen without the page reloading. When scrolling down the page a further 10 new images should appear based on the users keyword input.


# Tech Used

The app accesses the Giphy API using an API key, freely obtained from the [GIPHY for Developers](https://developers.giphy.com/docs/) site. A [jQuery library](https://code.jquery.com/) is being accessed via a script tag on the index.html. The ajax() method is used to perform an asynchronous HTTP request - this allows part of a the page to be updated and prevents the whole page being re-submitted when the search button is clicked.
The $(window).on("scroll") function is used to facilitate loading the new gifs as you scroll down. The scroll event makes additional requests to the API every time the position of the window is moved to the top.
