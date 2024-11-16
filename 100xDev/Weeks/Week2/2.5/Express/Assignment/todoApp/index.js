// Import required modules
const http = require('http');
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

function findIndex(arr, index) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i].id === id) {
            return i;
        }
    }
    return -1;
}

app.get('/todos', (req, res) => { 
    fs.readFile('./todos.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

app.get('/todos/:id', (req, res) => {
    fs.readFile('./todos.json', 'utf8', (err, data) => {
        if (err) throw err;
        const todos = JSON.parse(data);
        const todoIndex = findIndex(todos, parseInt(req.params.id));
        // const todoIndex = todos.find(t => t.id === parseInt(req.params.id));
        // if you were doing it using arr rather than json file 
        if (todoIndex === -1) {
            res.status(404).send();
        } else {
            res.json(todos[todoIndex]);
        }
    });
});

app.post('/todos', (req, res) => {
    const newTodo = {
        id : Math.floor(Math.random() * 1000000), //unique random id
        title : req.body.title,
        description : req.body.description 
    };
    fs.readFile('./todos.json', 'utf8', (err, data) =>{
        if (err) throw err;
        const todos = JSON.parse(data);
        todos.push(newTodo);
        fs.writeFile('./todos.json', JSON.stringify(todos), (err) => {
            if (err) throw err;
            res.status(201).json(newTodo)
        })
    })
})

app.put('todos/:id', (req, res) => {
    fs.readFile('./todos.json', 'utf8', (err, data) => {
        if (err) throw err;
        const todos= JSON.parse(data);
        const todoIndex = findIndex(todos, parseInt(req.params.id));
        if (todoIndex === -1) {
            res.status(400).send();
        } else {
            const updatedTodo = {
                id: todos[todoIndex].id,
                title: req.params.title,
                description: req.params.description
            };
            todos[todoIndex] = updatedTodo;
            fs.writeFile('./todos.json', JSON.stringify(todos), (err) => {
                if (err) throw err;
                res.status(200).json(updatedTodo);
            })
        }
    })
})

app.delete('./todos/:id', (req, res) => {
    fs.readFile('./todos.json', "utf8", (err, data) => {
        if (err) throw err;
        let todos = JSON.parse(data);
        const todoIndex = findIndex(todos, parseInt(req.params.id));
        if (todoIndex === -1) {
            res.sendStatus(404);
        } else {
            todos.splice(todoIndex, 1);
            fs.writeFile('./todos', JSON.stringify(todos), (err) => {
            if (err) throw err; 
            res.status(200).send();
            })
        }
    })
})

app.use((req, res, next) => {
    res.status(404).send();
})

app.listen(3001);
module.exports = app;