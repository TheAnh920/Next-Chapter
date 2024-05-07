import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../hooks/AuthProvider';
import { Button } from 'react-bootstrap';
import Spinner from '../components/Spinner';

const SingleBookPage = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentUrl = window.location.href;
  const subdirectories = currentUrl.split('/');
  const lastSubdirectory = subdirectories[subdirectories.length - 1];
  const user = useAuth();
  const username = user.user;

  const testA = ['peepee', 'poopoo', 'penis']
  const testB = ['peepee', 'poop']

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
    return (<Spinner />)
  }

  // console.log('Array A: ', testA)
  // console.log('Array B: ', testB)
  // const mergedArray = testA.concat(testB)
  // console.log('After combining and removing dupes: ', removeDupeCat(mergedArray))


  function removeDupeCat(array) {
    const set = new Set(array);
    const newArray = Array.from(set);
    return newArray;
  }

  const handleClick = async () => {
    const bookTitle = book.volumeInfo.title;
    const currentFavBookTagList = JSON.parse(localStorage.getItem('favBookTagList')) || [];
    const updatedCatList = removeDupeCat(currentFavBookTagList.concat(book.volumeInfo.categories));
    // const favBookCatList = removeDupeCat()
    const response = await axios.post('http://localhost:5555/account/addbook', { username, lastSubdirectory, bookTitle, updatedCatList })
    if (response.data.success) {
      const fetchLocal = JSON.parse(localStorage.getItem('bookList')) || [];
      const updatedBookIds = [...fetchLocal, response.data.bookData];
      localStorage.setItem('bookList', JSON.stringify(updatedBookIds))
      localStorage.setItem('favBookTagList', JSON.stringify(updatedCatList))
    }
    console.log(response.data.message);
  };

  return (
    <div>
      {user.token && <Button onClick={handleClick}>Add to Favorites</Button>}
      <img src={"https://books.google.com/books/publisher/content/images/frontcover/" + book.id + "?fife=w400-h600&source=gbs_api"} alt={book.volumeInfo.title} />
      <h1>{book.volumeInfo.title}</h1>
      <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown author'}</p>
      <p>{book.volumeInfo.description || 'No description available'}</p>
      <p>{book.volumeInfo.categories && book.volumeInfo.categories.join('; ')}</p>
    </div>
  )
}

export default SingleBookPage