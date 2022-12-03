const express = require("express");
const app = express();
// console.dir(app)

app.use(() => {
    console.log("We got a new request")
})
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})