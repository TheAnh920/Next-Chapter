import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { IoIosSearch } from "react-icons/io"
import { FaSignInAlt, FaHeart, FaSignOutAlt } from "react-icons/fa"
import { FaPenToSquare } from "react-icons/fa6"
import { TbMessage2Search } from "react-icons/tb"
import Logo from '../assets/logo-no-background.png'
import LogoNoText from '../assets/logo-no-text.png'
import { useAuth } from '../hooks/AuthProvider'
import "../styles/NavBar.css"

const NavBar = () => {
  const auth = useAuth()
  const user = useAuth()

  function makeResponsive() {
    var element = document.getElementById('Navbar')
    if (element.className == 'nav-bar') {
      element.className += '-responsive'
    } else {
      element.className = 'nav-bar'
    }
  }

  return (
    <Navbar id="Navbar" className='nav-bar'>
      <Nav id="Logo">
        <Link to={`/`}>
          <img id='logo-img' src={Logo} alt="Next Chapter logo" className='h-20 inline-block' />
          <img id='logo-only-img' src={LogoNoText} alt="Next Chapter logo" className='h-12 inline-block' />
        </Link>
      </Nav>
      <Nav id="Nav-Search">
        <Link to={`/search`} id="Ad-Search">Search</Link>
        <Link to={`/search`} id="Ad-Search-responsive">
          <IoIosSearch />
        </Link>
      </Nav>
      <Nav id='nav-topic-search'>
        <Link to={`/topicsearch`} id='topic-search'>Topic Search</Link>
        <Link to={`/topicsearch`} id='topic-search-responsive'>
          <TbMessage2Search />
        </Link>
      </Nav>
      <Nav id='nav-user-options'>
        {!user.token ? ([
          <Link to={`/login`} id="Sign-In" key='sign-in'>Sign In</Link>,
          <Link to={`/login`} id="Sign-In-responsive" key='sign-in-res'>
            <FaSignInAlt />
          </Link>,
          <Link to={`/register`} id="Register" key='register'>Register</Link>,
          <Link to={`/register`} id="Register-responsive" key='register-res'>
            <FaPenToSquare />
          </Link>
        ]) : ([
          <Link to={`/mybooks`} id="Fav-Books" key='favorites'>Favorites</Link>,
          <Link to={`/mybooks`} id="Fav-Books-responsive" key='favorites-res'>
            <FaHeart />
          </Link>,
          <Button id="Sign-Out" key='sign-out' onClick={() => auth.logOut()}>Sign Out</Button>,
          <Button id="Sign-Out-responsive" key='sign-out-res' onClick={() => auth.logOut()}>
            <FaSignOutAlt />
          </Button>
        ])}
      </Nav>
    </Navbar>
  )
}

export default NavBar