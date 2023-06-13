// Write a function that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
// Expected output: console.log(isPrime(13)); // true



const isPrime = (n)=>{
    if(n <= 1){
        return false
    }
    let isPrime = false
    for(let i = 2; i < n;i++){
       isPrime = true
        if(n % i === 0){
         isPrime = false
         break;
        }
    }
    if(!isPrime){
        return false
    }
    return true
}

console.log(isPrime(30))