//Probem: User goes to dead end when they click on images
//Soultion: Create an overlay with the a large image. (a lightbox)

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);
  // an image

  // caption
//1. Catputre the click event on a link to a link to an image
$("#imageGallery a").click(function( event ){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //1.2 update overlay with the image linked in the link
  $image.attr("src", imageLocation);


  $overlay.show();
});
  
  //1.3 added the alt caption
var captionText = $(this).children('img').attr('alt');
$caption.text(captionText);

//3. WHhen overlay is clicked, hide.
  //3.1 Hide the overay

$overlay.click(function() {
  $overlay.hide();

});


