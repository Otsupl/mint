function aos()
{
	var scrolled = $(window).scrollTop();
  	var vh = $(window).height();
	$('.aos').each(function(){
		var elOffset = $(this).offset().top;
		if(scrolled + vh > elOffset + 0.6*$(this).height() || scrolled + vh > elOffset + 0.15*vh)
			$(this).addClass('aos-animate');
		else
			$(this).removeClass('aos-animate');
	});
}
$(document).ready(function(){
	aos();
});
$(window).scroll(function(){
	aos();
});