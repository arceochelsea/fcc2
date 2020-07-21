// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(arr) {
    let args = [...arguments]
    //this converts all the arguments into the a real array
    let newArr = args.flat();
    //flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specificed turn [[1, 3, 2], [5, 2, 1, 4], [2, 1]] into [1, 3, 2, 5, 2, 1, 4, 2, 1]
    let unique = [...new Set(newArr)];
    //the Set object lets you store unique values of any type, whether it be primitive values or object references
    //use the spread operator to transform a set into an Array
    return unique;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  