$(document).ready(function(){

    // var apiCall = "http://www.omdbapi.com/?s=fart";
    var apiCall = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=82f2baa1b3e34727346da0edf2f4d73c&text=cat&format=json&nojsoncallback=1"

    $.ajax(apiCall, { type: 'get' }).done(function(data) {
      for (var i=0; i<data.photos.photo.length; i++) {
        var imageUrl = "http://farm" + data.photos.photo[i].farm + ".static.flickr.com/" + data.photos.photo[i].server + "/"+data.photos.photo[i].id + "_"+data.photos.photo[i].secret + ".jpg";

        console.log(imageUrl)
      }
    });

});
