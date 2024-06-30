//immideately Invoked Function Expressions 
// function chai(){
//     console.log(`Db connected`)
// }
// chai()

//when we want to immideately invoke the function

//due to the pollution of function call
(function chai(){
    // named IIFE
    console.log(`Db connected`)
})();//Execution call
//We need semicolan to stop in this case


//function
( (name) =>{
    console. log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
