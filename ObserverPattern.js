class Observable {
    constructor() {
        this.subscribers = []
    }

    subscribe(func) {
        this.subscribers.push(func)

    }

    unsubscribe(func) {
        this.subscribers =this.subscribers.filter(sub => sub !== func)
    }

    fire(data){
        this.subscribers.forEach(sub => sub(data))
    }
}

//usage

let myOberserver = new Observable()

let id1 = document.getElementById('id1')
let id2 = document.getElementById('id2')
let id3 = document.getElementById('id3')




let handler = function (data) {
    console.log(data)
}


myOberserver.subscribe(handler)
myOberserver.subscribe(handler)
myOberserver.subscribe(handler)



//implement this https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript
//from this https://pawelgrzybek.com/the-observer-pattern-in-javascript-explained/#comment-3511506980
