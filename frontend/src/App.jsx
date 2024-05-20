import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import SingleBookPage from './pages/SingleBookPage'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Search from './pages/Search'
import FavBooks from './pages/FavBooks'
import AuthProvider from './hooks/AuthProvider'
import PrivateRoute from './router/PrivateRoute'
import PublicRoute from './router/PublicRoute'
import Book from './pages/Book'
import FlaskTesting from './pages/FlaskTesting'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book/:id' element={<SingleBookPage />} />
          <Route path='/search' element={<Search />} />
          <Route path='/book' element={<Book />} />
          <Route path='/flask' element={<FlaskTesting />} />
          <Route element={<PublicRoute />}>
            <Route path='/login' element={<SignIn />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/mybooks' element={<FavBooks />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App