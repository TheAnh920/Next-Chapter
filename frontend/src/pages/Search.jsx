import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Form, FormControl, Button } from 'react-bootstrap'
import { tagsList, uniqueTags } from '../components/Categories'
import '../styles/Search.css'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [authorTerm, setAuthorTerm] = useState('')
  const [books, setBooks] = useState([])
  const [searched, setSearched] = useState(false)
  const [advancedToggle, setAdvancedToggle] = useState(false)
  const [tagVisibility, setTagVisibility] = useState({})

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5555/books/search', {
        params: {
          q: searchTerm,
          authorTerm: authorTerm,
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
      return motherTagName.concat(' / ', tagName)
    }
    return tagName
  }

  function toggleTagVisibility(tag, motherTagName) {
    setTagVisibility({
      ...tagVisibility,
      [concatTags(tag.name, motherTagName)]: !tagVisibility[concatTags(tag.name, motherTagName)],
    })
  }

  function listTags(tags, motherTagName, tagLevel) {
    return (
      tags.map(tag => (
        typeof tag === 'string' ?
          <Button
            id={'tag-button-level-' + tagLevel}
            key={tag}
            onClick={function () {
              console.log(concatTags(tag, motherTagName))
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

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index
  }
  const notUniqueTagList = []
  function getAllTags(tagList) {
    tagList.map(tag => (
      typeof tag === 'string' ?
        [notUniqueTagList.push(tag),
        ] :
        [notUniqueTagList.push(tag.name),
        getAllTags(tag.subTags)]
    ))
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
        <Button id='show-advanced-button' onClick={function () { setAdvancedToggle(!advancedToggle) }}>Show advanced options</Button>
        {/* <Button onClick={function () {
          console.log(tagVisibility)
        }}>log</Button> */}
        {/* <Button onClick={function () {
          getAllTags(tagsList)
          console.log(notUniqueTagList.filter(onlyUnique).sort())
          console.log(notUniqueTagList.filter(onlyUnique).sort().slice(100))
          console.log(notUniqueTagList.filter(onlyUnique).sort().slice(200))
          console.log(notUniqueTagList.filter(onlyUnique).sort().slice(300))
        }}>get tags</Button> */}
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
        ____________________________________________________________________________________________
      </div>
      {/* Book cover */}
      {searched && (
        books.length == 0 ?
          <div id="search-no-results">No results found. </div> :
          <div id="search-res"
            className='grid
                       grid-cols-[auto]
                       min-[119px]:grid-cols-[auto_auto]
                       min-[501px]:grid-cols-[auto_auto_auto]
                       md:grid-cols-[auto_auto_auto_auto]
                       lg:grid-cols-[auto_auto_auto_auto_auto]
                       gap-10 p-2.5'>
            {books.map(book => (
              <Link to={`/book/${book.id}`} key={book.id}>
                <table>
                  <tbody>
                    <tr id="book-img">
                      <td>
                        <img src={"https://books.google.com/books/publisher/content/images/frontcover/" + book.id + "?fife=w400-h600&source=gbs_api"} alt={book.volumeInfo.title} />
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