const express = require('express')

const app = express()

app.get("/health-checkup" , (req,res) => {
    const kidneyId = req.query.kidneyId
    const username = req.query.username
    const password = req.headers.password

    if(username ==="dhruv" && password === "pass"){
        if(username != "dhruv" || password != "pass")
        {res.status(403),jsons({
            msg: "user does not exist",
        });
        return;}
    }
    if(kidneyId !=1 && kidneyId !=2){
        
        res.status(411).json({
            msg: "wrong inputs",
        });dpkg 
    return
    }
    //do nothing with kidney here 

    res.send("Your heart is healtlhy ")
    
});

app.listen(3000)
