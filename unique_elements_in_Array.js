const assert = require('assert')
// uniq - Takes an array of numbers, and returns the unique numbers. Can you do it in O(N) time?


function uniq(arr) {
    let finalArray =[]
    let haveISeenThisBefore ={}

    for (let elem of arr) {
        if(!haveISeenThisBefore.hasOwnProperty(elem)) {
            haveISeenThisBefore[elem] = 1
            finalArray.push(elem)
        }
    }

    return finalArray
}




console.log(uniq([]))                              // []
console.log(uniq([1, 4, 2, 2, 3, 4, 8]))           // [1, 4, 2, 3, 8]


