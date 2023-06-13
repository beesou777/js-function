// Write a function that takes an array of numbers as a parameter and returns the sum of all the numbers.
// Expected output: console.log(calculateSum([2, 4, 6, 8])); // 20


const calculateSum = (num)=>{
    let sum = 0
    for(let i = 0; i < num.length;i++){
        sum += num[i]
    }
    return sum
}


console.log(calculateSum([2 ,8]))