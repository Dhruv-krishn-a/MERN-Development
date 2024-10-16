const express = require('express')
const cors = require('cors')
const {createTodo , updateTodo} = require("./types")
const {todo} = require("./db")

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));
app.post('/todo' , async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return ;
    }
    // put it in mongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })
    res.json({
        msg:"Todo created"
    })
})


app.get('/todos' , async function(req,res){
 const todos = await todo.find({})
 
 res.json({
    todos
 })
})

app.put('/completed', async function(req,res){
    const createPayload = req.body;
    const parsedPayload = types.createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return ;
    }
    // put it in mongoDB
    await todo.update({
        _id: req.body.id,
    },{
        completed: true 
    })
})

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on port 3000');
  });
  