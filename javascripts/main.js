
$(function() {
	window.sr = ScrollReveal({reset: true},{scale: 0.1});
	sr.reveal('.link-anim',{ duration: 500 });
	sr.reveal('#header_wrap .inner',{ duration: 1000 });
	sr.reveal('#section-one .inner-section',{ duration: 1300 });
	sr.reveal('#section-two .inner-section p',{ duration: 1300 });
	sr.reveal('.title',{ duration: 1300 });
	sr.reveal('#section-three .inner-section p',{ duration: 1300 });
	sr.reveal('#section-four .inner-section',{ duration: 1300 });
    sr.reveal('#project_tagline',{ duration: 1300 });
        sr.reveal('#project_title',{ duration: 1300 });
    sr.reveal('#cast-logo',{ duration: 1300 });
    sr.reveal('.header-hr',{ duration: 1500 });
});

$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

/*--Scroll Arrow---*/
$(function(){

	var $nav = $('.arrow-up');
	var $win = $(window);
    var winH = $win.height();   // Get the window height.
//Initial Scroll
console.log(winH);
console.log($win);
if (winH < $(window).scrollTop()){

	$nav.fadeIn('500',function(){
		$nav.addClass('transitionfour');
	});
}
else{
	$nav.removeClass('transitionfour').fadeOut(500);
}

$win.on("scroll", function () {
	if ($(this).scrollTop() > winH ) {
		$nav.fadeIn('500',function(){
		$nav.addClass('transitionfour');
	});
	} else {
		$nav.removeClass('transitionfour').fadeOut(500);
	}
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
   });
});

