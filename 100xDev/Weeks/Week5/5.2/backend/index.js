const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo", async (req,res) => {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg: "You sent wrong inputs",
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async (req,res) => {
    const todos = await todo.find({});
    res.json({todos});
})

app.put("/completed", async (req,res) => {
    const updatePayload = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayload);
    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg: "You sent wrong inputs",
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Updated"
    })
})

app.listen(3000);