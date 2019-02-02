// arr.forEach(function (elem, index) {
//     // console.log(elem, newArr)
//     newArr.add(...elem)
// })
//
// console.log(newArr)
//
// arr.map(item=> item)

let arr = [1,2,4,5,6, [1,2,3,4,5],[3,5,6]]

//recursively lo
function flattenArrRecursively(arr) {
    let final =[]

    arr.forEach(function (elem, index) {
            if(Array.isArray(elem)) {
                final.push(...flattenArrRecursively(elem))
            }else {
                final.push(elem)
            }

    });
    return final

}
//iterative solution

function flattenArIterativel(arr) {
    return arr.reduce((prev, elem, arr) =>prev.concat(elem),[])

}


// 3.
var result = [].concat.apply([], [[1],[2,3],[4]]);

console.log(flattenArrRecursively(arr))
console.log(flattenArIterativel(arr))