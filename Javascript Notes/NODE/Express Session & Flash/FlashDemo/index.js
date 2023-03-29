const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');

const sessionOptions = {secret: 'sessionsecret', resave: false, saveUninitialized: false};
app.use(session(sessionOptions));

const Farm = require('./models/farm');


mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/flashDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION SUCCESSFUL")
    })
    .catch(err => {
        console.log("MONGO ERROR")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}))

// FARM ROUTES

app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', {farms})
})

app.get('/farms/new', (req, res) => {
    res.render('farms/new')
})

app.get('/farms/:id', async(req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', {farm})
})

app.post('/farms', async (req, res) => {
    const  farm = new Farm (req.body);
    await farm.save();
    res.redirect('/farms')
})

app.listen(3000, () => {
    console.log("Listening On Port 3000")
})
