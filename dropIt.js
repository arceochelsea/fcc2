// Intermediate Algorithm Scripting: Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {

    while (!func(arr[0])) {
        arr.splice(0,1);
    }
    return arr;
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));