import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/AuthProvider'
import Logo from '../assets/logo-no-background.png'
import '../styles/signin.css'

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { loginAction } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      loginAction(username, password)
      // Handle successful login, e.g., redirect to dashboard
    } catch (err) {
      console.log('Invalid login credentials')
    }
  }

  return (
    <div id='container-all'>
      <div id='content-box'>
        <img src={Logo} id='login-logo' alt="Next Chapter logo" className='h-44' />
        <header id='login-label' className='font-bold'>Sign in to your account</header>
        <div>
          <Form onSubmit={handleSubmit}>
            <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
            <br />
            <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <div>
              <button id='submit-button' type="submit" className='font-bold'>Sign In</button>
            </div>
            <div>
              <div>
                New User?
                <Link to={`/register`} className='font-bold'> Register</Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
      </div>
  )
}

export default SignIn