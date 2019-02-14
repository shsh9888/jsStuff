// factorial - Returns a number that is the factorial of the given number.
const assert = require('assert')


function factorial(num) {
    if(num ===1) {
        return 1
    }

    return num * factorial(num-1)

}

assert(factorial(1) ===1)                        // 1
assert(factorial(4) === 24)                        // 1
assert(factorial(6) === 720)