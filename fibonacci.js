// factorial - Returns a number that is the factorial of the given number.
const assert = require('assert')


// fib - Returns the nth Fibonacci number.


// function fib(num) {
//   if(num === 0) {
//     return 0
//   }

//   if(num === 1) {
//     return 1
//   }

//   return fib(num-1) + fib(num-2)

// }


//trying with tail recursion optimization

function fib(num) {
    if(num === 0) {
        return 0
    }

    if(num === 1) {
        return 1
    }

    return fibtro(0,1, num-1)

}


function fibtro(a, b, num) {
    if (num ===0) {
        return b
    }


    return fibtro(b, a+b, num-1)


}
assert(fib(0) === 0)
assert(fib(1)=== 1)
assert(fib(2)=== 1)
assert(fib(3)=== 2)

assert(fib(10) === 55)
assert (fib(20) === 6765)