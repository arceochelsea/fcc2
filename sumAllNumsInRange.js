// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    let totalNum = 0;
    let sortArray = arr.sort(function (a,b){
        return a-b;
    })
    let lowestNum = arr[0];
    let largestNum = arr[1];

    for (let i = lowestNum; i <= largestNum; i++) {
        totalNum = totalNum + i;
        //console.log(totalNum);
    }
    return totalNum;
  }
  
  console.log(sumAll([1, 4]));