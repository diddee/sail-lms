import React from 'react'

import './SignUp.css'
import img from '../../assets/img1.png'


function SignUp() {
  return (
    <div className='SignUp'>
      <div className= "left">
        <h3>Lorem ipsum dolor elit sit amet incididunt</h3>
        <p>Incididunt ut labore et dolore magna aliqua.</p>
        <img src={img} alt="anImage"/>
      </div>
      <div className='right'>
        <div className='top'>
          <p>Already a member? <a href="">Login</a></p>
          <h2>Create Your Account</h2>
        </div>
        <form action="">
          <div className='InputField'>
            <label htmlFor="Name">Name</label>
            <input type="text" />
          </div>
          <div className='InputField'>
            <label htmlFor="UserName">UserName</label>
            <input type="text" />
          </div>
          <div className='InputField'>
            <label htmlFor="Email">Email</label>
            <input type="text" />
          </div>
          <div className='InputField'>   
            <label htmlFor="Phone Number">Phone Number</label>
            <input type="number" />
          </div>
          <div className='InputField'>
            <label htmlFor="Password">Password</label>
            <input type="password" />
          </div>
          
          <button>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
