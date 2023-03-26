const express = require('express');
const router = express.Router();
//old
// router.get('/shelters', (req, res) => {
//     res.send("All Shelters")
// })
// router.post('/shelters/new', (req, res) => {
//     res.send("Creating Shelter")
// })
// router.get('/shelters/:id', (req, res) => {
//     res.send("Viewing One Shelter")
// })
// router.get('/shelters/:id/edit', (req, res) => {
//     res.send("Editing One Shelter")
// })
//new
router.get('/', (req, res) => {
    res.send("All Shelters")
})
router.post('/new', (req, res) => {
    res.send("Creating Shelter")
})
router.get('/:id', (req, res) => {
    res.send("Viewing One Shelter")
})
router.get('/:id/edit', (req, res) => {
    res.send("Editing One Shelter")
})

module.exports = router;