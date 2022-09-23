import React from 'react'
import './SignUp.css'

function SignUp() {
  return (
    <div className='SignUp'>
        <h3>Create Your Account</h3>
        <form action="">
            <div className='SignUp-Input'>
                <input type="text" placeholder='Please Enter Your First Name'/>
                <input type="text" placeholder='Please Enter Your Last Name'/>
                <input type="text" placeholder='Please Enter Your Email'/>
                <input type="number" placeholder='Please Enter Your Number' />
                <input type="text" placeholder='Password'/>
                <input type="text" placeholder='Confirm Password'/>
            </div>
            <button>Get Started</button>
        </form>
      
    </div>
  )
}

export default SignUp
