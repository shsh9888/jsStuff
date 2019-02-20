//Basically the two sum problem with 

function getIndicesOfItemWeights(arr, limit) {
    // your code goes here
    //let finalArr =[]
    let cache = {}
    let len = arr.length

    for(let i=0; i< len; i++) {
        let item =arr[i]
        if(cache.hasOwnProperty(item)) {
            return [i, cache[item]]
        }else {
            cache[limit-item] = i
        }


    }
    return [];

}

// a+b = 21
// a =  21-b (key)//