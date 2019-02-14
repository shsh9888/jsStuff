const assert = require('assert')
// reverse - Reverses the given string (yes, using the built in reverse function is cheating).


function reverse(str) {
    let len = str.length
    let newStr = ""
    for (let i=0; i< len; i++) {
        newStr += str[len-i-1]
    }
    return newStr
}




assert(reverse('') === '')                         // ''
assert(reverse('abcdef') === 'fedcba')


