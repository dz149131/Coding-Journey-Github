const express = require("express");
const app = express();
// console.dir(app)

// app.use((req, res) => {                                         //Express creates javascript object automatically 
//     console.log("We got a new request")                         //for us by parsing the incoming http request 
//     // console.dir(req)                                         //information and passes it into the first argument 
//     res.send("Hello, we got your request. This is a response.") //to this call back
//     // res.send("<h1>Heading created from res.send</h1>")
//     // res.send({color: 'red'})                                 //content type = application/json
// })

app.get('/', (req, res) => {
    res.send("This is the home page")
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
    // console.log(req.params)
    res.send('This is a subreddit')
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params;
    res.send(`<h1>Viewing the Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.get('/cats', (req, res) => { 
    console.log("CAT REQUEST")
    res.send('MEOW!')
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})

app.get('*', (req, res) => {        //'*' references all other requests 
    res.send('UNKNOWN PATH')        //put at the end
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})