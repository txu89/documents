## .bind()
Creates a function that sets *this* to the referenced argument

### Examples 
1. 
```javascript
var foo = {
    x: 3
}

var bar = function(){
    console.log(this.x);
}

bar(); // undefined

var boundFunc = bar.bind(foo);

boundFunc(); // 3
```

2. 
