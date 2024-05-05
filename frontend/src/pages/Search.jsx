import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Form, FormControl, Button } from 'react-bootstrap'
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

  function listTags(tags) {
    return (
      tags.map(tag => (
        <>
          {typeof tag === 'string' && <Button className='border rounded-lg border-1 border-black h-14' key={tag}>{tag}</Button>}
          {typeof tag === 'object' && (
            <>
              <Button className='border rounded-lg border-4 border-black h-14' key={tag.name}>{tag.name}</Button>
              {/* {listTags(tag.subTags)} */}
            </>
          )}
        </>
      ))
    )
  }

  return (
    <div>
      <header>Search</header>
      <div>
        <Form>
          <FormControl type='Text' placeholder='search for books...' className='mr-sm-2' onChange={(e) => setSearchTerm(e.target.value)} />
          <Button onClick={function () { setAdvancedToggle(!advancedToggle) }}>Show advanced options</Button>
          {advancedToggle && (
            <>
              <div>
                <FormControl type='Text' placeholder='search for authors...' className='mr-sm-2' onChange={(e) => setAuthorTerm(e.target.value)} />
              </div>
              Filter tags
              <div className='grid grid-cols-1 min-[330px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 min-[896px]:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-1 p-1'>
                {listTags(tagsList)}
              </div>
            </>)}
          <div>
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </Form>
      </div>
      <div className='grid grid-cols-1 min-[119px]:grid-cols-2 min-[501px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 p-2.5'>
        {books.map(book => (
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
    </div>
  )
}

export default Search