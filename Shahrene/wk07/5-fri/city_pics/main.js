


var cityMenu = ["NYC", "SF", "LA", "SYD", "ATX"]
  $(document).ready(function(){
     var select = $('<select>');
       $.each(cityMenu, function(index, key) {
  	     select.append( $('<option></option>').val(key).html(key) );
         });
        $('#city-type').append(select.html());
});

$("#city-type").change(function(){
    var imageFileName = $(this).val();
    $("body").css("background-image", "url(images/"+imageFileName+".jpg)");
});
