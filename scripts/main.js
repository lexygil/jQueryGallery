$(function() {
   console.log('ready');

   // listen for a click on thumbnail image
   $(".js-thumbnails li").on("click", function(){
   	const image=$(this).find("img");
   	const imageSrc = image.data("main");

   	// update large main image with new source
   	$("#main").attr("src", imageSrc);
// adding the .selected class to thumbnails selected
   	$(".selected").removeClass("selected");
   	$(this).addClass("selected");


   });



});