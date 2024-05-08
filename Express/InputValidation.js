const express = require('express')

const app =express();
app.use(express.json())

app.post("/health-checkup", function(req,res){
const kidneys = req.body.kidneys
const kidneyLength =kidneys.length

res.send(`you havve  ${kidneyLength} kidneys`)
})

app.use(function(err,req,res,next){
res.json({
    msg:"Sorry something is Wrong with our server :"
    })
})
app.listen(3000);