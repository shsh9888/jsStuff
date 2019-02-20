//compare 2 objects
//1. All the primitive types should be equal
//2. functions check
//3, Date object check
//4. Type object check
//5. all the own properties check
//6. checking the prototype

function compareObjects(left, right) {
    //primitive and the same object check

    if(left === right ){
        return true
    }

    //checkiing for dates
    if(left instanceof Date && right instanceof Date) {
        return left.getTime() === right.getTime()
    }

    //checking for function
    if(typeof left === "function" && typeof right === "function") {
        return (left.toString() === right.toString())
    }

    //After this point they have to be objects if not return false
    if(typeof left !== "object" && typeof right !== "object") {
        return false
    }

    //if they are objects get the properties
    let leftProps = Object.getOwnPropertyNames(left)
    let rightProps = Object.getOwnPropertyNames(right)

    if(leftProps.length !== rightProps.length) {
        return false
    }

    for(let prop of leftProps) {
        if(!compareObjects(left[prop], right[prop]))
            return false
    }

    //if they are objects get the properties
    let leftProto = Object.getPrototypeOf(left)
    let rightProto = Object.getPrototypeOf(right)
    //checking for the prototypes
    return compareObjects(leftProto, rightProto)


}

let time  = new Date()
console.log(new Date().getTime())

let ob1 = {
    a:1,
    b:2,
    3:"asdas",
    now : time,
    get : function () {
        return 1
    }


}


let ob2 = {
    b:2,
    a:1,
    3:"asdas",
    get : function () {
        return 1
    },
    now : time,

}


console.log(compareObjects(ob1,ob2))
console.log(new Date().getTime())
