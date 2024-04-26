import React, { useState } from 'react';
import axios from 'axios';

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5555/books/search', {
        params: {
          q: searchTerm,
        },
      });
      setBooks(response.data.items || []);
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Enter search term" 
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown author'}</p>
            {/* <p>{book.volumeInfo.description || 'No description available'}</p> */}
            <p><img src= {"https://books.google.com/books/publisher/content/images/frontcover/" + book.id + "?fife=w400-h600&source=gbs_api"} alt= {book.volumeInfo.title} /></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;