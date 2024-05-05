import React, { useState } from 'react'
import { NavLink as Link } from 'react-router-dom'
import axios from 'axios'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Logo from '../assets/logo-no-background.png'
import { useAuth } from '../hooks/AuthProvider'

const NavBar = () => {
  const auth = useAuth()
  const user = useAuth()
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
    <Navbar id= "Navbar">
      <Nav id = "Logo">
        <Link to={`/`}>
          <img src={Logo} alt="Next Chapter logo" className='h-20'/>
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
      <Nav id = "Nav-Content">
        <Link to={`/search`}id= "Ad-Search">Advanced Search </Link>
        {!user.token ? (
          <>
            <Link to={`/login`} id = "Sign-In"> Sign In </Link>
            <Link to={`/register`} id = "Register">Register</Link>
          </>
        ) : (
          <>
            <Link to={`/mytags`} id = "Fav-Tags">Favorite Tags </Link>
            <Link to={`/mybooks`} id = "Fav-Books">Favorite Books </Link>
            <Button variant='outline-info' id ="Sign-Out" onClick={() => auth.logOut()}> Sign Out</Button>
          </>
        )}
      </Nav>
    </Navbar>
  )
}

export default NavBar