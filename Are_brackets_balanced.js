const assert = require('assert')

// isBalanced2 - Like the isBalanced function you implemented above, but supports 3 types of braces: curly {}, square [], and round (). A string with interleaving braces should return false.


function isBalanced(str) {
    let open_close = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    let stack =[]
    for (let s of str) {
        // console.log(stack, s,Object.values(open_close))

        if( Object.values(open_close).indexOf(s) !== -1) {
            stack.push(s)
        }else if(Object.keys(open_close).indexOf(s) !== -1) {
            if(stack.length !== 0 && stack.pop()  !== open_close[s]) {
                return false
            }

        }
    }

    if(stack.length !== 0) {
        return false
    }
    return true

}

// console.log(isBalanced('(foo { bar (baz) [boo] })')) // true
// console.log(isBalanced('foo { bar { baz }'))         // false
// console.log(isBalanced('foo { (bar [baz] } )'))      // false

assert(isBalanced('(foo { bar (baz) [boo] })')) // true
assert(!isBalanced('foo { bar { baz }'))         // false
assert(!isBalanced('foo { (bar [baz] } )'))      // false