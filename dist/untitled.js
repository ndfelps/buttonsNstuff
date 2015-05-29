// 1 - undefined

var myvar = 'my value'; 

(function() { 
	var myvar;
    console.log(myvar);
    myvar = 'local value'; 
})();

// 2 - 'Switch flag from false to true'

var flag = true; 

function test() {
    if(flag) {
        flag = false;
        console.log('Switch flag from true to false');
    }
    else {
        flag = true;
        console.log('Switch flag from false to true');
    }
}
test();

// 3 - undefined

var message = 'Hello world'; 

function saySomething() {
    console.log(message);
    message = 'Foo bar';
}
saySomething();

// 4 - Hello World

//5 - undefined, 2

function test() {
	var a = 1;
    console.log(a);
    console.log(foo());

    function foo() {
        return 2;
    }
}

test();

// 6 - undefined, aloha

(function() {
	var bar = 1;
    console.log(bar);
    foo();

    function foo() {
        console.log('aloha');
    }

    baz = 2;
})();

// 7 - I can run

var run = false;

function fancy(arg1, arg2) {
    if(run) {
        console.log('I can run');
    }
    else {
        console.log('I can\'t run');
    }

    var run = function() {
        console.log('Will I run?');
    }
}
fancy();

//Rohit needs a program to help him to understand how to get on with people. Some other characters on Improbable Island can help you by providing their own opinions on what should go in such a program, including Maiko, The Watcher, Corporal Punishment, and a few others. Have a think about it, put whatever you come up with into a Distraction, and send it to Rohit whenever you're ready.

// Your Distraction can be as long or as short as seems best to you. Remember, Rohit has no idea at all what being human entails.

// Being a Robot, Rohit is at once both incredibly intelligent and extraordinarily stupid. He will parse and understand anything you send him - a letter, a poem, a set of instructions, the story of your first kiss or your first fistfight, an obscene limerick, whatever - but once he's compiled your Distraction into machine code and ingested it, he won't be able to change it afterwards.

// What you send, you send. You only get one shot at this. Good luck.


