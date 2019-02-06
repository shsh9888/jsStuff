let arr = [1,2,4,5,6, [1,2,[3,4],5],[3,5,6]]
// arr =[1,2,3,[1,2]]

function recur(arr) {
    let temp =[]

    for(let ele of arr) {
        if(Array.isArray(ele)){
            console.log("Array found", ele)
            // Array.prototype.concat.apply(temp,recur(ele))
            temp.push(...recur(ele))
        } else {
            temp.push(ele)
        }
    }
    return temp;
}


//recursively lo
function flattenArrRecursively(arr) {
    let final =[]

    arr.forEach(function (elem, index) {
        if(Array.isArray(elem)) {
            console.log("Array found2", elem)

            final.push(...flattenArrRecursively(elem))
        }else {
            final.push(elem)
        }
        w
    });
    return final

}


//Inplace

function inplaceFlatter(arr) {
    for (let i=0; i< arr.length; i++) {
        if(Array.isArray(arr[i])){
            console.log("Arrrya found", arr[i])
            let a= inplaceFlatter(arr[i])
            arr.splice(i,1, ...a)
        }
    }

    return arr;


}

function inplaceNotRecur(arr) {
    let out =[]
    let lastIndexStack = [-1]
    let arrays = [arr]

    while(arrays.length > 0){
        let input = arrays.pop()
        let i = lastIndexStack.pop() + 1 // where to start
        for(;i<input.length; i++) {
            if(Array.isArray(input[i])) {
                lastIndexStack.push(i);
                arrays.push(input[i])
                input = input[i]
                i=-1
            }else out.push(input[i])
        }

    }
    return out

}

console.log(inplaceNotRecur(arr))
// console.log(flattenArrRecursively(arr))


function flatten(input) {
    var i, placeHolder = [input], lastIndex = [-1], out = [];
    while (placeHolder.length) {
        input = placeHolder.pop();
        i = lastIndex.pop() + 1;
        for (; i < input.length; ++i) {
            if (Array.isArray(input[i])) {
                placeHolder.push(input);
                lastIndex.push(i);
                input = input[i];
                i = -1;
            } else out.push(input[i]);
        }
    }
    return out;
}
flatten(arr);
//iterative solution

function flattenArIterativel(arr) {
    return arr.reduce((prev, elem, arr) =>prev.concat(elem),[])

}


// 3.
var result = [].concat.apply([], arr);
// console.log(result)
console.log(flattenArrRecursively(arr))
// console.log(flattenArIterativel(arr))