import "./import/modules";


$(document).ready(function(){
	
	$('.open-button').click(function(){
		$(this).toggleClass('open');
	});

 
	$(".open-button").click(function(e){
			e.preventDefault();
			$(".mobile-menu").toggleClass('open');
	});

	$('.header-list__link').click(function(){
		$(".mobile-menu").removeClass('open');
		$('.open-button').removeClass('open');
	});
 
});
