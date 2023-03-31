const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcrypt');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION SUCCESSFUL")
    })
    .catch(err => {
        console.log("MONGO ERROR")
        console.log(err)
    })

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    const validPassword = await bcrypt.compare(password, user.password);
    if(validPassword){
        res.send("Successfully Logged In!")
    } else {
        res.send("Wrong Username Or Password")
    }
})

app.post('/register', async (req, res) => {
    const {password, username} = req.body;
    // await bcrypt.hash(req.body.password)
    const hash = await bcrypt.hash(password, 12);
    const user = new User ({
        username,
        password: hash
    })
    await user.save();
    res.redirect('/');
})

app.get('/secret', (req, res) => {
    res.send("You can only see me if logged in")
})

app.listen(3000, () => {
    console.log("Serving on port 3000")
})