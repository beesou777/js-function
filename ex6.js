// Write a function that takes an array of strings as a parameter and returns a new array with all the strings capitalized.
// Expected output: console.log(capitalizeStrings(["hello", "world"])); // ["Hello", "World"]


const capitalizeStrings = (array)=>{
    if(array.length === 0){
        return null
    }
    
    let arr = array.map((strig)=>{
        return strig[0].toUpperCase() + strig.slice(1).toLowerCase()
    })

    return arr

}

console.log(capitalizeStrings(['hello','world']))