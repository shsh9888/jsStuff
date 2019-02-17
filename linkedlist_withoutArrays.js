// Implement a LinkedList class without using JavaScript’s built-in arrays ([]). Your LinkedList should support just 2 methods: add and has:

class LinkedList {
    constructor(_node, ..._next) {
        this.node = _node
        if(!_next) {
            this.next = null
        }else if(_next.length > 0) {
            this.next  = new LinkedList(..._next)

        }
    }

    add(value) {
        if(this.next) {
            this.next.add(value)
        }else {
            this.next = new LinkedList(value, null)
        }

    }

    has(value) {

        if(this.node === value) {
            return true
        }else if(this.next == null) {
            return false
        }

        return this.next.has(value)

    }


}
let list = new LinkedList(1, 2, 3)
list.add(4)                           // undefined
list.add(5)                           // undefined
console.log(list.has(1))                           // true

console.log(list.has(4))                           // true
console.log(list.has(6))// false
list.add(6)
console.log(list.has(6))// false
