## .bind()
Creates a function that sets *this* to the referenced argument


### Examples
1.
```javascript
var foo = {
    x: 3
}

var bar = function() {
    console.log(this.x);
}

bar(); // undefined

var boundFunc = bar.bind(foo);

boundFunc(); // 3
```

2.
```javascript
function talk() {
    console.log(this.talk);
}
var gandalf = {
    talk: 'All we have to decide is what to do with the time that is given to us.'
}
var boundTalk = talk.bind(gandalf);
boundTalk();
```

3.
```javascript
this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() {
    return this.x;
  }
}

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```
