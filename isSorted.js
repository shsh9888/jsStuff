// factorial - Returns a number that is the factorial of the given number.
const assert = require('assert')

// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

function isSorted(arr) {

    for (let i=1; i<arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            return false

        }

    }

    return true

}





assert(isSorted([]))                        // true
assert(isSorted([-Infinity, -5, 0, 3, 9]))  // true
assert(!isSorted([3, 9, -3, 10]))


//sorting is done in js by default consideering they are string
// so sorting requires having the functiom
// arr1 === arr2 cant be done




function numberSort(arr) {
    arr.sort(function(a,b) {
        return a-b;

    })
    return arr;

}

console.log(numberSort([]))
console.log(numberSort([4,3,5,2,5,1,2]))
console.log(numberSort([-Infinity, -5, 0, 3, 9]))
console.log(numberSort([3, 9, -3, 10]))
console.log(numberSort([-2,-20,-20,-2,-5]))
