const express = require('express')
const jwt = require('jsonwebtoken')
const jwtpassword = '123456'
const app = express()
app.use(express.json())
const allUsers = [{
        username:"Dhruv@gmail.com",
        password:"123",
        name:"Dhruv",
    },{
        username:"sneha@gmail.com",
        password:"1234",
        name:"Sneha singh",
    },{
        username:"krishna@gmail.com",
        password:"12345",
        name:"Dhruv krishna",
    }
];
function userExist(username , password){
    //all the code
    let userExist =false
    for(let i =0; i<allUsers.length;i++){
        if(allUsers[i].username == username && allUsers[i].password==password){
            userExist=true;
            break;
        }
    } 
    return userExist;
}
app.post("/signin", (req,res)=>{
const username = req.body.username;
const password = req.body.password;
if(!userExist(username, password)){
    return res.status(403).json({
        msg: "user dose not exist in memory ",
    })
}
var token =jwt.sign({username:username}, "shhhh")
return res.json({
    token,
    });
});
app.get("/users" , (req,res)=>{
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtpassword)
        const username = decoded.username
    }
    catch (err) {
        return res.status(403).json({
          msg: "Invalid token",
        });
      }
})
app.listen(3000)