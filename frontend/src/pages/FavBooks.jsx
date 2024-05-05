import React, { useEffect , useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/AuthProvider';
import { Link } from 'react-router-dom';

const FavBooks = () => {
  
  const  [ bookList , setBookList ]  = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    // Load bookList from localStorage when component mounts
    const storedBookList = localStorage.getItem('bookList');
    if (storedBookList) {
      setBookList(JSON.parse(storedBookList));
    }
    setLoading(false); // Set loading to false once data is loaded
  }, []);

  if (loading) { 
    return (<div>Loading user's favorite books...</div>)
  }

  return (
    <div>
      <h1>FavBooks</h1>
        <ul>
          {bookList.map((book, index) => (
            <li key={index}>
              <Link to={`/book/${book.bookId}`}>
                <img src={"https://books.google.com/books/publisher/content/images/frontcover/" + book.bookId + "?fife=w400-h600&source=gbs_api"} alt={book.bookTitle} />
                <p>{book.bookTitle}</p>
              </Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default FavBooks