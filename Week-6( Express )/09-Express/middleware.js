const express = require("express")
const app = express();

//Making a MiddleWare function that check all the user inputs
function userMiddleware(req,res, next){
    if(username != 'dhruv' && password != 'pass'){
        res.status(403).json({
            msg: 'Incorrext Inputs ',
        })
    }
    else{
        next()}
}
//Making a MiddleWare for kidney that check all the kidney inputs 
function kidneyMiddleware(req,res, next){
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg: 'Incorrext Inputs ',
        })
    }
    else{
        next()}
}
//calling path ,middleware 
app.get("/kidneycheckup" ,userMiddleware,kidneyMiddleware, (req , res) =>{
    //logic here 
})

app.get("/kidneycheckup" ,userMiddleware,kidneyMiddleware, (req , res) =>{
    //logic here 
})

app.get("/kidneycheckup" ,userMiddleware,kidneyMiddleware, (req , res) =>{
    //logic here 
})
//if we dont want user checking in some case , we can just skip it
app.get("/kidneycheckup" ,kidneyMiddleware, (req , res) =>{
    //logic here 
})

