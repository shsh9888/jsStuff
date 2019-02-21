//Linked List


class Node {
    constructor(_value, _next = null) {
        this.value = _value
        this.next = _next
    }

}


class LinkedList {

    constructor() {
        this.head = null
    }


    add(...items) {
        for (let item of items) {
            this._add(item)
        }
    }

    _add(item) {
        let head = this.head
        // console.log(this)
        if (!this.head) {
            this.head = new Node(item)
            return
        }
        while (head.next !== null) {
            head = head.next
        }

        head.next = new Node(item)
    }

    remove(item) {
        let head = this.head
        let prev = head
        if (head.value === item) {
            this.head = this.head.next
            return
            // delete head
        }
        while (head.value !== item && head !== null) {
            prev = head
            head = head.next
        }

        if (head) {
            prev.next = head.next
            // delete head
        } else {
            console.log("element not found")
        }


    }

    has(value) {
        let head = this.head
        while (head !== null) {
            if (head.value === value)
                return true

            head = head.next
        }


        return false

    }

    reverse() {
        let head = this.head
        let prev = null
        let next = head.next

        while (head !== null) {
            head.next = prev
            prev = head
            head = next
            next = next ? next.next : null //last node check
        }
        this.head = prev

    }

    isPalindrome() {
        let head = this.head
        function _isPalindrome( last){
            if(last === null)
                return true
            console.log(last.value)


            if(!_isPalindrome(last.next)) {
                return false
            }

            if(last) {
                if(head.value !== last.value) {
                    // console.log("comparing",head.value,last.value)
                    return false
                }
                head = head.next
            }

            return true

        }

        return _isPalindrome(this.head)

    }

    display() {
        let head = this.head
        let arr = []
        while (head !== null) {
            arr.push(head.value)
            head = head.next
        }

        console.log(arr.join('--->'))


    }


}


let mylist = new LinkedList()
mylist.add(1, 2, 3, 3, 2, 1)
// mylist.add(7)
// mylist.display()
// console.log(mylist.has(3))
// console.log(mylist.remove(3))
// console.log(mylist.has(3))
// mylist.display()
// mylist.reverse()
mylist.display()
console.log(mylist.isPalindrome())

