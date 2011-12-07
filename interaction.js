$(document).ready();
y = 0;
$('#new-javascript').animate({ opacity: 0 }, 500 );

$(".frame-two-part-one").click(function() {
	$(this).slideUp();
	$('.frame-two-part-two').slideDown();
});

$(".frame-two-part-two").click(function() {
	$(this).slideUp();
	$('.frame-two-part-one').slideDown();
});

$(".three #fader").click(function() {
	$(".three #fader").fadeTo(0, 0);
	$(".three").css("font-family", "helvetica");
	$(".three #fader").fadeTo(500, 1);
});
	
$('#new-javascript').click(function() {
	if (y === 0) {
		$('#old-javascript').animate({ opacity: 0 }, 500 );	
		$('#new-javascript').animate({ opacity: 1 }, 500 );
		y = 1;
	}
	else {
		$('#new-javascript').animate({ opacity: 0 }, 500 );	
		$('#old-javascript').animate({ opacity: 1 }, 500 );
		y = 0;
	};
});