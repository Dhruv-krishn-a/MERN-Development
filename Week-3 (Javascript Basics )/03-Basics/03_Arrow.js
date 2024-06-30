const user = {
    username : "Dhruv",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)//context of main function
    //console.log(this)
    }

}
// user.welcomeMessage()
// user.username="Krishna" //changing values 
// user.welcomeMessage()

console.log(this);//value of empty object , for Dom manipulation. 


// function One(){
//     let username ="dhruv"
//     console.log(this)
// }
// One()

// const Dhruv = function(){ //We cant use this function there
//     let username  = "krishna"
//     console.log(this.username)
// }

const Dhruv = () =>{
    let username  = "krishna"
    console.log(this.username)
}

Dhruv()



// const addTwo =(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))

//Implicit Return

const addTwo =(num1,num2)=> (num1+num2)
console.log(addTwo(3,4))


