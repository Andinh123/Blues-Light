const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'public');
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'master.html'));
});
app.use(express.static(publicPath, {extensions: ['html']}));
app.use(express.static('public'));
app.post('/action/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Received POST request for /action/${id}`);
    const functionName = `action${id}`;
    if (typeof this[functionName] === 'function') {
        this[functionName]();
        res.send(`Action ${id} performed.`);
    } else {
        res.status(404).send('Action not found.');
    }
});
  
app.listen('80', () => {
    console.log("http://localhost");
});