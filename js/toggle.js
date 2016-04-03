function toggleCard() {
	parent = $(this).parent();
    alert("Hello");
	if ( parent.hasClass('hoverable')) {
		parent.removeClass('hoverable');
		parent.addClass('z-depth-5');
		parent.addClass('light-green accent-2');
	}
	else {
		parent.removeClass('z-depth-5');
		parent.removeClass('light-green accent-2');
		parent.addClass('hoverable');
	}
}

$(document).ready(function() {
	$('[id^=image-').click(toggleCard);
	$('[id*=audio-').prop("volume", 0.5);
});
