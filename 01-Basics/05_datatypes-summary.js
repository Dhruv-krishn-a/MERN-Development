//There are two types of datatypes - 1. Primitive and Non-primitive.
/* 1. Primitive 
7 types : String,Number,Boolean,null,undefined,symbol,bigint*/

const score =100
const isLoggedin =false
const isScoreValue = 100.3
let userWEmail

const Id = "dhruv"
const anotherId = "sneha"

console.log(Id == anotherId)
const bigNumber =3456345634563456n

/* 2. Refrence Type(Non-primitive) 
Array, Object, Fuctions
*/
const names = ["Dhruv", "rahul"]
let myObj = {
    name: "Dhruv",
    age:23,
}

const MyFunction= function(){
    console.log("Hello world");
}

//to check datatype of anything.

console.log(typeof MyFunction)