function smallestCommons(arr) {
    const min = arr[0];
    const max = arr[1];

    let foundLcm = false;

    for (let i = max+1; !foundLcm && i < 100; i++) {
        let evenlyDivisable = true;

        for (let j = min; j <= max && evenlyDivisable; j++) {
            if (
                !(i % j === 0)
            ) {
                evenlyDivisable = false
            }
        }
        if (evenlyDivisable) {
            console.log('LCM: ', i);
            foundLcm = true;
            return i
        }    
    }
    return arr;
  }
  
  
  console.log(smallestCommons([1,5]));
  
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

//NOT WORKING ON FCC