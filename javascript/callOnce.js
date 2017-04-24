/**
 * Closure
 *
 * @param  {function} toBeCalled
 * @return {function}
 */
function callOnce(toBeCalled) {
    var called = false;
    
    return function() {
        if (called === false) {
            toBeCalled();
        }
        called = true;
    }
}

function greet() {
    console.log("Hey!");
}

var callOnceGreet = callOnce(greet);
callOnceGreet();
callOnceGreet();
callOnceGreet();
callOnceGreet();
