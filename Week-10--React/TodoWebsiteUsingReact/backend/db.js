const mongoose = require("mongoose")
const { title } = require("process")

mongoose.connect("mongodb+srv://Dhruv1055:Dhruvkrishna1055@dhruv.7woveml.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})
const todo = mongoose.model('todos' , todoSchema);

module.exports = { todo };
