import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/AuthProvider'
import Logo from '../assets/logo-no-background.png'
import "../index.css"

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
    <div>
      <img src={Logo} alt="Next Chapter logo" className='h-44' />
      <header className='font-bold'>Sign in to your account</header>
      <div>
        <Form id ='content-box'onSubmit={handleSubmit}>
          <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
          <br />
          <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
          <div>
            <button type="submit" className='font-bold'>Sign In</button>
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
  )
}

export default SignIn