import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Form, FormControl, Button } from 'react-bootstrap'
// import { tagsList, bigTags } from '../components/Categories'
import tagsList from '../components/Categories'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [authorTerm, setAuthorTerm] = useState('')
  const [books, setBooks] = useState([])
  const [advancedToggle, setAdvancedToggle] = useState(false)

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5555/books/search', {
        params: {
          q: searchTerm,
          authorTerm: authorTerm,
        },
      })
      setBooks(response.data.items || [])
    } catch (error) {
      console.error('Error fetching book data:', error)
    }
  }

  function listTags(tags, motherTagName) {
    return (
      tags.map(tag => (
        typeof tag === 'string' ?
          <Button
            className='border rounded-lg border-1 border-black h-14'
            key={tag}
            onClick={function () {
              console.log(motherTagName.concat(' / ', tag))
            }}>
            {tag}
          </Button> :
          [
            <Button
              className='border rounded-lg border-4 border-black h-14'
              key={tag.name}
              onClick={function () {
              }}>
              {tag.name}
            </Button>,
            listTags(tag.subTags, motherTagName.concat(' / ', tag.name))
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
    <div>
      <header>Search</header>
      <div>
        <Form>
          <FormControl
            type='text'
            name='title'
            placeholder='search for books...'
            className='mr-sm-2'
            onChange={(e) => setSearchTerm(e.target.value)} />
          <Button onClick={function () { setAdvancedToggle(!advancedToggle) }}>Show advanced options</Button>
          {advancedToggle && (
            <>
              <div>
                <FormControl
                  type='text'
                  name='author'
                  placeholder='search for authors...'
                  className='mr-sm-2'
                  onChange={(e) => setAuthorTerm(e.target.value)} />
              </div>
              Filter tags
              <div className='grid grid-cols-1 min-[330px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 min-[896px]:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-1 p-1'>
                {tagsList.map(tag => (
                  typeof tag === 'string' ?
                    <Button
                      className='border rounded-lg border-1 border-black h-14'
                      key={tag}
                      onClick={function () {
                        console.log(tag)
                      }}>{tag}</Button> :
                    [
                      <Button
                        className='border rounded-lg border-4 border-black h-14'
                        key={tag.name}
                        onClick={function () {
                        }}>{tag.name}</Button>,
                      // listTags(tag.subTags, tag.name)
                    ]
                ))}
              </div>
            </>)}
          <div>
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </Form>
      </div>
      <div className='grid
                      grid-cols-[auto]
                      min-[119px]:grid-cols-[auto_auto]
                      min-[501px]:grid-cols-[auto_auto_auto]
                      md:grid-cols-[auto_auto_auto_auto]
                      lg:grid-cols-[auto_auto_auto_auto_auto]
                      gap-10 p-2.5'>
        {books.map(book => (
          <Link to={`/book/${book.id}`} key={book.id}>
            <table className='border-2'>
              <tbody>
                <tr>
                  <td>
                    <img src={"https://books.google.com/books/publisher/content/images/frontcover/" + book.id + "?fife=w400-h600&source=gbs_api"} alt={book.volumeInfo.title} />
                  </td>
                </tr>
                <tr>
                  <td className='text-center'>
                    {truncateTitle(book.volumeInfo.title)}
                  </td>
                </tr>
              </tbody>
            </table>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Search