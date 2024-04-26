import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import SingleBookPage from './pages/SingleBookPage'
import SingleTagPage from './pages/SingleTagPage'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Search from './pages/Search'
import FavBooks from './pages/FavBooks'
import FavTags from './pages/FavTags'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book/:id' element={<SingleBookPage />} />
        <Route path='/tag/:id' element={<SingleTagPage />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/search' element={<Search />} />
        <Route path='/mybooks' element={<FavBooks />} />
        <Route path='/mytags' element={<FavTags />} />
        <Route path='/booklist' element={<BookSearch />} />
      </Routes>
    </Router>
  )
}

export default App