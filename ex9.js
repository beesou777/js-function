// Write a function that takes two strings as parameters and returns true if they are anagrams (contain the same letters in a different order), and false otherwise.
// Expected output: console.log(isAnagram("listen", "silent")); // true


const isAnagram = (n1, n2) => {
    if (n1.length !== n2.length) {
      return false;
    }

    let word1 = n1.split("").sort().join("")
    let word2 = n2.split("").sort().join("")

    return word1 === word2 ? true : false
    
  }
  
  console.log(isAnagram("apple", "leppa"));
  