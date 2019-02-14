const assert = require('assert')

function isPrime(n) {

    if (n < 2) return false

    let limit = Math.sqrt(n)

    for(let i=2; i<limit; i ++) {
        if(n%2 === 0) {
            return false
        }

    }
    return true

}

assert(!isPrime(0))                          // false
assert(!isPrime(1))                          // false
assert(isPrime(17))                         // true
assert(!isPrime(10000000000000))     //false