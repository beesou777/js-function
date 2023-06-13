// Write a function that takes a string as a parameter and returns the number of vowels in the string.
// Expected output: console.log(countVowels("Hello World")); // 3


const countVowels = (s)=>{
    if(s.length < 0){
        return 0
    }
    let vowels = ['a','e','i','o','u']
    let count = 0
    for(let i = 0; i< s.length ; i++){
        if(vowels.includes(s[i])){
            count += 1
        }
    }
    return count
}

console.log(countVowels("hello world"))