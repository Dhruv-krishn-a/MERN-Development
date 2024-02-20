let score = "33abc" //This will convert to number
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof score);
//this is not a numpber -> special type not a number NaN
console.log(valueInNumber)

// When we convert a number it will easily be converted.
//number and string will be converted to NaN
//true-> 1; false -> 0;
// for null it will give output to 0
//to convert to boolean 
let isLoggedin = 1
let booleanIsLoggedIn = Boolean(isLoggedin)
console.log(booleanIsLoggedIn);
//number can also be converted to boolean