import './Settings.css'
import React, { useState } from 'react'

// import Nav from '../Nav/Nav'
import {CgProfile} from 'react-icons/cg'


function Settings() {

  const [currentNav, setCurrentNav] = useState(1)

  return (
    <div className='SettingsPort'>
      <div className='Settings'>
        <div className='MinNav'>
            <ul>
                <li onClick={() => setCurrentNav(1)} className={currentNav === 1 ? 'active' : ''}>
                    <a href="">Profile</a>
                </li>
                <li onClick={() => setCurrentNav(2)} className={currentNav === 2 ? 'active' : ''}>
                    <a href="">Login and Security</a>
                </li>
            </ul>

        </div>
        <div className='Profile'>
            Your Profile Picture
            <div className='Photo'>
                <div className='Image'><CgProfile/></div>
                <div className='Upload'>Upload your Photo</div>
            </div>

        </div>
        <div className='Form'>
            <form action="">
                <div className='FormInput'>
                    <label htmlFor="FullName">FullName</label>
                    <input type="text" placeholder='Please Enter Your FullName'/>
                </div>
                <div className='FormInput'>
                    <label htmlFor="UserName">UserName</label>
                    <input type="text" placeholder='Please Enter Your UserName'/>
                </div>
                <div className='FormInput'>
                    <label htmlFor="Email">Email</label>
                    <input type="text" placeholder='Please Enter Your Email'/>
                </div>
                <div className='FormInput'>
                    <label htmlFor="Phone">Phone Number</label>
                    <input type="number" placeholder='Please Enter Your Number' />
                </div>
                <div className='FormInput'>
                    <label htmlFor="Bio">Bio</label>
                    <textarea name="Bio" id="" cols="120" rows="8"></textarea>
                </div>
                <div className='Button'>
                    <button className='Update'>Update Profile</button>
                    <button className='Reset'>Reset</button>
                </div>
            </form>
        </div>

      </div>
    </div>
  )
}

export default Settings
