import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Form, FormControl, Button } from 'react-bootstrap'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [authorTerm, setAuthorTerm] = useState('')
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5555/books/search', {
        params: {
          q: searchTerm,
          authorTerm: authorTerm,
        },
      });
      setBooks(response.data.items || []);
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
  };

  return (
    <div>
      <header>Search</header>
      <div>
        <Form>
          <FormControl
            type='Text'
            placeholder='Book'
            className='mr-sm-2'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FormControl
            type='Text'
            placeholder='Author'
            className='mr-sm-2'
            onChange={(e) => setAuthorTerm(e.target.value)}
          />
          <Button variant='outline-info' onClick={handleSearch}>Search</Button>
        </Form>
      </div>
      <div className='grid grid-cols-5 content-center gap-10 p-2.5'>
        {books.map(book => (
          <table>
            <tbody>
              <tr className='h-8'>
                <td>
                  <Link to={`/book/${book.id}`}>
                    <img src={"https://books.google.com/books/publisher/content/images/frontcover/" + book.id + "?fife=w400-h600&source=gbs_api"} alt={book.volumeInfo.title} />
                  </Link>
                </td>
              </tr>
              <tr className='h-8'>
                <td className='text-center'>
                  <Link to={`/book/${book.id}`}>
                    {book.volumeInfo.title}
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  )
}

export default Search