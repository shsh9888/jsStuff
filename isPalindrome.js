const assert = require('assert')

// isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).

String.prototype.replaceAll = function(key,value) {
    let str = this;
    str =str.split(key).join(value)
    return str
}

function isPalindrome(str) {
    str = str.replaceAll(' ', '')
    console.log(str)
    let len = str.length

    for(let i=0; i<(len/2); i++){
        if(str[i] !== str[len-i-1])
            return false
    }
    return true

}


assert(isPalindrome(''))                                // true
assert(isPalindrome('abcdcba'))                         // true
assert(!isPalindrome('abcd'))                            // false
assert(isPalindrome('A man a plan a canal Panama'))     // true