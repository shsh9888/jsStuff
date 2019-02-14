// factorial - Returns a number that is the factorial of the given number.
const assert = require('assert')

// filter - Implement the filter function.


function filter(arr, func) {

    let finalArr = []

    for(let elem of arr) {
        if (func.call(this, elem))
            finalArr.push(elem)
    }
    return finalArr;
}

console.log(filter([1, 2, 3, 4], n => n < 3))    // [1, 2]


