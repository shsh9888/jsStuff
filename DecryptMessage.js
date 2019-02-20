// Decrypt Message
// An infamous gang of cyber criminals named “The Gray Cyber Mob”, which is behind many hacking attacks and drug trafficking, has recently become a target for the FBI. After intercepting some of their messages, which looked like complete nonsense, the agency learned that they indeed encrypt their messages, and studied their method of encryption.
//
//     Their messages consist of lowercase latin letters only, and every word is encrypted separately as follows:
//
// Convert every letter to its ASCII value. Add 1 to the first letter, and then for every letter from the second one to the last one, add the value of the previous letter. Subtract 26 from every letter until it is in the range of lowercase letters a-z in ASCII. Convert the values back to letters.
//
//     For instance, to encrypt the word “crime”
//
// Decrypted message:	c	r	i	m	e
// Step 1:	99	114	105	109	101
// Step 2:	100	214	319	428	529
// Step 3:	100	110	111	116	113
// Encrypted message:	d	n	o	t	q
// The FBI needs an efficient method to decrypt messages. Write a function named decrypt(word) that receives a string that consists of small latin letters only, and returns the decrypted word.
//
//     Explain your solution and analyze its time and space complexities.
//
//     Examples:
//
// input:  word = "dnotq"
// output: "crime"
//
// input:  word = "flgxswdliefy"
// output: "encyclopedia"
// Since the function should be used on messages with many words, make sure the function is as efficient as possible in both time and space. Explain the correctness of your function, and analyze its asymptotic runtime and space complexity.
//
//     Note: Most programing languages have built-in methods of converting letters to ASCII values and vica versa. You may search the internet for the appropriate method.
//
//     Constraints:
//
// [time limit] 5000ms
//
//     [input] string word
//
// The ASCII value of every char is in the range of lowercase letters a-z.
//     [output] string


function decrypt(word) {
    // your code goes here
    let wordArray = word.split('');
    let len = wordArray.length;
    let finalArray = []
    if (len === 0) {
        return ""
    }
    wordArray = wordArray.map(function(letter) {
        return letter.charCodeAt(0);
    });

    //handling first letter
    if (wordArray[0] == 97) {
        finalArray.push(122)
    }else {
        finalArray.push(wordArray[0]-1)
    }


    for(let i=1; i<len; i++) {
        let prev = wordArray[i-1];
        let current = wordArray[i];
        finalArray.push(rangeIt(current-prev))
    }

    return String.fromCharCode(...finalArray)
}


//return in range 97-122 elli
//https://www.linkedin.com/in/shravan-shetty-bb225681/
function rangeIt(num) {
    while(true) {
        if(num>= 97 && num<=122) {
            return num;
        }
        num = num+26
    }

}

//110 = numberIwant + 100 - (26 * n)
//10 + (26 *n)  =

//first one
//what if I haven a =97


//"ABC".charCodeAt(0) // returns 65
//String.fromCharCode(65,66,67); // returns 'ABC'
