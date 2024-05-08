const express = require('express')
const zod = require('zod')
const app = express()


const schema = zod.array(zod.number())
const schemas = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})


app.use(express.json())

app.post("/health-checkup" , (req,res) =>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status({
            msg: "Input is invalid "
        })
    }
    else {
        res.send({
            response
        })
    }
})

app.listen(30000)