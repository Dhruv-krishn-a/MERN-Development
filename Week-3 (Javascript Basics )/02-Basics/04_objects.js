//singleton objects , Declaring using constructors.

// const tinderUser = new Object()  ->declaring empty object.

const tinderUser = {} //non singleton object

tinderUser.id = "this is id of tinderUSer"
tinderUser.name = "Dhruv"
tinderUser.isLoggedIn = false

console.log("Printing TinderUser : ",tinderUser);

//Declaring another user.
const regularUser = {
    email: "Dhruv@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Dhruv",
            lastname: "Krishna"
        }
    }
}

console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //combine the array Empt parenthesis is optional 

const obj3 = {...obj1, ...obj2} //same concept like array
console.log(obj3);


const users = [
    {
        id: 1,
        email: "Obj1@gmail.com"
    },
    {
        id: 1,
        email: "Obj2@gmail.com"
    },
    {
        id: 1,
        email: "Obj3@gmail.com"
    },
]

users[1].email  // to access
// console.log(tinderUsr);

console.log("Accessing all the objects of tinderUser. " , Object.keys(tinderUser)); /./
console.log("Accessing all the values of objects in tinderUser. " , Object.values(tinderUser));
console.log("Accessing all the entries of tinderUser " , Object.entries(tinderUser));

console.log("Asking the value if it exist in tinderUser" , tinderUser.hasOwnProperty('isLoggedIn'));

/*Again Declaring an object course
Keys -  coursename,
        price, 
        courseInstuctor.
*/

//Destructuring the objects.

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor -> don't access like this ,it will make the code heavy.

const {courseInstructor: instructor} = course //extracting the value
//console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[+
    {},
    {},
    {}
]