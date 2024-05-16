import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/AuthProvider'
import Logo from '../assets/logo-no-background.png'
import "../styles/SignIn.css"


const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { loginAction } = useAuth()

  useEffect(() => {
    document.title = 'Sign In | Next Chapter'
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      loginAction(username, password)
      // Handle successful login, e.g., redirect to dashboard
    } catch (err) {
      console.log('Invalid login credentials')
    }
  }

  return (
    <div className='w-[25rem] p-5 border-[1px] border-solid border-black rounded-[10px] shadow-[0_0px_10px_-0px_rgba(0,0,0,0.5)] mt-40 mx-auto'>
      <img src={Logo} alt="Next Chapter logo" className='h-44 mx-auto' />
      <header id='sign-in-header'>Sign in to your account</header>
      <div>
        <Form onSubmit={handleSubmit} id='sign-in-input-form'>
          <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
          <br />
          <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
          <div id='sign-in-container'>
            <button type="submit" id='sign-in-button'>Sign In</button>
          </div>
          <div>
            <div id='new-user-prompt'>
              New User?
              <Link to={`/register`} id='to-register-button'>Register</Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default SignIn