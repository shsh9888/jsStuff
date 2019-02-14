// factorial - Returns a number that is the factorial of the given number.
const assert = require('assert')

// reduce - Implement the reduce function.

function reduce(arr, func, initialValue) {
    let prev = initialValue;
    for (let elem of arr) {
        prev = func.call(this, prev, elem)
    }

    return prev
}



console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)) // 10
