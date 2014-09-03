$(document).ready(function(){
	
	// Typed text
  	$('.typed-text').typed({
		strings: ["Hello, ^600 my name is Kathleen."],
		typeSpeed: 60,
		// To add a second sentence, activate the two lines below.
		// backDelay: 4000,
		// loop: true,
  	});

  	// Parallax scrolling
  	$.stellar({
  		verticalScrolling: true,
  		scrollProperty: 'scroll',
  		positionProperty: 'position',
  	});

});

	// $(window).stellar();
	// $('#about').stellar;	