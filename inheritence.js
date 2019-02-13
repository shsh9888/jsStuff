// Inheritence 101
/**
 1. PseudoClassical Inheritence
 2. prototype inheritence
 3. Functional Inheritence


 **/

// 1. 1. PseudoClassical Inheritence

function Animal(_name) {
  this.name = "Default Animal";
  

}

Animal.prototype.canWalk = function () {
  console.log(this.name, "can walk")
}



function Bird(_name) {
}

Bird.prototype = new Animal();

Bird.prototype.canFly = function () {
  console.log(this.name ," can definitely fly")

}


let bird1 = new Bird('Humming bird');

bird1.canFly()
bird1.canWalk()



//2. Prototypal Inheritencemal


let Animal = {
  name : "Default Animal",
  
  canWalk : function () {
      console.log(this.name, "can walk")
  }

}

let bird = Object.create(Animal);
bird.name ="Humming bird" //Overriding

bird.canFly = function() {
  console.log(this.name ," can definitely fly")
}

bird.canFly()
bird.canWalk()



//3. Functional Inheritence
// Generally used for information hiding and having the private variables.
//can also add super method in this cases... can refer the  parent methods.

function Animal() {
  let that ={}
  let name ="Default Animal" // private
  let age = 12; //private

  that.canWalk = function () {
      console.log(name, "can walk")
  }

  return that;

}



function Bird() {
  let that = Animal();
  let name ='Humming Bird'
  that.canFly = function() {
      console.log(name, "can fly")

  }
  return that;
}

let bird = Bird();
bird.canFly()
bird.canWalk()



