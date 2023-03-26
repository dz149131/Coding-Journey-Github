const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.send("Hey There")
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Alfred');
    res.send('cookie sent')
})

app.listen(3000, () => {
    console.log("Serving on port 3000")
})