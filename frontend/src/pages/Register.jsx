import React from 'react'
import { Form } from 'react-bootstrap'

const Register = () => {
  return (
    <div>
      <header>Register</header>
      <div>
        <Form>
          <input type='text' name='username' placeholder='username' />
          <br />
          <input type='password' name='password' placeholder='password' />
          <br />
          <input type='password' name='confirm-password' placeholder='confirm password' />
          <br />
          <input type='email' name='email' placeholder='email' />
          <div>
            <input type='submit' name='register' value={`Register`} />
          </div>
          <div>
            <a href='/login'>Sign In</a>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register