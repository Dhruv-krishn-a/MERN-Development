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

// ****************************OPERATIONS*********************************

let value = 3
let negValue = -value
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)

let str1= "Dhruv"
let str2 = "krishna"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1+ "2")
console.log("1" + 2 + 2) // This will give output 122 
console.log(1 + 2 + "2") // This will give output 32
//these are all guidelines driven .

console.log(+true)
console.log(+"")

//let num4,num5,num6
//num1=num2=num3 = 2+2
//avoid writting this type of code at any cost 
let [num1,num2,num3]= Array(3).fill(4)//use this.

//increment and decrement operatords
let gamecounter =100
console.log(gamecounter++)
console.log(gamecounter);



