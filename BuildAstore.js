class SingleElement {
    constructor(node, value) {
        this.node = node
        this.value = value

    }

    getValue() {
        return this.value
    }

    getNode() {
        return this.node
    }

    setValue(val) {
        this.value = val
    }


}

class MyMap {
    constructor() {
        this.container = []
    }

    set(node, value) {
        if(this.has(node)) {
           let single = this.get(node)
           single.setValue(value)
           return single
        }
        let p = new SingleElement(node, value)
        this.container[node] =p
        return p
    }

    get(node) {
        console.log(this.container, this.container[node])
        return this.container[node].getValue()
    }

    has(node) {
        return this.container[node] ? true: false
    }
}


let myMap = new MyMap()
myMap.set(1,2)

console.log(myMap.get(1))

