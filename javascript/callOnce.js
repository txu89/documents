/**
 * Closure
 *
 * @param  {function} callback, fn
 * @return {function}
 */
function callOnce(callback) {

    var isCalled = false;

    return function() {
        if (isCalled == false) {
            callback();
        }
        isCalled = true;
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
