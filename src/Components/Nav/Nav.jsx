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
            <div className='Icon'><FaHome/></div>
            <a href=''>Home</a>
          </div>
          <div className='Navlist'>
            <div className='Icon'><GrSchedules/> </div>
            <a href=''>My Courses</a>
          </div>
          <div className='Navlist'>
            <div className='Icon'><GrFavorite/></div>
            <a href=''>Favorite</a>
          </div>
          <div className='Navlist'>
            <div className='Icon'><IoNewspaperOutline/></div>
            <a href=''>Test</a>
          </div>
          <div className='Navlist'>
            <div className='Icon'><GrCertificate/></div>
            <a href=''>Certificate</a>
          </div>
          <div className='Navlist'>
            <div className='Icon'><FiSettings/></div>
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
