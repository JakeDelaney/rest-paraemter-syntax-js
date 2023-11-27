/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum1 = sumAll(1, 5, 2);
console.log("Sum 1:", sum1);

// Extra arguments are ignored
let sum2 = sumAll(1, 5, 2, 2, 5);
console.log("Sum 2:", sum2);

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest){
        sum += i;
    }

    return sum;
}

let sum3 = sumRest(1, 5, 2, 2, 5)
console.log("Sum 3:", sum3)
