import React, { useState } from 'react'
import { NavLink as Link } from 'react-router-dom'
import axios from 'axios'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Logo from '../assets/react.svg'
import { useAuth } from '../hooks/AuthProvider'

const NavBar = () => {
  const auth = useAuth()
  // const user = this.props.user;

  // const [searchTerm, setSearchTerm] = useState('');
  // const [books, setBooks] = useState([]);

  // const handleSearch = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5555/books/search', {
  //       params: {
  //         q: searchTerm,
  //       },
  //     });
  //     setBooks(response.data.items || []);
  //   } catch (error) {
  //     console.error('Error fetching book data:', error);
  //   }
  // };

  return (
    <Navbar>
      <Nav>
        <Link to={`/`}>
          <img src={Logo} alt="Next Chapter logo" />
        </Link>
      </Nav>
      {/* <Form inline>
        <FormControl
          type='Text'
          placeholder='Search'
          className='mr-sm-2'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to={`/search`}>
          <Button variant='outline-info' onClick={handleSearch}>Search</Button>
        </Link>
      </Form> */}
      <Nav>
        <Link to={`/search`}>Advanced Search</Link>
        {/* {user ? ( */}
          <>
            <Link to={`/login`}>Sign In</Link>
            <Link to={`/register`}>Register</Link>
          </>
        {/* ) : ( */}
        <>
          <Link to={`/mytags`}>Favorite Tags</Link>
          <Link to={`/mybooks`}>Favorite Books</Link>
          <Button variant='outline-info' onClick={() => auth.logOut()}>Sign Out</Button>
        </>
        {/* )} */}
      </Nav>
    </Navbar>
  )
}

export default NavBar