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
    const storedBookList = localStorage.getItem('bookList')
    if (storedBookList) {
      setBookList(JSON.parse(storedBookList))
    }
    setLoading(false) // Set loading to false once data is loaded
  }, [])
  
  function truncateTitle(title) {
    if (title.length <= 60) {
      return title
    }
    title = title.substring(0, 60)
    const lastSpace = title.lastIndexOf(' ')
    title = title.substring(0, lastSpace)
    return title + '...'
  }

  return (
    <div>
      <header>Favorite Books</header>
      {loading ? (
        <Spinner />
      ) : (
        <div className='grid
                        grid-cols-[auto]
                        min-[119px]:grid-cols-[auto_auto]
                        min-[501px]:grid-cols-[auto_auto_auto]
                        md:grid-cols-[auto_auto_auto_auto]
                        lg:grid-cols-[auto_auto_auto_auto_auto]
                        gap-10 p-2.5'>
          {bookList.map(book => (
            <Link to={`/book/${book.bookId}`} key={book.bookId}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img src={"https://books.google.com/books/publisher/content/images/frontcover/" + book.bookId + "?fife=w400-h600&source=gbs_api"} alt={book.bookTitle} />
                    </td>
                  </tr>
                  <tr>
                    <td className='text-center'>
                      {truncateTitle(book.bookTitle)}
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