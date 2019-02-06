//Its all about deep cloning now
var assert = require('assert')
/*
It is understood form these checks is that new array will have problems too while copying
function copyArray(arr) {
  let final = []
  final.push(...arr)
  return final
}

let arr1 =  [1,2,23, function () {} ,  {name:"shravan"}]
let copiedArray =copyArray(arr1);

assert(copiedArray[3] !== arr1[3], "array funciton failed")
assert(copiedArray[4] !== arr1[4], "object funciton failed")
*/

function clone(obj) {
    let final = Object.prototype.toString.call(obj) === "[object Object]" ? {} : (Object.prototype.toString.call(obj) === "[object Array]"?[] :{})
    for (let key of Object.keys(obj)) {
        let value = obj[key];
        if(Object.prototype.toString.call(value) === "[object Object]" ||Object.prototype.toString.call(value) === "[object Array]") {
            final[key] = clone(value)
        }else if(Object.prototype.toString.call(value) === "[object Function]") {
            final[key] = value.bind(final);
        }else {
            final[key] = value;
        }


    }
    return final;

}


let obj1 = {
    name :"Shravan",
    age : 26,

    getAge : function() {return this.age},
    address : {
        city : 'Boulder',
        state : "Colorado",
        name : {
            "add" :"2747"

        }

    },

    classes : ['bigData', 'Algo']

}


let cloned = clone(obj1)
console.log(cloned)
// assert(cloned.name !== obj1.name, "name equality failed")
// assert(cloned.age !== obj1.age, "age equality failed")
assert(cloned.address !== obj1.address, "object equlity failed")
assert(cloned.address.name !== obj1.address.name, "object equlity failed")
assert(cloned.getAge !== obj1.getAge, "function equlity failed")


assert(cloned.classes !== obj1.classes, "array equlity failed")
console.log(cloned.getAge() , obj1.getAge(), )





/*
function extend(from, to) {
  if (from == null || typeof from != "object") return from;

  if (from.constructor != Object && from.constructor != Array) return from;

  if (from.constructor == Date || from.constructor == RegExp || from.constructor == Function ||
    from.constructor == String || from.constructor == Number || from.constructor == Boolean)
    return new from.constructor(from);

  to = to || new from.constructor();

  for (var name in from) {
    to[name] = typeof to[name] == "undefined" ? extend(from[name], null) : to[name];
  }

  return to;
}

var obj = {
  date: new Date(),
  func: function(q) {
    return 1 + q;
  },
  num: 123,
  text: "asdasd",
  array: [1, "asd"],
  regex: new RegExp(/aaa/i),
  subobj: {
    num: 234,
    text: "asdsaD"
  }
}

var clone = extend(obj);

/* log objects to DOM */
var origNode = document.getElementById("orig");
origNode.innerHTML = JSON.stringify(obj);

var cloneNode = document.getElementById("clone")
cloneNode.innerHTML = JSON.stringify(clone);


//test dates
setTimeout(function() {
    obj.date = new Date();
    origNode.innerHTML += "<br/>" + JSON.stringify(obj);
    cloneNode.innerHTML += "<br/>" + JSON.stringify(clone);
}, 1500)



 */