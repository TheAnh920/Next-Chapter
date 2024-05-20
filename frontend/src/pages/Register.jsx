import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo-no-background.png'
import "../styles/Register.css"

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Register | Next Chapter'
  }, [])

  const handleClick = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const response = await axios.post('https://next-chapter.onrender.com/account/signup', { username, password })
      console.log(response.data.message)
      if (response.data.success) {
        navigate(`/login`);
      }
    }
  }
  return (
    <div className='w-[25rem] p-5 border-[1px] border-solid border-black rounded-[10px] shadow-[0_0px_10px_-0px_rgba(0,0,0,0.5)] mt-24 mx-auto'>
      <img src={Logo} alt="Next Chapter logo" className='h-44 mx-auto' />
      <header id='register-header'>Register</header>
      <div>
        <Form onSubmit={handleClick} id='register-input-form'>
          <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
          <br />
          <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
          <br />
          <input type='password' name='confirm-password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='confirm password' />
          <br />
          <input type='email' name='email' placeholder='email' />
          <div id='register-container'>
            <button type='submit' id='register-button'>Register</button>
          </div>
          <div id='existing-user-prompt'>
            Existing User?
            <Link to={`/login`} id='to-sign-in-button'>Sign In</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register