///prevent spoilerphobes from seeing spoilers
//hide suppoliers with jquery to use interaction

//plan: Hide spoiler
$(".spoiler span").hide();
// add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
// when button pressed
$("button").click(function(){
	//show spoiler
	$(this).prev().show();
	$(".spoiler span").show();
	//3.2 get rid of button
	$(this).remove();
});
  


