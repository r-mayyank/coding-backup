const express = require("express");
const app = express();

//Middlewares for parsing request bodies 



app.post("admin/signup", (req, res) => {
    //creates a new admin acc
    const username = req.body.username;
    const password = req.body.password;

})

app.post("admin/courses", (req,res) => {
    //creates a new course

})