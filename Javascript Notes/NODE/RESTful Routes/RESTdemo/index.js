const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

const comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lorem lorem lorem lorem lorem'
    },
    {
        id: uuid(),
        username: 'Tuttifrutti',
        comment: 'We must fall back into the trenches'
    },
    {
        id: uuid(),
        username: 'undergroundslayer55',
        comment: 'I like the new central centering device released'
    },
    {
        id: uuid(),
        username: 'Kachow',
        comment: 'Cars 3 is the best movie'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuid()})
    // res.send("It worked!");
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment})
})

app.get('/tacos', (req, res) => {
    res.send("GET /taco response")
})

app.post('/tacos', (req, res) => {
    // console.log(req.body)
    const { meats, qty } = req.body;
    // res.send("POST / taco response")
    res.send(`Ok, here  are your ${qty} ${meats} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000")   
})