const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');

app.use('/shelters', shelterRoutes);

app.use('/dogs', dogRoutes);

app.listen(3000, () => {
    console.log("Serving App On Localhost:3000")
})