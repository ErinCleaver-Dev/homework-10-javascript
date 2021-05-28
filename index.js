// Declare two variables (n and b)
// Read the user input from the console and
// Convert the n into binary representation (you can use a built in method)
// count the b digit in the binary number 

const { count } = require("console");

// printe the result on the console.  
const digitBinarycount = (n, b) => {

    let binary = n.toString(2)
    // was used for testing the binary.
    //console.log(binary);
    let count = 0;

    for(let i = 0; i < binary.length; i++) {
        if(binary[i] == b) {
            count++;
        }
    }

    return count
}

console.log(`The results for 20 and 0 are ${digitBinarycount(20, 0)}`);

console.log(`The results for 15 and 1 are ${digitBinarycount(15, 1)}`);
console.log(`The results for 10 and 0 are ${digitBinarycount(10, 0)}`);




