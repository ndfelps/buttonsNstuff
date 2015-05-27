$(document).on('ready', start)

function start() {
	var $loading = $('#loading');
	var $likes = $('#likes');
	var $contact = $('#contact-button');
	var $email = $('#email');
	var $website = $('#website');
	var $name = $('#name');
	var $message = $('#message');
	var done = false;
	var likesCounter = 0;

	$loading.on('click', load);
	$likes.on('click', liked);
	$contact.on('click', contactCheck);

	function load1() {
		$loading.html("Loading.");
	}
	function load2() {
		$loading.html("Loading..");
	}
	function load3() {
		$loading.html("Loading...");
	}
	function finished() {
		$loading.html("Done!");
		console.log('f');
	}
	function revert() {
		$loading.html("Click me!");
		console.log('r');
	}
	function stop() {
		clearInterval(loading);
		console.log('stop');
	}
	function change(e) {
		setTimeout(load1, 500);
		setTimeout(load2, 1000);
		setTimeout(load3, 1500);
	}

	function load(e) {
		$loading.html("Loading");
		setTimeout(load1, 500);
		setTimeout(load2, 1000);
		setTimeout(load3, 1499);
		// var loader = setInterval(change, 1500)
		// setTimeout(stop, 3999);
		setTimeout(finished, 4000);		
		setTimeout(revert, 5000);
		console.log("???");
	}
	function liked(e) {
		likesCounter++;
		if(likesCounter === 1) {
			$likes.html(likesCounter+" Like")
		} else {
			$likes.html(likesCounter+" Likes")
		}
	}
	function contactCheck(e) {

	}
}