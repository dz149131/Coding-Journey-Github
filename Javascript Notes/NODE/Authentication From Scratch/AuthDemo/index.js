const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');

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
app.use(session({secret: 'sessionsecret'}))

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/login', (req, res) => {
    res.render('login')
})
//handles a login request by finding a user in the database, 
//comparing the submitted password with the hashed password stored in the database, 
//and either logging the user in and redirecting them to the /secret page 
//or redirecting them back to the /login page if the login attempt was unsuccessful.
app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    const validPassword = await bcrypt.compare(password, user.password);
    if(validPassword){
        //if successfully logged in store user._id in session user_id
        req.session.user_id = user._id;
        res.redirect('/secret')
    } else {
        res.redirect('/login')
    }
})

//registers a new user by hashing their password, 
//creating a new user object, saving it to a database, 
//setting a session variable to track the user, 
//and redirecting the user to the homepage.
app.post('/register', async (req, res) => {
    const {password, username} = req.body;
    // await bcrypt.hash(req.body.password)
    const hash = await bcrypt.hash(password, 12);
    const user = new User ({
        username,
        password: hash
    })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
})

//checks whether a user is logged in and either redirects 
//them to the login page or allows them to access the secret page 
//with a message that can only be seen by logged-in users.
app.get('/secret', (req, res) => {
    if(!req.session.user_id){
        res.redirect('/login')
    } else {
        res.send("You can only see me if logged in")
    }
})

app.listen(3000, () => {
    console.log("Serving on port 3000")
})