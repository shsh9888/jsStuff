// function example() {
//   console.log(this)
// }
// const boundExample = bind(example, { a: true })
// boundExample.call({ b: true }) // logs { a: true }

// function bind(functionName, context) {
//   return function () {
//     functionName.apply(context, [])
//   }


// }




Function.prototype.bind = function(context) {
    let func = this;
    return function () {
        func.apply(context, Array.from(arguments))

    }


}


function doSomething (_name){

    this.name = _name,

        this.sayHi = function() {
            console.log(this.name)

        }.bind({name:"someone you used to know"})


}


doSomething.prototype.sayBye = function () {
    console.log("sayyy byeee")
}
let do1 = new doSomething('Shravan');
let do2 = new doSomething('Keval');

do1.sayHi(1,2,3);
do2.sayHi();

do1.sayBye();
do2.sayBye();