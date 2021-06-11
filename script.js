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
