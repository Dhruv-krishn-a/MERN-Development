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


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(Primitive)-> Copy of the original value , heap(non-primitive)-> Reference (Value will change)

let myYoutubename="Dhruv krishna"

let anothername= myYoutubename 
anothername = "Dhruv"

console.log(myYoutubename);
console.log(anothername);

//Taking a non Primitive Datatype 
let userOne={
    email:"Dhruvkrishn@gmail.com",
    upi:"dhruv@paytm"
}
//Creating userTwo which is equal to userone and Changing the value of email for this user 
let usertwo = userOne
usertwo.email="Dhruv@gmail"
//The value is by reference  and the original value will change.
console.log(userOne.email);
console.log(usertwo.email);

