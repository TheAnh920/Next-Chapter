const express = require('express');
const accountModel = require('../models/accountModel')
const router = express.Router();
const axios = require('axios');

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

  router.get('/books/search', async (req, res) => {
    try {
        // const { q } = req.query; // Extract query parameter from the request
        const  {q}  = req.query;
        // const paramValue = req.query.param;
        // const startIndex = paramValue*25 - 1;
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
          params: {
            q, // Search query
            maxResults : 25,
          },
        });
        res.json(response.data);
      } catch (error) {
        console.error('Error fetching book data:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
});

// Sign up method prototype
  router.post('/account/signup', async(req, res) => {
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

  router.post('/account/signin', async (req, res) => {
    const { username, password } = req.body;
  
    try {
        const account = await accountModel.findOne({ username });
        if (!account) {
          return res.status(404).json({ success: false, message: 'User not found' });
        }
    
        if (account.password !== password) {
          return res.status(401).json({ success: false, message: 'Invalid password' });
        }

        return res.json({ success: true, message: 'Login successful' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
      }
  });

  router.get('/books/single/*', async (req, res) => {
    try {
      const  address  = req.params[0] // Get the URL subdirectory directly
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${address}`);
      res.json(response.data || {});
    } catch (error) {
      console.error('Error fetching book details:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router