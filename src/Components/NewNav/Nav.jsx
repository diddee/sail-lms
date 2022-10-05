import React, { useState } from 'react'
import './Nav.css'
// import { Link } from 'react-router-dom'
import User from '../../assets/user.png'
import {FaHome} from 'react-icons/fa'
import { GrFavorite, GrSchedules} from 'react-icons/gr'
import {FiSettings} from 'react-icons/fi'
import {IoNewspaperOutline} from 'react-icons/io5'

function Nav() {
    const [currentNav, setCurrentNav] = useState(1)
  return (
    <div className='Nav'>
      <div className='top'>
        <div className='brand'>
          <h2>Elearn.</h2>
        </div>
        <div className='toggle'>toggle</div>
        <div className="links">
            <ul>
                <li onClick={() => setCurrentNav(1)} className={currentNav === 1 ? 'active' : ''}>
                    <a href="#">
                        <FaHome/>
                        <span>Home</span>
                    </a>
                </li>
                <li onClick={() => setCurrentNav(2)} className={currentNav === 2 ? 'active' : ''}>
                    <a href="#">
                        <GrSchedules/>
                        <span>My Courses</span>
                    </a>
                </li>
                <li onClick={() => setCurrentNav(3)} className={currentNav === 3 ? 'active' : ''}>
                    <a href="#">
                        <GrFavorite/>
                        <span>Favorites</span>
                    </a>
                </li >
                <li onClick={() => setCurrentNav(4)} className={currentNav === 4 ? 'active' : ''}>
                    <a href="#">
                        <IoNewspaperOutline/>
                        <span>Test</span>
                    </a>
                </li>
                <li onClick={() => setCurrentNav(5)} className={currentNav === 5 ? 'active' : ''}>
                    <a href="#">
                        <FiSettings/>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </div>
      </div>
      <div className='user'>
            <img src={User}/>
            <div>
              <h4>Dee O.</h4>
              <p>Premium account</p>
            </div>
      </div>    

      {/* <div className="logout">
        <a href="#">
            <FiLogOut/>
            <span className='logout'>LogOut</span>
        </a>
      </div> */}
    </div>
  )
}

export default Nav
