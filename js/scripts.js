$(document).ready(function(){
	
	// Typed text
  	$('.typed-text').typed({
		strings: ["Hello, ^600 my name is Kathleen."],
		typeSpeed: 60,
		// To add a second sentence, activate the two lines below.
		// backDelay: 4000,
		// loop: true,
  	});

  	// slow scrolling to section
	$('a[href*=#]').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	    && location.hostname == this.hostname) {
	      var $target = $(this.hash);
	      $target = $target.length && $target
	      || $('[name=' + this.hash.slice(1) +']');
	      if ($target.length) {
	        var targetOffset = $target.offset().top;
	        $('html,body')
	        .animate({scrollTop: targetOffset}, 1000);
	       return false;
	      }
	    }
	});

	//fully responsive cover section
	$("#cover-section").backstretch("/images/blurry.jpg");
	function setHeight() {
    	windowHeight = $(window).innerHeight();
   		$('#cover-section').css('min-height', windowHeight);
  		};
  	
  	setHeight();
  
	$(window).resize(function() {
    	setHeight();
  	});

	$('#header-wrapper').sticky({topSpacing:0});





	// Dynamic header based on scrolling
    // var header = $('.transparent-header-wrapper');
    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();

    //     if (scroll >= 315) {
    //         header.removeClass('transparent-header-wrapper').addClass('white-header-wrapper');
    //     } else {
    //         header.removeClass('white-header-wrapper').addClass('transparent-header-wrapper');
    //     }
    // });

	// Parallax scrolling
  	// $.stellar({
  	// 	verticalScrolling: true,
  	// 	scrollProperty: 'position',
  	// 	positionProperty: 'position',
  	// });

});
