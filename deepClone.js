// Back to deep cloning
//1. All the primitive types should be added
//2. functions check
//3, Date object check
//4. Array
const assert = require('assert')

function clone(obj) {


    let finalObj = {}
    //Array check
    finalObj = Array.isArray(obj) ? [] : {}

    //Date check
    // if (obj instanceof Date) return new Date(obj.getTime())

    if (obj.constructor == Date || obj.constructor == RegExp || obj.constructor == String || obj.constructor == Number || obj.constructor == Boolean) {
        return new obj.constructor(obj);
    }
    for (let prop in obj) {
        if (isObject(obj[prop])) {
            finalObj[prop] = clone(obj[prop])
        }
        else if (typeof obj[prop] === "function") {
            finalObj[prop] = obj[prop].bind(finalObj)
        }
        else
        {
            finalObj[prop] = obj[prop]
        }

    }

    return finalObj


}

function isObject(item) {
    if (item !== null && typeof item === "object") return true

}


let obj1 = {
    name: "Shravan",
    age: 26,

    getAge: function () {
        return this.age
    },
    address: {
        city: 'Boulder',
        state: "Colorado",
        name: {
            "add": "2747"

        }

    },

    classes: ['bigData', 'Algo']

}


let cloned = clone(obj1)
console.log(cloned)
// assert(cloned.name !== obj1.name, "name equality failed")
// assert(cloned.age !== obj1.age, "age equality failed")
assert(cloned.address !== obj1.address, "object equlity failed")
assert(cloned.address.name !== obj1.address.name, "object equlity failed")
assert(cloned.getAge !== obj1.getAge, "function equlity failed")


assert(cloned.classes !== obj1.classes, "array equlity failed")