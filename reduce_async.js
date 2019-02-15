// // playing with the async code4


// async function add(a,b) {
//   await a+b
// }


// console.log(add(1,2).then(console.log))
// // console.log(await add(1,2))



let reduceAsync = async (array, fn, value) => {
    for (let a of array) {
        value = fn(value, await a())
    }
    return value
}


let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))


async function test () {
    console.log(await reduceAsync([a, b, c], (acc, value) => [...acc, value], []))
    console.log(reduceAsync([a, b, c], (acc, value) => [...acc, value], []))

    // ['a', 'b', 'c']
    await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d'])
    // ['d', 'a', 'c', 'b']
}

test()