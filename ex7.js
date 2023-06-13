// Write a function that takes a number as a parameter and returns the factorial of that number.
// Expected output: console.log(factorial(5)); // 120


const factorial = (n)=>{
    if(n === 0 || n === 1){
        return 1
    }
    let num = 1
    for(let i = 2; i <= n;i++){
        num *= i
    }
    return num
}

console.log(factorial(7))

