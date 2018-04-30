## GIPHY LOCO

# Go Gif Crazy!

The purpose of this app is to search for gifs from the Giphy database. When the search button is clicked the gifs display on screen without the page reloading. When scrolling down the page a further 10 new images should appear based on the users keyword input.


# Tech Used

The app accesses the Giphy API using an API key, freely obtained from the [GIPHY for Developers] (https://developers.giphy.com/docs/) site. A [jQuery library] (https://code.jquery.com/) is being accessed via a script tag on the index.html. The ajax() method is used to perform an asynchronous HTTP request - this is what prevents the whole page being re-submitted when the search button is clicked.
