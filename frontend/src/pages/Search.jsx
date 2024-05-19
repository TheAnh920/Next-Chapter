import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Form, FormControl, Button } from 'react-bootstrap'
import tagsList from '../components/Categories'
import '../styles/Search.css'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [authorTerm, setAuthorTerm] = useState('')
  // const [tagTerms, setTagTerms] = useState([])
  const tagTerms = []
  const [books, setBooks] = useState([])
  const [searched, setSearched] = useState(false)
  const [advancedToggle, setAdvancedToggle] = useState(false)
  const [tagVisibility, setTagVisibility] = useState({})
  const [tagSelection, setTagSelection] = useState({})
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    document.title = 'Search | Next Chapter'
  }, [])

  const handleSearch = async () => {
    for (const tag in tagSelection) {
      if (tagSelection[tag]) {
        tagTerms.push(tag)
      }
    }
    // console.log(tagTerms)
    try {
      const response = await axios.get('http://localhost:5555/books/search', {
        params: {
          q: searchTerm,
          authorTerm: authorTerm,
          tagTerms: tagTerms.join(','),
          startIndex: startIndex,
        },
      })
      setBooks(response.data.items || [])
      setSearched(true)
    } catch (error) {
      console.error('Error fetching book data:', error)
    }
  }

  const updateSearch = async () => {
    setStartIndex(startIndex + 24)
    for (const tag in tagSelection) {
      if (tagSelection[tag]) {
        tagTerms.push(tag)
      }
    }
    // console.log(tagTerms)
    try {
      const response = await axios.get('http://localhost:5555/books/search', {
        params: {
          q: searchTerm,
          authorTerm: authorTerm,
          tagTerms: tagTerms.join(','),
          maxResults: startIndex,
        },
      })
      setBooks(response.data.items || [])
      setSearched(true)
    } catch (error) {
      console.error('Error fetching book data:', error)
    }
  }

  const concatTags = (tagName, motherTagName) => {
    if (motherTagName) {
      if (tagName == 'All') {
        return motherTagName
      } else {
        return motherTagName.concat(' / ', tagName)
      }
    }
    return tagName
  }

  function toggleTagVisibility(tag, motherTagName) {
    setTagVisibility({
      ...tagVisibility,
      [concatTags(tag.name, motherTagName)]: !tagVisibility[concatTags(tag.name, motherTagName)],
    })
  }

  function toggleTagSelection(tagName, motherTagName) {
    setTagSelection({
      ...tagSelection,
      [concatTags(tagName, motherTagName)]: !tagSelection[concatTags(tagName, motherTagName)],
    })
  }

  function listTags(tags, motherTagName, tagLevel) {
    return (
      tags.map(tag => (
        typeof tag === 'string' ?
          <Button
            id={'tag-button-' + tagSelection[concatTags(tag, motherTagName)] + '-level-' + tagLevel}
            key={tag}
            onClick={function () {
              toggleTagSelection(tag, motherTagName)
            }}>
            {tag}
          </Button> :
          [
            <Button
              id={'mother-tag-button-' + tagVisibility[concatTags(tag.name, motherTagName)] + '-level-' + tagLevel}
              key={tag.name}
              onClick={() => toggleTagVisibility(tag, motherTagName)}>
              {tag.name}
            </Button>,
            tagVisibility[concatTags(tag.name, motherTagName)] && listTags(tag.subTags, concatTags(tag.name, motherTagName), tagLevel + 1)
          ]
      ))
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
    <div id="Search-Container-All">
      <Form>
        <div id="SearchForm">
          <FormControl
            id='book-search-input'
            type='text'
            name='title'
            placeholder='search for books...'
            className='mr-sm-2'
            onChange={(e) => setSearchTerm(e.target.value)} />
          {advancedToggle && (
            <FormControl
              id='author-search-input'
              type='text'
              name='author'
              placeholder='search for authors...'
              className='mr-sm-2'
              onChange={(e) => setAuthorTerm(e.target.value)} />
          )}
          <Button id="SearchButton" onClick={handleSearch}>Search</Button>
        </div>
        <div id='show-advanced-container'>
          <Button id='show-advanced-button' onClick={function () { setAdvancedToggle(!advancedToggle) }}>Show advanced options</Button>
        </div>
        {/* <Button onClick={function () {
          // console.log(tagVisibility)
          // setTagTerms([])
          console.log(tagSelection)
          for (const tag in tagSelection) {
            if (tagSelection[tag]) {
              // setTagTerms([...tagTerms, tag])
              tagTerms.push(tag)
            }
          }
        }}>Add to tagTerms</Button> */}
        {/* <Button onClick={function () {
          console.log(tagTerms)
        }}>Show tagTerms</Button> */}
        {advancedToggle && (
          <div className='grid
                          grid-cols-1
                          min-[330px]:grid-cols-2
                          sm:grid-cols-3
                          md:grid-cols-4
                          min-[896px]:grid-cols-5
                          lg:grid-cols-6
                          xl:grid-cols-7
                          2xl:grid-cols-8
                          gap-1 p-1' id="all-tags">
            {listTags(tagsList, null, 1)}
          </div>
        )}
      </Form>
      <div id="Separator">
        __________________________________________________________________________
      </div>
      {/* Book cover */}
      {searched && (
        books.length == 0 ?
          <div id="search-no-results">No results found. </div> :
          <div id="book-grid">
            {books.map(book => (
              <Link to={`/book/${book.id}`} key={book.id}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img id="book-img" src={"https://books.google.com/books/publisher/content/images/frontcover/" + book.id + "?fife=w400-h600&source=gbs_api"} alt={book.volumeInfo.title} />
                      </td>
                    </tr>
                    <tr>
                      <td id='book-title' className='text-center'>
                        {truncateTitle(book.volumeInfo.title)}
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

export default Search