import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'
import axios from 'axios'
import "../styles/FavBooks.css"
import { Button, FormControl, Form } from 'react-bootstrap'

const FlaskTesting = () => {

    const [flaskSearchTerm , setFlaskSearchTerm] = useState('')

    const handleButtonPress1 = async () => {
        const response = await axios.post('http://127.0.0.1:5000/confirm')
        console.log(response.data.message)
    }

    const handleButtonPress2 = async () => {
        const response = await axios.post('http://127.0.0.1:5000/books_by_ratings')
        console.log(response.data.bookData)
    }

    const handleButtonPress3 = async () => {
        const response = await axios.post('http://127.0.0.1:5000/ml_search', { flaskSearchTerm })
        console.log(response.data.bookData)
    }


    return (
        <div>
            Hello
            <Button onClick={handleButtonPress1}>REV UP THE BUGATTI</Button>
            <Button onClick={handleButtonPress2}>Try to get book data</Button>
            <Form>
                <FormControl onChange={(e) => setFlaskSearchTerm(e.target.value)}>

                </FormControl>
            </Form>
            <Button onClick={handleButtonPress3}>Search for books</Button>

        </div>
    )
}

export default FlaskTesting