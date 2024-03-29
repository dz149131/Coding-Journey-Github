const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

let comments = [
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

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;                          //finding the id
    const comment = comments.find(c => c.id === id);    //finding a comment with the same id
    res.render('comments/edit', { comment })            //open edit.ejs loading the 'comment'
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;                              //finding the id
    const newCommentText = req.body.comment;                //selects w/e sent in req.body
    const foundComment = comments.find(c => c.id === id);   //finding a comment with the same id
    foundComment.comment = newCommentText;                  //update that comment with new
    res.redirect('/comments')                               //redirect
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;                      //finding the id
    comments = comments.filter(c => c.id !== id);   //creates a shallow copy of a portion of a given array
    res.redirect('/comments');
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