import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import Logo from '../assets/logo-no-background.png'

const Register = () => {
  useEffect(() => {
    document.title = 'Register | Next Chapter'
  }, [])

  return (
    <div>
      <img src={Logo} alt="Next Chapter logo" className='h-44' />
      <header className='font-bold'>Register</header>
      <div>
        <Form
          className='w-[25rem] p-5 border-[1px] border-solid border-black rounded-[10px] shadow-[0_0px_10px_-0px_rgba(0,0,0,0.5)] my-0 mx-auto'>
          <input type='text' name='username' placeholder='username'
            className='w-full p-2.5 rounded-[5px] border-[1px] border-solid border-black mb-5 text-[16px] text-black' />
          <br />
          <input type='password' name='password' placeholder='password'
            className='w-full p-2.5 rounded-[5px] border-[1px] border-solid border-black mb-5 text-[16px] text-black' />
          <br />
          <input type='password' name='confirm-password' placeholder='confirm password'
            className='w-full p-2.5 rounded-[5px] border-[1px] border-solid border-black mb-5 text-[16px] text-black' />
          <br />
          <input type='email' name='email' placeholder='email'
            className='w-full p-2.5 rounded-[5px] border-[1px] border-solid border-black mb-5 text-[16px] text-black' />
          <div>
            <button type='submit'
              className='font-bold bg-[#008000] text-white py-3 px-5 border-2 border-solid border-[#008000] rounded cursor-pointer mb-5 w-full'>
              Register
            </button>
          </div>
          <div>
            Existing User?
            <Link to={`/login`}
              className='font-bold text-black no-underline ml-1 hover:underline'>
              Sign In
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register