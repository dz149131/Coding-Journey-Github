const express = require("express");
const app = express();
// console.dir(app)

app.use((req, res) => {                                         //Express creates javascript object automatically 
    console.log("We got a new request")                         //for us by parsing the incoming http request 
    // console.dir(req)                                         //information and passes it into the first argument 
    res.send("Hello, we got your request. This is a response.") //to this call back
    // res.send("<h1>Heading created from res.send</h1>")
    // res.send({color: 'red'})                                 //content type = application/json
})
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})