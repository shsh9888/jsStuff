// assignDeep - Like Object.assign, but merges objects deeply. For the sake of simplicity, you can assume that objects can contain only numbers and other objects (and not arrays, functions, etc.).
// function len(o){
//   return o.length

// }

// function assignDeep(obj1, obj2) {
//   let final = {}
//   let obj1_keys = Object.keys(obj1)
//   let obj2_keys = Object.keys(obj2)

//   if(len(obj1_keys) === 0)
//     return obj2

//   if(len(obj2_keys) === 0)
//     return obj1

//   for(let key of obj1_keys) {

//     if(typeof obj1[key] === "object" && typeof obj2[key] === "object") {
//       final[key] = assignDeep(obj1[key],obj2[key])
//     }else if(obj2.hasOwnProperty(key)) {
//       final[key] = obj2[key]
//     }else {
//       final[key] = obj1[key]
//     }

//   }

//   for(let key of obj2_keys) {
//       if(!final.hasOwnProperty(key)) {
//         final[key] = obj2[key]
//       }
//   }


//   return final;

// }

//better implementation

function isObject(obj){
    return (typeof obj === "object" && obj !== null)

}

function assignDeep(target, ...moreObjects) {
    for (let obj of moreObjects){
        for(let key of Object.keys(obj)){
            if(isObject(obj[key])){
                if(!isObject(target[key])) {
                    target[key] = {}
                }
                assignDeep(target[key], obj[key])
            } else {
                target[key] = obj[key]
            }

        }

    }
    return target
}

console.log(assignDeep({ a: 1 }, {}))              // { a: 1 }
console.log(assignDeep({ a: 1 }, { a: 2 }))        // { a: 2 }
console.log(assignDeep({ a: 1 }, { a: { b: 2 } })) // { a: { b: 2 } }
console.log(assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }))
// { a: { b: { c: 1, d: 2 }}, e: 3 }