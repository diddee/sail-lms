import React from 'react'
import img from '../../assets/img1.png'

import './Login.css'

function Login() {
  return (
    <div className='Login'>
      <div className= "left">
          <h3>Lorem ipsum dolor elit sit amet, incididunt consectetur adipiscing elit.</h3>
          <p>Incididunt ut labore et dolore magna aliqua.</p>
          <img src={img}/>
        </div>
        <div className='Right'>
          <div className='Header'>
            <p className='head'>Initech Digital</p>
          </div>
          <p>Welcome, Please login to your account</p>
          <div className='log-box'>
            <img src="../../assets/google.png"/> Log in with google</div>
          <div className='user'>
            <div className='line1'></div>
            login for external user
            <div className='line2'></div>
          </div>
          <div className='login-Input'>
            Username or email
            <input type="text" placeholder="Enter your username or email"/>
            Password
            <input type="text" placeholder='Enter your password'/>
          </div>
          <button>Log in</button>
        </div>
    </div>
  )
}

export default Login
