import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/AuthProvider'
import { Button } from 'react-bootstrap'

const Home = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const bookIds = JSON.parse(localStorage.getItem('bookList'));
    const user = useAuth();

    const favBookTagList = JSON.parse(localStorage.getItem('favBookTagList')) || [];

    const handleClick = async () => {
        const response = await axios.post('http://localhost:5555/books/similar', { favBookTagList });
        console.log(response.data.message);
    }

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Home</h1>
            </div>
            <Button onClick={handleClick}>Fire up the engines!</Button>
            {loading ? (
                <Spinner />
            ) : (
                <table className='w-full border-separate border-spacing-2'>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md'>
                                    <Link to={`/book/${book._id}`}>
                                        {book.cover}
                                    </Link>
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <Link to={`/book/${book._id}`}>
                                        {book.title}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Home