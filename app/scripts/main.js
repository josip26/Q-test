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

$('.portfolio-menu').on( 'click', 'button', function() {
  		var filterValue = $(this).attr('data-filter');
  		$grid.isotope({ filter: filterValue });
		});
		/* active button */
		$('.portfolio-menu').each( function( i, buttonGroup ) {
  		var $buttonGroup = $( buttonGroup );
  		$buttonGroup.on( 'click', 'button', function() {
    		$buttonGroup.find('.is-checked').removeClass('is-checked');
    		$( this ).addClass('is-checked');
  		});
		});	
		var $grid =	$('.grid').isotope({
  		itemSelector: '.grid-item',
  		percentPosition: true,
  		masonry: {
    	columnWidth: '.grid-sizer'
  	}
		});