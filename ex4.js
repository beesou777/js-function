// Write a function that takes a string as a parameter and returns a new string with all the vowels removed.
// Expected output: console.log(removeVowels("Hello World")); // "Hll Wrld"


const replacedString = (s)=>{
    return s.replace(/[aeiou]/g,'')
}

console.log(replacedString("hello world"))