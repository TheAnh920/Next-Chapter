import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Logo from '../assets/react.svg'

const NavBar = () => {
  // const user = this.props.user;

  return (
    <Navbar>
      <Nav>
        <Link to={`/`}>
          <img src={Logo} alt="Next Chapter logo" />
        </Link>
      </Nav>
      <Form inline>
        <FormControl
          type='Text'
          placeholder='Search'
          className='mr-sm-2'
        />
        <Button variant='outline-info'>Search</Button>
      </Form>
      <Nav>
        <Link to={`/search`}>Advanced Search</Link>
        {/* {user ? (
          <>
            <Link to={`/login`}>Sign In</Link>
            <Link to={`/register`}>Register</Link>
          </>
        ) : ( */}
          <>
            <Link to={`/mytags`}>Favorite Tags</Link>
            <Link to={`/mybooks`}>Favorite Books</Link>
            <Link to={`/`}>Sign Out</Link>
          </>
        {/* )} */}
      </Nav>
    </Navbar>
  )
}

export default NavBar