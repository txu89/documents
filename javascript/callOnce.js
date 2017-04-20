function callOnce(toBeCalled) {
  var called = false;
  if (called === true){
    return;
  }
else {
  called = true;
  }
   
  return toBeCalled();
}

function greet() {
  console.log("Hey!");
  }

var callOnceGreet = callOnce(greet);
callOnceGreet;
callOnceGreet;
callOnceGreet;
callOnceGreet;
