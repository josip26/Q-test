/* smooth scroll script */

	$('body').scrollspy({target: ".navbar", offset: 50});   
	$("#arrow a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		} 
	});


/* hamburger activate */
	var $hamburger = $(".hamburger");
	var $mainnav = $(".main-nav");
	$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
		$mainnav.toggleClass("mobile-navigation");
	});

/* Masonry and filtering */

