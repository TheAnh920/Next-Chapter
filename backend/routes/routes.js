const express = require('express');
const accountModel = require('../models/accountModel')
const router = express.Router();
const axios = require('axios');
const jwt = require('jsonwebtoken')

  
//                                  ACCOUNT-RELATED API ROUTES
// ------------------------------------------------------------------------------------------//
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

        const payload = {
          userId : account._id,
          username : account.username,
          // Add other necessary fields from the account object
      };

        const token = jwt.sign(payload, 'secret_key', { expiresIn : '1h' });
        return res.json({ success : true, message : 'Login successful', username : username, token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success : false, message : 'Internal server error' });
      }
  });

  router.post('/account/addbook', async (req, res) => {
    const { user, lastSubdirectory } = req.body;
    try {
      // Find the account by username
      const account = await accountModel.findOne({ username: user });
      res.json( {message: `${lastSubdirectory}`} )
      if (account.favBookList.includes(lastSubdirectory)) {
        return res.status(400).json({ success: false, message: "Book already exists in user's favorite list" });
      }
      const result = await accountModel.updateOne(
        { _id: account._id },
        { $push: { favBookList: lastSubdirectory } }
      );
      
      return res.json({ success: true, message: "Book added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
// ------------------------------------------------------------------------------------------//

//                                  BOOKS-RELATED API ROUTES
// ------------------------------------------------------------------------------------------//
  router.get('/books/search', async (req, res) => {
    try {
        // const { q } = req.query; // Extract query parameter from the request
        const  {q, authorTerm}  = req.query;
        // const paramValue = req.query.param;
        // const startIndex = paramValue*25 - 1;
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}+inauthor:${authorTerm}&maxResults=25`);
        res.json(response.data);
      } catch (error) {
        console.error('Error fetching book data:', error);
        res.status(500).json({ error: 'Internal server error' });
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

  router.get('/books/booklist', async (req, res) => {
    const { username } = req.query;
    try {
      const account = await accountModel.findOne({ username });
      if (!account) {
        return res.json({})
      }
      
      
      const bookIds = account.favBookList;
      // res.json({message : bookIds})
      const bookList = [];
      for (const bookId of bookIds) {
        try {
          const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
          const book = response.data;
          bookList.push(book);
        } catch (error) {
          console.error(`Error fetching book data for book ID ${bookId}:`, error);
        }
      }
      res.json({ bookList });
      // for (let i = 0; i < bookIds.length; i++) {
      //   const book = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookIds[i]}`).data;
        
      //   bookList.push(book)
      // }
      // res.json({ bookList : bookList })
    } catch (error) {
      console.error('Error fetching book details:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router