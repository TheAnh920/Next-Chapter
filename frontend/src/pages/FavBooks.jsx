import React, { useEffect , useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/AuthProvider';

const FavBooks = () => {
  
  const  [ bookList , setBookList ]  = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const favBookList = async () => {
      const response = await axios.get('http://localhost:5555/books/booklist', { params: { username : user } });
      setBookList(response.data.bookList)
    }
    if (user) {
      favBookList();
    }
      
  }, [user]);

  
  
  return (
    <div>
      <h1>FavBooks</h1>
      <ul>
        {bookList.map(book => (
          <li key={book.id}>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default FavBooks