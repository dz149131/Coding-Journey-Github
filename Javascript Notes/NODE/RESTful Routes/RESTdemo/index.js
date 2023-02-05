const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

const comments = [
    {
        id: 1,
        username: 'Todd',
        comment: 'lorem lorem lorem lorem lorem'
    },
    {
        id: 2,
        username: 'Tuttifrutti',
        comment: 'We must fall back into the trenches'
    },
    {
        id: 3,
        username: 'undergroundslayer55',
        comment: 'I like the new central centering device released'
    },
    {
        id: 4,
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
    comments.push({username, comment})
    // res.send("It worked!");
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
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