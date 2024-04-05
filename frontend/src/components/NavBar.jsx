import React from 'react'
import { NavLink as Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../assets/react.svg';

const NavBar = () => {
  return (
    <Navbar classname='bg-purple-300 h-20 flex justify-between'>
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
        <Link to={`/login`}>Sign In</Link>
        <Link to={'/register'}>Register</Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar