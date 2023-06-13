// Write a function that takes an array of numbers as a parameter and returns the largest number in the array.
// Expected output: console.log(findLargestNumber([4, 9, 2, 11, 6])); // 11


const largest = (array)=>{
    let largest = 0
    for(let i = 0; i < array.length;i++){
        if(largest < array[i]){
            largest = array[i]
        }
    }
    return largest
}

console.log(largest([1,2,3,4,5,9,6]))