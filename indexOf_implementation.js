const assert = require('assert')


// indexOf - Implement the indexOf function for arrays.


function indexOf(arr, number) {
    let index =-1

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === number)
            return i
    }

    return index

}

assert(indexOf([1, 2, 3], 1)===0)               // 0
assert(indexOf([1, 2, 3], 4) === -1)
assert(indexOf([1, 2, 3], 2) === 1)
assert(indexOf([], 1) === -1)
