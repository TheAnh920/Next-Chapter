import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../hooks/AuthProvider';
import { Button } from 'react-bootstrap';
// import "../styles/SingleBookPage.css"

const SingleBookPage = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentUrl = window.location.href;
  const subdirectories = currentUrl.split('/');
  const lastSubdirectory = subdirectories[subdirectories.length - 1];
  const { user } = useAuth();

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
    const response = await axios.post('http://localhost:5555/account/addbook', { user , lastSubdirectory })
    if (response.data.success) {
      const fetchLocal = JSON.parse(localStorage.getItem('bookList')) || [];
      const updatedBookIds = [...fetchLocal, lastSubdirectory];
      localStorage.setItem('bookList', JSON.stringify(updatedBookIds))
    }
    
    
  };

  return (
    <div id = "containerAll">
      <div id = "container">
        {/* SingleBookPage<br/>  */}
        {/* <Button onClick={handleClick} label="Add to favorites" />
        <Button onClick={handleClick}> Add to Favorites </Button> */}
        <div id = "bookCover">
        <img src= {"https://books.google.com/books/publisher/content/images/frontcover/" + book.id + "?fife=w400-h600&source=gbs_api"} alt= {book.volumeInfo.title} />
        </div>

        <div id = "bookInfo">
          <div id = "bookTitle">
          <h1 id = "h1BookTitle">{book.volumeInfo.title}</h1>
          
          <Button  onClick={handleClick} label="Add to favorites" />
          <Button id = "favButton" onClick={handleClick}> Add to Favorites </Button>
        
          <p id = "bookAuthor">{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown author'}</p>
          </div>   
        </div>
      </div>
      
      <div id = "desSection">
          <h2 id = "Description">Description</h2>
        <p id = "bookDescription">{book.volumeInfo.description || 'No description available'}</p>
      </div>
    </div>

  )
}

export default SingleBookPage