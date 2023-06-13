// Write a function that takes an array of numbers as a parameter and returns a new array with only the even numbers.
// Expected output: console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]


const filterEvenNumbers = (num)=>{
    let even = []
    for(let i = 0 ; i < num.length;i++){
       if(num[i] % 2 == 0){
        even.push(num[i])
       }
    }
    return even
}

console.log(filterEvenNumbers([1,2,3,4,5,6,7,8,9,10]))