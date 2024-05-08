const express = require('express');
//imported jwt library
const jwt =require('jsonwebtoken');
//password is mandatory for jwt 
const jwtpassword='123456';

const app =express();
app.use(express.json());
//creating object of users 
const Alluser =[{
    username:"Dhruv",
    password: "1234",
    email:"Dhruv@gmail.com",
},{
    username:"sneha",
    password: "12345",
    email:"sneha@gmail.com",
},{
    username:"krishna",
    password: "12346",
    email:"krishna@gmail.com",
}];
//creating a function to check if the user exist before new user or not 
function userExist(username , password ){
    let userExist = false ;
    for(let i =0;i<Alluser.length;i++){
        if(Alluser[i].password == password && Alluser[i].username ==username){
            userExist =true;
            break;
        }
    }
    return userExist;
}
app.post("/signin")




