import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import Logo from '../assets/logo-no-background.png'

const Register = () => {
  return (
    <div>
      <img src={Logo} alt="Next Chapter logo" className='h-44' />
      <header className='font-bold'>Register</header>
      <div>
        <Form id='container'>
          <input type='text' name='username' placeholder='username' />
          <br />
          <input type='password' name='password' placeholder='password' />
          <br />
          <input type='password' name='confirm-password' placeholder='confirm password' />
          <br />
          <input type='email' name='email' placeholder='email' />
          <div>
            <button type='submit' className='font-bold'>Register</button>
          </div>
          <div>
            Existing User?
            <Link to={`/login`} className='font-bold'> Sign In</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register