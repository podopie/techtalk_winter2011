var h;
var h_height;

$(document).ready(function() {
	init();
	$(window).scroll(function() {
		var h = $(this).scrollTop();
		
// ******************* 
// Roadmap
// *******************

		if (h > 800) { $('.go-away').fadeTo(1000, 0); }
		if (h > 950) { $('.go-away-2').fadeTo(1100, 0); }
		if (h > 1050) { $('.go-away-3').fadeTo(1200, 0); }
		if (h > 1060) { $('.go-away-4').fadeTo(1300, 0); }
		console.log(h);
		if (h > 1220) { $('.roadmap').animate({ width: '950' }, 1500); }
		if (h > 5239) {
				$(".six .frame-container").animate({
			    	fontSize: ".9em"
			  	}, 'slow' ).delay(500);
				$(".six .frame-container h1").animate({
					lineHeight: "1.23em"
				}, 'slow' );
			}
		});

	});

// width should be percentage of height? multiplied by max width

function init() {
	$('.go-away').fadeTo('slow', 1);
	$('.go-away-2').fadeTo('slow', 1);
	$('.go-away-3').fadeTo('slow', 1);
	$('.go-away-4').fadeTo('slow', 1);
	$('.roadmap').width(0);	
	$('.frame-two-part-two').hide();
};