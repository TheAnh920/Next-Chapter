const express = require('express');
const accountModel = require('../models/accountModel')

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

// Sign up method prototype
router.post('/account', async(req, res) => {
    try {
        const {username, password} = req.body
        const usernameExists = await accountModel.findOne({ username })

        if (usernameExists) {
            res.status(400).json({ error : "Username is already taken."})
        } else {
            try {
                const account = await accountModel.create({username, password})
                res.status(200).json(account)
            } catch (error) {
                res.status(400).json({error : error.message})
            }
        }
    } catch (error) {
        console.error(error);
    }
})

module.exports = router