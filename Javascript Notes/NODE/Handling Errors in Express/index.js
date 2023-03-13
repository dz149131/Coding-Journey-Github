const express = require('express');
const app = express();
const morgan = require('morgan');


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
    throw new Error('Password Required')
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

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

app.use((err, req, res, next) => {
    console.log("*********************")
    console.log("********ERROR********")
    console.log("*********************")
    next(err)
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})