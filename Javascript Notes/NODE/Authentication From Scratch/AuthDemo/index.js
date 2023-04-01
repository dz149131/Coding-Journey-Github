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
app.use(session({secret: 'sessionsecret', resave: false, saveUninitialized: false}));

//uses a middleware function to check whether a user is logged in 
//before allowing them to access the /topsecret page. If the user 
//is not logged in, they are redirected to the login page. If the 
//user is logged in, they are allowed to access the /topsecret page and see the "Top Secret" message.
const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/login', (req, res) => {
    res.render('login')
})

// This code calls the findAndValidate static method on the User model with two arguments: username and password.

// The findAndValidate method is a custom method that was defined on the userSchema and added to the User model. It returns a User document if the specified username and password match a user in the database. Otherwise, it returns false.

// The await keyword is used to wait for the findAndValidate method to complete before continuing with the execution of the code. If a User document is returned from the method, it is assigned to the foundUser constant. The foundUser object can then be used to check the user's credentials and, if they are valid, log the user in.
app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if(foundUser){
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
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
    const user = new User ({username, password})
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
})

app.post('/logout', (req, res) => {
    //When the user clicks the logout button, the code sets the user_id 
    //property of the req.session object to null. This means that the user 
    //is no longer considered logged in, and their session information is removed.
    req.session.user_id = null;
    //completely removes all session data
    // req.session.destroy();
    res.redirect('/login')
})

//checks whether a user is logged in and either redirects 
//them to the login page or allows them to access the secret page 
//with a message that can only be seen by logged-in users.
app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
})

app.get('/topsecret', requireLogin, (req, res) => {
    res.send("Top Secret")
})

app.listen(3000, () => {
    console.log("Serving on port 3000")
})