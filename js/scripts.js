$(document).ready(function(){
	
	// Typed text
  	$('.typed-text').typed({
		strings: ["Hi, ^600 my name is Kathleen."],
		typeSpeed: 60,
		// To add a second sentence, activate the two lines below and add a second string to the array above.
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
  }
  	
  onWindowResize();
  
	$(window).resize(onWindowResize);

	// Sticky header
	$('#header').sticky({topSpacing:0});

	// Instafeed
    var userFeed = new Instafeed({
        get: 'user',
        userId: 3804157,
        accessToken: '3804157.467ede5.7b0fdab4cd4e48ee805799b23ab855b3',
        resolution: 'low_resolution',
        limit: 12,
        template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
    });
    userFeed.run();

    //responsive header
    function onWindowResize() {
      var windowWidth = $(window).innerWidth();
      if (windowWidth <= 480) {
        $('.hide-me').hide();
      } else {
        $('.hide-me').show();
      }
      if (windowWidth <= 395) {
        $('nav').hide();
      }
      else {
        $('nav').show();
      }
      setHeight();
    }

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
