const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/dogs', (req, res) => {
    res.send('Woof Woof')
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})