import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'
import "../styles/FavBooks.css"

const FavBooks = () => {
  const [bookList, setBookList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = 'Favorites | Next Chapter'
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
      <header id='favbooks-header'>Favorites</header>
      {loading ? (
        <Spinner />
      ) : (
        <div id='fav-books-list'>
          {bookList.map(book => (
            <Link to={`/book/${book.bookId}`} key={book.bookId}>
              <div id="fav-container">
                <table>
                  <tbody>
                    <tr id="fav-book">
                      <td>
                        <img src={"https://books.google.com/books/publisher/content/images/frontcover/" + book.bookId + "?fife=w400-h600&source=gbs_api"} alt={book.bookTitle} />
                      </td>
                    </tr>
                    <tr>
                      <td id='book-title' className='text-center'>
                        {truncateTitle(book.bookTitle)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default FavBooks