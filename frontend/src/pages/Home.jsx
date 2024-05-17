import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/AuthProvider'
import books from "../components/HomeBooks.json"
import "../styles/Home.css"

const Home = () => {
  const [rcmBooks, setRcmBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const user = useAuth()

  useEffect(() => {
    document.title = 'Home | Next Chapter'
    user.token && generateRecs()
  }, [])

  const favBookTagList = JSON.parse(localStorage.getItem('favBookTagList')) || []

  const generateRecs = async () => {
    setLoading(true)
    const response = await axios.post('http://localhost:5555/books/similar', { favBookTagList })
    setRcmBooks(response.data.message)
    setLoading(false)
  }

  function mapBooks(books) {
    return (
      <div id='home-book-grid'>
        {books.map(book => (
          <Link to={`/book/${book.id}`} key={book.id}>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img id='home-book-img' src={"https://books.google.com/books/publisher/content/images/frontcover/" + book.id + "?fife=w400-h600&source=gbs_api"} alt={book.volumeInfo.title} />
                    </td>
                  </tr>
                  <tr>
                    <td id='home-book-title'>
                      {truncateTitle(book.volumeInfo.title)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Link>
        ))}
      </div>
    )
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

  return (
    <div id='home-container-all'>
      <div id='fiction-book-list'>
        <div id='fiction-book-header'>
          <span id='home-trending-text'>Trending Now</span>
          <span id='home-fiction-text'> Fiction</span>
        </div>
        {mapBooks(books.fiction)}
      </div>
      <div id='comics-book-list'>
        <div id='comics-book-header'>
          <span id='home-trending-text'>Trending Now</span>
          <span id='home-comics-text'> Comics & Graphic Novels</span>
        </div>
        {mapBooks(books.comicsAndGraphicNovels)}
      </div>
      <div id='young-adult-book-list'>
        <div id='young-adult-book-header'>
          <span id='home-trending-text'>Trending Now</span>
          <span id='home-young-adult-text'> Young Adult Fiction</span>
        </div>
        {mapBooks(books.youngAdultFiction)}
      </div>
      {user.token &&
        <div id='rcm-book-list'>
          <div id='rcm-book-header'>Based on your taste</div>
          {loading ?
            <div id='spinner'>
              <Spinner />
            </div> :
            mapBooks(rcmBooks)
          }
        </div>
      }
    </div>
  )
}

export default Home