// Write a function that takes an array of strings as a parameter and returns the longest string in the array.
// Expected output: console.log(findLongestString(["cat", "elephant", "dog"])); // "elephant"

const findLongestString = (s)=>{
    if(s.length < 0){
        return ""
    }
    let words = s[0]
    for(let i = 0; i < s.length;i++){
        if(s[i].length > words.length){
            words = s[i]
        }
    }

    return words
}
console.log(findLongestString(["apple","elephant","dog"]))