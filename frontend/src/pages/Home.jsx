import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'

const Home = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const bookIds = JSON.parse(localStorage.getItem('bookList'));

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Home</h1>
            </div>
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