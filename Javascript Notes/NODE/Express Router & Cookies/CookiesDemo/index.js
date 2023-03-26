const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('cookiepassword'));

app.get('/greet', (req, res) => {
    const {name = 'No-name'} = req.cookies;
    res.send(`Hey There, ${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Alfred');
    res.send('cookie sent')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', {signed: true});
    res.send('cookie signed')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log("Serving on port 3000")
})