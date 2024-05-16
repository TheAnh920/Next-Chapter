const express = require('express');
const accountModel = require('../models/accountModel')
const router = express.Router();
const axios = require('axios');
const jwt = require('jsonwebtoken')

  
//                                  ACCOUNT-RELATED API ROUTES
// ------------------------------------------------------------------------------------------//
  router.post('/account/signup', async(req, res) => {
    try {
        const { username, password } = req.body
        const usernameExists = await accountModel.findOne({ username })

        if (usernameExists) {
            res.status(400).json({ message : "Username is already taken."})
        } else {
            try {
                const account = await accountModel.create({username, password})
                res.status(200).json({ success : true , message : "Account created successfully"})
            } catch (error) {
                res.status(400).json({message : error.message})
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

        const favBookList = account.favBookList;
        const favBookTagList = account.favBookTagList

        const payload = {
          userId : account._id,
          username : account.username,
          // Add other necessary fields from the account object
      };

        const token = jwt.sign(payload, 'secret_key', { expiresIn : '1h' });
        return res.json({ success : true, message : 'Login successful', username : username, favBookList : favBookList, favBookTagList : favBookTagList , token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success : false, message : 'Internal server error' });
      }
  });

  router.post('/account/addbook', async (req, res) => {
    const { username, lastSubdirectory , bookTitle , updatedCatList } = req.body;

    try {
      // Find the account by username
      const account = await accountModel.findOne({ username : username });

      const isBookIdExists = account.favBookList.some(book => book.bookId === lastSubdirectory);
      
      if (isBookIdExists) {
        return res.json({ success: false, message: "Already added to favorites." });
      }

      const result = await accountModel.updateOne(
        { _id: account._id },
        { 
          $push: { 
            favBookList: 
              { 
                bookId: lastSubdirectory, 
                bookTitle: bookTitle 
              } 
          },

          $set: {
            favBookTagList : updatedCatList
          }
                    
        }
      );
      
      return res.json({ success: true, message: "Book added successfully", bookData: { bookId: lastSubdirectory, bookTitle: bookTitle } });
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
        const { q, authorTerm, tagTerms, startIndex } = req.query;
        let searchQuery = `${q}+inauthor:${authorTerm}`;
        if (tagTerms) {
          const genresQuery = tagTerms.split(',').map(tag => `subject:${tag}`).join('+');
          searchQuery += `+${genresQuery}`;
        }

        // const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=25`);
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=25&startIndex=${startIndex}`);
        console.log(response.data.items);
        res.json(response.data);
      } catch (error) {
        console.error('Error fetching book data:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
  });

  // router.get('/books/search', async (req, res) => {
  //   try {
  //     const { q, authorTerm, tagTerms, maxResults } = req.query;
  //     let searchQuery = `${q}+inauthor:${authorTerm}`;
  //     if (tagTerms) {
  //       const genresQuery = tagTerms.split(',').map(tag => `subject:${tag}`).join('+');
  //       searchQuery += `+${genresQuery}`;
  //     }
      
  //     let allBooks = [];
  //     let startIndex = 0;

  //     while (allBooks.length < maxResults) {
  //       const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=${Math.min(40, maxResults - allBooks.length)}&startIndex=${startIndex}`);
  //       allBooks = allBooks.concat(response.data.items);
  //       // console.log(allBooks.length)
  //       // console.log(response.data.items)
  //       startIndex += 25;

  //       // If there are no more results to fetch, break out of the loop
  //       if (!response.data.items || response.data.items.length < 25) {
  //         break;
  //       }
  //     }
  //     console.log(allBooks.length)
  //     res.json(allBooks.slice(0, maxResults));
  //   } catch (error) {
  //     console.error('Error fetching book data:', error);
  //     res.status(500).json({ error: 'Internal server error' });
  //   }
  // });

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
    } catch (error) {
      console.error('Error fetching book details:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.get('/books/algo-rec', async (req, res) => {
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

  router.post('/books/similar', async (req, res) => {
    const { favBookTagList } = req.body;
    try {
      const fetchBooksForCategory = async (category) => {
        // Add a delay (in milliseconds) between each API call
        const delay = 2000; // 2 second delay
        await new Promise(resolve => setTimeout(resolve, delay));
  
        // Call Google Books API to fetch books for the category
        return axios.get('https://www.googleapis.com/books/v1/volumes', {
          params: {
            q: `subject:"${category}"`,
            maxResults: 10,
          },
        });
      };
  
      // Make sequential requests for each category with a delay
      const responses = [];
      for (const category of favBookTagList) {
        const response = await fetchBooksForCategory(category);
        responses.push(response);
      }

      const books = responses.flatMap(response => response.data.items);

      books.sort((a, b) => {
        const categoriesA = a.volumeInfo.categories || [];
        const categoriesB = b.volumeInfo.categories || [];
  
        // Check if books have the specified categories
        const hasCategoriesA = favBookTagList.every(category =>
          categoriesA.some(c => c.includes(category))
        );
        const hasCategoriesB = favBookTagList.every(category =>
          categoriesB.some(c => c.includes(category))
        );
  
        // Prioritize books that have all specified categories
        if (hasCategoriesA && !hasCategoriesB) {
          return -1; // Book A should come before Book B
        } else if (!hasCategoriesA && hasCategoriesB) {
          return 1; // Book B should come before Book A
        }
  
        // If both books have all specified categories or neither have all categories, compare their titles
        return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
      });
  
      // Select the top 10 most relevant books
      const top10Books = books.slice(0, 10);
  
      // Send the top 10 books array in the response
      res.json({ success : true, message : top10Books});
    } catch (error) {
      console.error('Error generating books: ', error);
      res.status(500).json({ error : 'Internal server error' });
    }
  })

module.exports = router