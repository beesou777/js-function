// Write a function that takes a number as a parameter and returns true if the number is even, and false otherwise.
// Expected output: console.log(isEven(8)); // true

const isEven = (n)=>{
    if(n % 2 !== 0){
        return false
    }
    return true

}

console.log(isEven(8))