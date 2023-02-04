const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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