// Write a function that takes a string as a parameter and returns a new string with the words in reverse order.
// Expected output: console.log(reverseWords("Hello World")); // "World Hello"


const reverseWords = (s)=>{
    if(s.length < 1){
        return null
    }

    let words = s.split(" ").reverse()
    return words

}


console.log(reverseWords("Hello World"))