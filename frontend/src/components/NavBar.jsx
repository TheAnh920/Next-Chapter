import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Logo from '../assets/logo-no-background.png'
import { useAuth } from '../hooks/AuthProvider'
// import "../styles/NavBar.css"

const NavBar = () => {
  const auth = useAuth()
  const user = useAuth()

  return (
    <Navbar id="Navbar">
      <Nav id="Logo">
        <Link to={`/`}>
          <img src={Logo} alt="Next Chapter logo" className='h-16 inline-block' />
        </Link>
      </Nav>
      <Nav id="Nav-Content">
        <Link to={`/search`} id="Ad-Search">Search</Link>
        {!user.token ? (
          <>
            <Link to={`/login`} id="Sign-In">Sign In</Link>
            <Link to={`/register`} id="Register">Register</Link>
          </>
        ) : (
          <>
            <Link to={`/mytags`} id="Fav-Tags">Favorite Tags</Link>
            <Link to={`/mybooks`} id="Fav-Books">Favorite Books</Link>
            <Button variant='outline-info' id="Sign-Out" onClick={() => auth.logOut()}>Sign Out</Button>
          </>
        )}
      </Nav>
    </Navbar>
  )
}

export default NavBar