const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/files', (req, res) =>{
    fs.readdir(path.join(__dirname, '/files'), (err,files) => {
        if (err) {
            return res.status(500).json({error: 'Failed to retrieve files' });
        }
        res.json(files)
    })
})

app.get('/files/:filename', (req, res) => {
    const filepath = path.join(__dirname, './files/', req.params.filename);

    fs.readFile(filepath, (err, data) => {
        if (err) {
            return res.status(404).json({error: 'File not found'});
        }
        res.send(data);
    });
});

module.exports = app;
app.listen(3001);