const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = process.env.PORT 


// create a todo app that lets user store todes on the server
// create a http server in rust using actix-web
// create a http server in scratch using c
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// middlewares
app.use(bodyParser.json());

app.post('/conversations', (req, res) => {
    console.log(req.headers);
    const message = req.body.message;
    console.log(message);
    console.log(req.body);
    res.json({
      output: "2+2 = 4"
    })
    res.send({
        msg : "2+2 = 4"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})