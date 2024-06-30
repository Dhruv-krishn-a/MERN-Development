const express = require(`express`)

const app = express();

app.get("/" , (req , res) => {
   throw new error(" 500 ");
})

app.listen(3000)