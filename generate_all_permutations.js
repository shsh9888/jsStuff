//Generating all the permuations


function permute(str) {
    let finalArr =[]
    if(str.length <2) {
        return [str]
    }
    return permutations("", str, finalArr, str.length)


}

//could instead have an object and return the keys instead
//coz to check the duplicates we can just do it in O(1)
function permutations(str1, str2, arr, len) {
    // console.log(str1,str2,arr)
    if(str1.length === len) {
        arr.push(str1)
        return
    }


    for(let i=0; i< str2.length; i++){

        permutations(str1+str2[i], str2.slice(0,i) + str2.slice(i+1),arr, len)
    }

    return arr

}



// permute('')             // []
console.log(permute('abcde'))         // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']


console.log("asdasd".slice(2))


