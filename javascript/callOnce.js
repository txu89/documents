/**
 * Closure
 *
 * @param  {function} callback, fn
 * @return {function}
 */
function callOnce(callback) {

    var isCalled = 0;

    return function() {

        if (!isCalled) {
            callback();
        }
        isCalled = 1;
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
