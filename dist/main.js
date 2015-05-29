$(document).on('ready', start)

function start() {
	var $loading = $('#loading');
	var $likes = $('#likes');
	var $contact = $('#contact-button');
	var $email = $('#email');
	var $website = $('#website');
	var $name = $('#name');
	var $message = $('#message');
	var $login = $('#login');
	var $username = $('#username');
	var $pw = $('#password');
	var done = false;
	var likesCounter = 0;

	$loading.on('click', load);
	$likes.on('click', liked);
	$contact.on('click', contactCheck);
	$login.on('click', validLogin);
	$username.keyup(validLoginPush);
	$pw.keyup(validLoginPush);

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
		console.log('??')
		if ($name.val() === "") {
			$('#name-error').html("*Please insert a valid name");
			console.log('why');
		} else {
			$('#name-error').html("");
		}
		var atSym = false;
		var eDotCom = false;
		var e;
		if ('@' in $email.val().split()) {
			atSym = true;
		}
		if (atSym === false) {
			$('#email-error').html("*Please insert a valid email address");
		} else {
			$('#email-error').html("");
		}
		if ($email.val().substring($email.val().length-4) === ".com") {
			eDotCom = true;
		}
		if (eDotCom === false) {
			$('#email-error').html("*Please insert a valid email address");
		} else {
			$('#email-error').html("");
		}
		var httpPresent = false;
		var dotCom = false;

		if ($website.val().substring($website.val().length-4) === ".com") {
			dotCom = true;
		}
		if (dotCom === false && httpPresent === false) {
			$('#website-error').html("*Please insert a valid website");
		} else {
			$('#website-error').html("");
		}
		if ($website.val().substring(0, 7) === "http://") {
			httpPresent = true;
		}
		// if (httpPresent === false) {
		// 	$('#website-error').html("*Please insert a valid website");
		// } else {
		// 	$('#website-error').html("");
		// }
	}
	function revert() {
		$login.html("Sign In");
	}
	function validLogin() {
		if($username.val() === "aaron@theironyard.com" && $pw.val() === "password123") {
			$login.html("Login Successful");
			// setTimeout(1000, revert());
			$('#username-error').html("");
		} else if ($username.val() === "admin@google.com" && $pw.val() === "pandas") {
			$login.html("Login Successful");
			// setTimeout(1000, revert());
			$('#username-error').html("");
		} else if ($username.val() === "ndfelps@gmail.com" && $pw.val() === "honeycrisp") {
			$login.html("Login Successful");
			// setTimeout(1000, revert());
			$('#username-error').html("");
		} else {
			$('#username-error').html("*Your username or password is incorrect")
		}
	}

	function validLoginPush() {
		console.log("???");
		if (event.keyCode === 13) {
			if($username.val() === "aaron@theironyard.com" && $pw.val() === "password123") {
				$login.html("Login Successful");
				// setTimeout(1000, revert());
				$('#username-error').html("");
			} else if ($username.val() === "admin@google.com" && $pw.val() === "pandas") {
				$login.html("Login Successful");
				// setTimeout(1000, revert());
				$('#username-error').html("");
			} else if ($username.val() === "ndfelps@gmail.com" && $pw.val() === "honeycrisp") {
				$login.html("Login Successful");
				// setTimeout(1000, revert());
				$('#username-error').html("");
			} else {
				$('#username-error').html("*Your username or password is incorrect")
			}
		}
	}
}