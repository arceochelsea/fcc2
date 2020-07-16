// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    var newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        newArr.push(arr1[i])
        console.log(newArr)
      }
    }
    for (let j = 0; j < arr2.length; j++) {
      if (!arr1.includes(arr2[j])) {
        newArr.push(arr2[j])
        console.log(newArr)
      }
    }
    return newArr;
  }
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  
  //const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
  //const uniqueAges = ages.filter((x, i, a) => a.indexOf(x) == i)
  // console.log(uniqueAges)