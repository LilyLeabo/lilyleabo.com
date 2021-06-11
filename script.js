$('.popit__circle').on('click', function() {
	$(this).toggleClass('active');
});

//pop sound
$(document).ready(function() {
	var obj = document.createElement('audio');
	obj.src = 'click.mp3';
	obj.volume = 1;
	obj.autoPlay = false;
	obj.preLoad = true;

	$('.popit__circle').click(function() {
		obj.play();
	});
});

$(document).ready(function() {
	// Change background image of a div by clicking on the button
	$('.button1').click(function() {
		var imageUrl = 'purple.jpg';
		$('.background').css('background-image', 'url(' + imageUrl + ')');
	});
	$('.button2').click(function() {
		var imageUrl = 'bunny.jpg';
		$('.background').css('background-image', 'url(' + imageUrl + ')');
	});
	$('.button3').click(function() {
		var imageUrl = 'space.jpg';
		$('.background').css('background-image', 'url(' + imageUrl + ')');
	});
});
