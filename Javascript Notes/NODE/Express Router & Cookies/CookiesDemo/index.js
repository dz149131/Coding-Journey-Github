const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/greet', (req, res) => {
    console.log(req.cookies)
    const {name = 'No-name'} = req.cookies;
    res.send(`Hey There, ${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Alfred');
    res.send('cookie sent')
})

app.listen(3000, () => {
    console.log("Serving on port 3000")
})