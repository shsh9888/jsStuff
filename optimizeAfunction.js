// could be potentially more than 3 keys in the object above
items = [
    {color: 'red', type: 'tv', age: 18},
    {color: 'silver', type: 'phone', age: 20}

]

excludes = [
    {k: 'color', v: 'silver'},
    {k: 'type', v: 'tv1'},
]

// function excludeItems(items, excludes) {
//     excludes.forEach(pair => {
//         items = items.filter(item => {
//             //Main condition
//             //1. check if the key is there if its not there then dont exclued
//             //2. and if not equal then add it back to the items may be next one will exclude them (Live another day to fight)
//             if (item[pair.k] && item[pair.k]!== pair.v) {
//                 return item
//             }
//         });
//         console.log(items)
//     });
//     return items;
// }


function excludeItems(items, excludes) {
    return items.filter((item) => {
        return excludes.filter((exclusion) => {
            return item[exclusion.k] === exclusion.v
        });
})
}
console.log(excludeItems(items, excludes))

// 1. Describe what this function is doing...
// 2. What is wrong with that function ?
// // 3. How would you optimize it ?
//
//
// arr = [1, 2, 2, 4, 5, 6]
//
// console.log(arr.filter(item => {
//     if (item < 5) {
//         return item
//     }
// }))