const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/groceryStore', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION SUCCESSFUL")
    })
    .catch(err => {
        console.log("MONGO ERROR")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
    res.send('test!')
})

app.listen(3000, () => {
    console.log("Listening On Port 3000")
})
