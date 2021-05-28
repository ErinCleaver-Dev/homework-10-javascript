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

    console.log(count)
}

digitBinarycount(11, 1);