const assert = require('assert')
// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.


function missing(arr){
    let len = arr.length > Math.max(...arr) ? arr.length : Math.max(...arr);
    let expectedSum = (len * (len+1))/2
    let givenSum = arr.reduce(function(a,b){
        return a+b
    },0)
    console.log((expectedSum-givenSum))
    return (expectedSum-givenSum === 0)? undefined : (expectedSum-givenSum)
}


assert(missing([]) === undefined)            // undefined
assert(missing([1, 4, 3])===2)                  // 2
assert(missing([2, 3, 4]) ===1)                  // 1
assert(missing([5, 1, 4, 2]) === 3)               // 3
assert(missing([1, 2, 3, 4]) === undefined)               // undefined



