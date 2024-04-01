const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
                name: "DIO Brando",
                stand: "The World",
            })
})

router.post('/books', (req, res) => {
    res.json({
                bookName: "Percy Jackson and the Sea of Monsters",
                author: "Idk lmao",
            })
})

module.exports = router