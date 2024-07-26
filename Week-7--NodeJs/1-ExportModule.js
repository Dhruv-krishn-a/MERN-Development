const sum = function (num1,num2){
    return num1+num2
}

module.exports = sum;


//to export multiple things in a export function , 

const multiply = (num1,num2) =>{return num1*num2}
const PI = 3.14;
const newstring = "Dhruv"

// This is generally a bad syntax. 
module.exports.multiply = multiply
module.exports.PI = PI
module.exports.newstring = newstring

//Better sntax , it does not repeat as much as above .
// module.exports ={sum:sum , PI:PI , newstring:newstring}