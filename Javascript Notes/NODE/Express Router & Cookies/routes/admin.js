const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send("Not Admin!")
})

router.get('/control', (req, res) => {
    res.send('Admin control page')
})
router.get('/forceshutdown', (req, res) => {
    res.send('Force Shutdown')
})


module.exports = router;