import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { FaStar } from "react-icons/fa6"
import axios from 'axios'
import "../styles/TopicSearch.css"
import { Button, FormControl, Form } from 'react-bootstrap'

const TopicSearch = () => {
  const [flaskSearchTerm, setFlaskSearchTerm] = useState('')
  const [finalSearchTerm, setFinalSearchTerm] = useState('')
  const renderTrendingList = []
  const [trendingBooks, setTrendingBooks] = useState([])
  const [books, setBooks] = useState([])
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    document.title = 'Topic Search | Next Chapter'
    getTrendingBooks()
  }, [])

  const getTrendingBooks = async () => {
    const response = await axios.post('https://next-chapter-flask-api.onrender.com/books_by_ratings')
    console.log(response.data.bookData)

    for (let i = 0; i < response.data.bookData[0].length; i++) {
      renderTrendingList.push({
        title: response.data.bookData[0][i],
        author: response.data.bookData[1][i],
        image: response.data.bookData[2][i],
        publisher: response.data.bookData[3][i],
        ratingCount: response.data.bookData[4][i],
        rating: response.data.bookData[5][i]
      })
    }
    setTrendingBooks(renderTrendingList.slice(0, 50))
  }

  function truncateTitle(title) {
    if (title.length <= 60) {
      return title
    }
    title = title.substring(0, 60)
    const lastSpace = title.lastIndexOf(' ')
    title = title.substring(0, lastSpace)
    return title + '...'
  }

  const handleSearch = async () => {
    setFinalSearchTerm(flaskSearchTerm)
    const response = await axios.post('https://next-chapter-flask-api.onrender.com/ml_search', { flaskSearchTerm })
    console.log(response.data.bookData)
    setBooks(response.data.bookData)
    setSearched(true)
  }

  return (
    <div id='topic-search-all'>
      {/* <Button onClick={function () {
        console.log(trendingBooks)
      }}>log </Button> */}
      <div id='topic-search-form'>
        <Form>
          <FormControl
            id='topic-search-input'
            type='text'
            name='title'
            placeholder='search for topics...'
            onChange={(e) => setFlaskSearchTerm(e.target.value)} />
        </Form>
        <Button id='topic-search-button' onClick={handleSearch}>Search</Button>
      </div>
      {searched &&
        [<div id='topic-book-header' key='topic-book-header'>
          {'Related to "' + finalSearchTerm + '"'}
        </div>,
        <div id='book-grid' key='topic-book-search-list'>
          {books.map(book => (
            <table key={book[2]}>
              <tbody>
                <tr>
                  <td>
                    <img id='topic-book-img' src={book[2]} alt={book[0]} />
                  </td>
                </tr>
                <tr>
                  <td id='topic-book-title'>
                    {truncateTitle(book[0])}
                  </td>
                </tr>
                <tr>
                  <td id='topic-book-author'>
                    {book[1]}
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>]
      }
      <div id='trending-books-header'>
        Highest Rated Books
      </div>
      <div id='book-grid'>
        {trendingBooks.map(book => (
          <table key={book.image}>
            <tbody>
              <tr>
                <td>
                  <img id='trending-book-img' src={book.image} alt={book.title} />
                </td>
              </tr>
              <tr>
                <td id='trending-book-title'>
                  {truncateTitle(book.title)}
                </td>
              </tr>
              <tr>
                <td id='trending-book-author'>
                  {book.author}
                </td>
              </tr>
              <tr>
                <td id='trending-book-rating'>
                  {[[...Array(book.rating)].map((i) =>
                    <span id='rating-check' key={i}>
                      <FaStar id='trending-star' />
                    </span>
                  ),
                  [...Array(5 - book.rating)].map((i) =>
                    <span key={i}>
                      <FaStar id='trending-star' />
                    </span>
                  )]}
                </td>
              </tr>
              <tr>
                <td id='trending-book-rating-count'>
                  {'(' + book.ratingCount + ')'}
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  )
}

export default TopicSearch