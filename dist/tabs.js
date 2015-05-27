$(document).on('ready', start) 

function start() {
	$('nav a').on('click', tabOver);
	var $targetSec = $(window.location.hash);
	if (!$targetSec.length) {
		$targetSec = $('main section').eq(0);
	}
	$targetSec.show();

	$('nav = a[href="#' + $targetSec.attr('id')+'"]').addClass('active');

	function tabOver(e) {
		var $target = $(e.target);
		var targetName = $target.attr('href');
		$('main section').hide();
		$(targetName).show();
		$('nav a').removeClass('active');
		$target.addClass('active');
	}
}