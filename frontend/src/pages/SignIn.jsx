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
        <Form onSubmit={handleSubmit}
          className='w-[25rem] p-5 border-[1px] border-solid border-black rounded-[10px] shadow-[0_0px_10px_-0px_rgba(0,0,0,0.5)] my-0 mx-auto'>
          <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'
            className='w-full p-2.5 rounded-[5px] border-[1px] border-solid border-black mb-5 text-[16px] text-black' />
          <br />
          <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'
            className='w-full p-2.5 rounded-[5px] border-[1px] border-solid border-black mb-5 text-[16px] text-black' />
          <div>
            <button type="submit"
              className='font-bold bg-[#ffc0cb] text-white py-3 px-5 border-2 border-solid border-[#ffc0cb] rounded cursor-pointer mb-5 w-full'>
              Sign In
            </button>
          </div>
          <div>
            <div>
              New User?
              <Link to={`/register`}
                className='font-bold text-black no-underline ml-1 hover:underline'>
                Register
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default SignIn