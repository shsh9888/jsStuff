
// debounce - Implement the debounce function.

function debounce(func, ms) {
    let timer =0
    return function () {
        let args = Array.from(arguments)
        clearTimeout(timer)
        timer = setTimeout(function() {
            func.apply(this, args)

        }, ms)
    }

}



let a = (c) => console.log('foo',c)
let b = debounce(a, 100)
b(1)
b(2)
b(3) // only this call should invoke a()



