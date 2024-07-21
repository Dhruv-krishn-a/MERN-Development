
// Javascript guarantee that is promise will only be resolved only once , either success or failure.

const PromiseOne = new Promise(function(resolve , reject){
    console.log("We are inside new PromiseONE")
    resolve();
}).then(function(){
    console.log("PromiseOne is resolved ")
})

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({Name:"Dhruv" , email:"dhruvkkrishna@gamil.com"})
    },1000)
}).then(function (user) {
    console.log(user);
})

const Promisefour = new Promise(function(resolve,reject) {
    setTimeout(()=> {
        let error =true 
    if(!error){
        resolve({username: "Dhruv" , email:"dhruv@gmail.com"})
    }
    else {
        reject("Error has occured")
    }
    },1000)
})
//we can further chain this 
Promisefour.then(function(user){
    console.log(user);
    return user.username;
})