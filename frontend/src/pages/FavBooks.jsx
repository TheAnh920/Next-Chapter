import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../hooks/AuthProvider'
import Spinner from '../components/Spinner'

const FavBooks = () => {
  const [bookList, setBookList] = useState([])
  const { user } = useAuth()
  const bookIds = JSON.parse(localStorage.getItem('bookList'))
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const favBookList = async () => {
      setLoading(true)
      const response = await axios.get('http://localhost:5555/books/booklist', { params: { username: user } })
      setBookList(response.data.bookList)
      setLoading(false)
    }
    if (user) {
      favBookList()
    }
  }, [user])

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