## map
map() is a method that creates a new array that runs a function on each element of the array it is called on. The original array is not mutated.

### Code Examples
1. 
```javascript
incrementByOne = function(element) {
  return element + 1;
}

myArray = [1,2,3,4];

myArray.map(incrementByOne); // returns [2,3,4,5]
```

2. 
```javascript
myArray = [1,2,3,4];

myArray.map(element => element + 1);
```

3. 
```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
```
