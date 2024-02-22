const score = 400
console.log(score)
//Define Dedicately
const balance = new Number(100)
console.log(balance) 

console.log(balance.toString().length)
//Ecommerce application -> user dont need to see many points.
console.log(balance.toFixed(2))

const otherNumber =23.8966
//For Defining Precison
console.log(otherNumber.toPrecision(3))

const hundreds =1000000
//insert indian standered values.
console.log(hundreds.toLocaleString('en-IN'))


// ++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(2.6));
console.log(Math.floor(6.3));
console.log(Math.ceil(2.1));
//Gives a random value 
console.log(Math.random())
//from 1 to 10 only
console.log((Math.random()*10)+1)

const min =10
const max=20
console.log(Math.random()*(max-min+1))
