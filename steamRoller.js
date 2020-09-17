function steamrollArray(arr) {
    while (arr.some(Array.isArray)) {
    arr=[].concat(...arr)
    }
        return arr;
      }
      
console.log(steamrollArray([1, [2], [3, [[4]]]]));
    
    //Flatten a nested array. You must account for varying levels of nesting.
    
    //arr.some will check if it is true or false
    //remove from nested arrays
    //concat or join together