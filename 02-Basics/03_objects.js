// singleton from constructor else multiple instances 
// Object.create -> constructor methord to create object.

// object literals (To declare objects)

const mySym = Symbol("key1") //Declaring a symbol 

/*
symbol are unique datatype in array.Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object 
*/


//Declaration of Object
const JsUser = {
    /*Each property has a name, which is also called a key, and a corresponding value. */

    //Key: "Value"

    name: "Dhruv", 
    /* 
    "name": "Dhruv"  -> this is how name is processed, as a string by the compiler. Value depends on us. 
    */
     
    "full name": "Dhruv krishna", //We cannot access this value with . operator
    [mySym]: "mykey1", //To use symbol as a key
    age: 22,
    location: "Agra",
    email: "dhruv@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


//Accessing the object like array [console.log(JsUSer.email)]. -> This is not very good.

console.log(JsUser.email) //avoid.
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym]) //accessing the symbol.

JsUser.email = "Dhruv@chatgpt.com" //To overwrite the value 
//Object.freeze(JsUser) //Nobody canchange the value of the object now 
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser); //There will be no error but value wont be changed .

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){ //function refrenced ,not executed
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);//Not a function without (),error without object freeze.
console.log(JsUser.greetingTwo());