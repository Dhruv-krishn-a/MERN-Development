//Making functions in Javascript 

function myname(){
    console.log("Dhruv Krishna")
}
myname()
// input -> parameters
//calling -> Arguments
function AddTwoNos(n1,n2){
    console.log(n1+n2);
}
const result = AddTwoNos(3, 4) //this can be a problem, if user gave any other datatype.

console.log("result",result); //function wont store that value .

function addition(n1,n2){
    let result_2 = n1 + n2
    //return result
    return n1+n2
}

const result_2 = addition(3,9)
console.log("THis is result_2 : ", result_2);

function loginMessage(username){
    if(username == undefined){
        console.log("Please Enter Username")
        return 
    }
    return `${username} : just logged in`
}
console.log(loginMessage()) //if we dont pass anything it will be undefined.

