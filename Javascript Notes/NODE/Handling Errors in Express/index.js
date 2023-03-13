const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

app.use(morgan('tiny'));

app.use((req, res, next) => { 
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res ,next) => {
    console.log("I Love Dogs")
    next();
})

const verifyPassword = (req, res , next) => {
    const {password} = req.query;
    if (password === 'unlock') {
        next();
    }
    // res.send('You Need To Enter A Password')
    // res.status(401)
    throw new AppError('Password Required', 401);
}

app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Home Page')
})

app.get('/error', (req, res) => {
    chicken.fly() //does not exist
})

app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Woof Woof')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('You found the secret!')
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin!', 403)
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

// app.use((err, req, res, next) => {
//     console.log("*********************")
//     console.log("********ERROR********")
//     console.log("*********************")
//     next(err)
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went Wrong'} = err;
    res.status(status).send(message)
})
//setting up error class where we can specify a message and status, 
//throw that from anywhere in our application with different status/messages
//and have a single handler that will take them also use default values 
//if we don't provide them and send that status code with that message

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})