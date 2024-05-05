import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../hooks/AuthProvider'
import Spinner from '../components/Spinner'

const FavBooks = () => {
  
  const [bookList, setBookList] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    // Load bookList from localStorage when component mounts
    const storedBookList = localStorage.getItem('bookList');
    if (storedBookList) {
      setBookList(JSON.parse(storedBookList));
    }
    setLoading(false); // Set loading to false once data is loaded
  }, []);

  return (
    <div>
      <header>Favorite Books</header>
      {loading ? (
        <Spinner />
      ) : (
        <div className='grid grid-cols-1 min-[119px]:grid-cols-2 min-[501px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 p-2.5'>
          {bookList.map(book => (
            <Link to={`/book/${book.id}`} key={book.id}>
              <table>
                <tbody>
                  <tr className='h-8'>
                    <td>
                      <img src={"https://books.google.com/books/publisher/content/images/frontcover/" + book.id + "?fife=w400-h600&source=gbs_api"} alt={book.volumeInfo.title} />
                    </td>
                  </tr>
                  <tr className='h-8'>
                    <td className='text-center'>
                      {book.volumeInfo.title}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default FavBooks