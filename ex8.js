// Write a function that takes a string as a parameter and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.
// Expected output: console.log(isPalindrome("racecar")); // true


const isPalindrome = (s)=>{
    let start = 0
    let end = s.length -1
    for(let i =0 ; i < s.length;i++){
        if(s[start] !== s[end]){
            return false
        }
    }
    return true
}

console.log(isPalindrome("racecar"))