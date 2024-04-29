import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const SingleBookPage = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentUrl = window.location.href;
  const subdirectories = currentUrl.split('/');
  const lastSubdirectory = subdirectories[subdirectories.length - 1];

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/books/single/${lastSubdirectory}`);
        setBook(response.data || null);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [lastSubdirectory]);

  if (loading) { 
    return (<div>Replace me with a loading component...</div>)
  }

  return (
    <div>
      SingleBookPage
      <p>{lastSubdirectory}</p>
      <h1>{book.volumeInfo.title}</h1>
      <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown author'}</p>
      <p>{book.volumeInfo.description || 'No description available'}</p>
    </div>
  )
}

export default SingleBookPage