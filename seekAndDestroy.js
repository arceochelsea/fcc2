// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

function destroyer(arr) {
    let allArgs = Array.from(arguments);
    //console.log(allArgs); //all the arguments
    let firstArr = allArgs[0]
    //console.log(firstArr); //[3,5,1,2,2]
    let args = allArgs.splice(1);
    //console.log(args); //this is just the arguments to remove: 2, 3, 5
    for (let i = 0; i < firstArr.length; i++) { 
        for (let j = 0; j < args.length; j++) {
            if (firstArr[i] === args[j]) {
            delete firstArr[i];
        }
        }
    }
    firstArr = firstArr.filter(Boolean);
    //console.log(firstArr);
    return firstArr;
  }
  console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
    //should return [1]



//did not work    
    // function destroyer(arr) {
    //     let survivorArr = [];
    //     let array = Array.prototype.slice.call(arr);
    //     let argumentOne = arr[1];
    //     let argumentTwo = arr[2];
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i] !== argumentOne && array[i] !== argumentTwo) {
    //             survivorArr.push(array[i]);
    //         }
    //     }
    //     return survivorArr;
    //   }
    
    // destroyer([1, 2, 3, 1, 2, 3], 2, 3);