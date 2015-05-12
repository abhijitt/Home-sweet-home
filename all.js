function angle() {
	var w = $(window).width();
	var h = $(".shape").height();
	$('.top').css('border-right-width', w - 3);
	$('.top').css('border-top-width', h - 3 );
}

$(document).ready(function(){

	$(window).bind("load", function(){
		angle();
	});

	$(window).resize(function(){
		angle();
	});

}); 
