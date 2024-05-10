import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthProvider';


const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { loginAction } = useAuth();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:5555/account/signin', { username, password });
  //     console.log(response.data.message)
  //     if(response.data.success) {
  //       loginAction(response.data)
  //       navigate('/', { replace: true });
  //     } else {
  //       setError(response.data.message || 'Invalid login credentials')
  //     }
  //     // Handle successful login, e.g., redirect to dashboard
  //   } catch (err) {
  //     console.log('Invalid login credentials')
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      loginAction(username, password)
      // Handle successful login, e.g., redirect to dashboard
    } catch (err) {
      console.log('Invalid login credentials')
    }
  };

  return (
    <div>
      <header>Sign in to your account</header>
      <div>
        <Form onSubmit={handleSubmit}>
          <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
          <br />
          <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
          <div>
            <button type="submit">Sign In</button>
          </div>
          <div>
            <div>
              <a href='/register'>Register</a>
            </div>
            {/* <div>
              <a href='#'>Forgot Account?</a>
            </div> */}
          </div>
        </Form>
      </div>
    </div>
  )
}

export default SignIn