/**
 * Closure
 *
 * @param  {function} callback, fn
 * @return {function}
 */
function callOnce(callback) {
    // isCalled, should-, has-, shouldDisplay, shouldValidate
    // hasErrors, hasBeenCalled, isDisabled
    var isCalled = false;

    return function() {
        /**
         * if (!isCalled)
         * could be a zero, could be string !0 eval
         */
        if (isCalled === false) {
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

// What to name the returned function
// Style: naming, visual asthetics
// clear and consistent, work with a lot of people looks the same

console.log(eval(!0));
console.log(eval(!''));

// Tell me the difference between statically-typed and dynamically-languages.
// Try to line width to less than 80. 72 is extremists.
