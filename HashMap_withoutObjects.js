// Implement a HashMap class without using JavaScript’s built-in objects ({}) or Maps. You are provided a hash() function that takes a string and returns a number (the numbers are mostly unique, but sometimes two different strings will return the same number):



// [index-hashKey : [[index-key, value],[index-key, value]]]


class HashMap {

    constructor (){
        this.arr =[]
    }

    set(key, value) {
        let hashKey = hash(key)
        let values =[]
        if(this.arr[hashKey]) {
            values = this.arr[hashKey]
        }

        for(let key_value of values) {
            if(key_value[0] === key){
                key_value[1] = value
                return
            }
        }

        values.push([key, value])
        this.arr[hashKey] = values

    }

    get(key){
        let hashKey = hash(key)
        let values = this.arr[hashKey] || []
        for(let key_value of values) {
            if(key_value[0] === key){
                return key_value[1]
            }
        }
        return
    }

}






function hash (string) {
    return string
        .split('')
        .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
}
// Your HashMap should support just 2 methods, get, set:

let map = new HashMap()
map.set('abc', 123)                   // undefined
map.set('foo', 'bar')                 // undefined
map.set('foo', 'baz')                 // undefined
console.log(map.get('abc'))                        // 123
console.log(map.get('foo'))                        // 'baz'
console.log(map.get('def'))