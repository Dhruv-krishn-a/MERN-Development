const express = require(`express`)

function CalculateFactoiral(n){
    let fact =0
    for(let i=0;i<=n;i++){
        fact = fact+i;
    }
    return fact;    
}
const app =express()
app.get("/" , (req , res) => {
    const n =req.query.n;
    let ans = CalculateFactoiral()
    res.send(ans.toString())
})
app.listen(3000);