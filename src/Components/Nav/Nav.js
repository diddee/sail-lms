import React from 'react'
import './Nav.css'
import User from '../../assets/user.png'

function Nav() {
  return (
    <div className='Nav'>
          <h2>Elearn.</h2>
          <a href=''>Home</a>
          <a href=''>My Courses</a>
          <a href=''>Favorite</a>
          <a href=''>Test</a>
          <a href=''>Certificate</a>
          <a href=''>Test</a>
          <a href=''>Settings</a> 
          <div className='user'>
            <img src={User}/>
            <div>
              <h4>Dee O.</h4>
              <p>Premium account</p>
            </div>
          </div>     
    </div>
  )
}

export default Nav
