## map
map() is a method that creates a new array that runs a function on each element of the array it is called on.

### Code Examples
1. 
```javascript
incrementByOne = function (element) {
  return element + 1;
}

myArray = [1,2,3,4];

myArray.map(incrementByOne); // returns [2,3,4,5]
```

