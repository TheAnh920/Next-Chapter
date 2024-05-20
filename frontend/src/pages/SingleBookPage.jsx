import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../hooks/AuthProvider'
import { Button } from 'react-bootstrap'
import Spinner from '../components/Spinner'
import "../styles/SingleBookPage.css"

const SingleBookPage = () => {
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const currentUrl = window.location.href
  const subdirectories = currentUrl.split('/')
  const lastSubdirectory = subdirectories[subdirectories.length - 1]
  const user = useAuth()
  const username = user.user

  useEffect(() => {
    document.title = 'Book Details | Next Chapter'
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://next-chapter.onrender.com/books/single/${lastSubdirectory}`)
        setBook(response.data || null)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching book details:', error)
      }
    }
    fetchBookDetails()
  }, [lastSubdirectory])

  if (loading) {
    return (<div id='spinner'><Spinner /></div>)
  }

  function removeDupeCat(array) {
    const set = new Set(array)
    const newArray = Array.from(set)
    return newArray
  }

  const handleClick = async () => {
    const bookTitle = book.volumeInfo.title
    const currentFavBookTagList = JSON.parse(localStorage.getItem('favBookTagList')) || []
    const updatedCatList = removeDupeCat(currentFavBookTagList.concat(book.volumeInfo.categories))
    const response = await axios.post('https://next-chapter.onrender.com/account/addbook', { username, lastSubdirectory, bookTitle, updatedCatList })
    if (response.data.success) {
      const fetchLocal = JSON.parse(localStorage.getItem('bookList')) || []
      const updatedBookIds = [...fetchLocal, response.data.bookData]
      localStorage.setItem('bookList', JSON.stringify(updatedBookIds))
      localStorage.setItem('favBookTagList', JSON.stringify(updatedCatList))
      localStorage.removeItem('rcmBookList')
    }
    alert(response.data.message)
  }

  return (
    <div id="containerAll">
      <div id="container">
        <div id="bookCover">
          <img src={"https://books.google.com/books/publisher/content/images/frontcover/" + book.id + "?fife=w400-h600&source=gbs_api"} alt={book.volumeInfo.title} />
        </div>

        <div id="bookInfo">
          <div id="bookTitle">
            <h1 id="h1BookTitle">{book.volumeInfo.title}</h1>
            {user.token && <Button id="favButton" onClick={handleClick}>Add to Favorites</Button>}
            <p id="bookAuthor">{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown author'}</p>
            <p id='bookPublishDate'>{book.volumeInfo.publishedDate ? 'Year of publication: ' + book.volumeInfo.publishedDate.slice(0, 4) : 'No publication year information. '}</p>
          </div>
        </div>
      </div>

      <div id="desSection">
        <h2 id="Description">Descriptions</h2>
        {book.volumeInfo.description ?
          <p id="bookDescription" dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }} />
          :
          <p id="bookDescription">No descriptions available. </p>
        }
        <h2 id='Categories'>Tags</h2>
        {book.volumeInfo.categories ?
          book.volumeInfo.categories.map(category => (
            <p id='bookCategory' key={category}>{category}</p>
          ))
          :
          <p id='bookCategory'>No tags available. </p>
        }
        <h2 id='purchase-info-header'>Where to buy</h2>
        {book.saleInfo.saleability == 'FOR_SALE' && book.saleInfo.buyLink ?
          <a href={book.saleInfo.buyLink} target='_blank' id='purchase-info'>Get this book</a> :
          <p id='no-purchase-info'>This book is currently not available for purchase. </p>
        }
      </div>
    </div>
  )
}

export default SingleBookPage