import React from 'react'
import './Nav.css'
import User from '../../assets/user.png'
import {FaHome} from 'react-icons/fa'
import {GrCertificate, GrFavorite, GrSchedules} from 'react-icons/gr'
import {FiSettings} from 'react-icons/fi'
import {IoNewspaperOutline} from 'react-icons/io5'

function Nav() {
  return (
    <div className='Nav'>
          <h2>Elearn.</h2>
          <div className='Navlist'>
            <FaHome/>
            <a href=''>Home</a>
          </div>
          <div className='Navlist'>
            <GrSchedules/> 
            <a href=''>My Courses</a>
          </div>
          <div className='Navlist'>
            <GrFavorite/>
            <a href=''>Favorite</a>
          </div>
          <div className='Navlist'>
            <IoNewspaperOutline/>
            <a href=''>Test</a>
          </div>
          <div className='Navlist'>
            <GrCertificate/>
            <a href=''>Certificate</a>
          </div>
          <div className='Navlist'>
            <FiSettings/>
            <a href=''>Settings</a>
          </div> 
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
