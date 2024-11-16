const mongoose = require("mongoose");

//we put connection url in .env file
mongoose.connect("mongodb+srv://admin:244466666@cluster0.zxtr0ph.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}