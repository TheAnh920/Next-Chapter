import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../hooks/AuthProvider';
import { Button } from 'react-bootstrap';

const SingleBookPage = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentUrl = window.location.href;
  const subdirectories = currentUrl.split('/');
  const lastSubdirectory = subdirectories[subdirectories.length - 1];
  const user = useAuth();

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

  const handleClick = async () => {
    const response = await axios.post('http://localhost:5555/account/addbook', { user, lastSubdirectory })
    if (response.data.success) {
      const fetchLocal = JSON.parse(localStorage.getItem('bookList')) || [];
      const updatedBookIds = [...fetchLocal, lastSubdirectory];
      localStorage.setItem('bookList', JSON.stringify(updatedBookIds))
    }


  };

  return (
    <div>
      {user.token && <Button onClick={handleClick}>Add to Favorites</Button>}
      <img src={"https://books.google.com/books/publisher/content/images/frontcover/" + book.id + "?fife=w400-h600&source=gbs_api"} alt={book.volumeInfo.title} />
      <h1>{book.volumeInfo.title}</h1>
      <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown author'}</p>
      <p>{book.volumeInfo.description || 'No description available'}</p>
    </div>
  )
}

export default SingleBookPage