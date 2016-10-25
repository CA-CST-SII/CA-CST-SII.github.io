
$(function() {
window.sr = ScrollReveal({reset: true},{scale: 0.1});
sr.reveal('.link-anim',{ duration: 500 });
sr.reveal('#header_wrap .inner',{ duration: 1000 });
sr.reveal('#section-one .inner-section',{ duration: 1300 });
sr.reveal('#section-two .inner-section p',{ duration: 1300 });
sr.reveal('#section-three .inner-section p',{ duration: 1300 });
sr.reveal('#section-four .inner-section',{ duration: 1300 });

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