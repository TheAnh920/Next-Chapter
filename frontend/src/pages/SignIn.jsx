import React from 'react'
import { Form } from 'react-bootstrap'

const SignIn = () => {
  return (
    <div>
      <header>Sign in to your account</header>
      <div>
        <Form>
          <input type='text' name='username' placeholder='username' />
          <br />
          <input type='password' name='password' placeholder='password' />
          <div>
            <input type='submit' name='signin' value={`Sign In`} />
          </div>
          <div>
            <div>
              <a href='/register'>Register</a>
            </div>
            <div>
              <a href='#'>Forgot Account?</a>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default SignIn