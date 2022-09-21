import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsBell} from 'react-icons/bs'
import {TbBrandJavascript} from 'react-icons/tb'
import './Course.css'
import img from '../../assets/fire.png'
import img1 from '../../assets/fire1.png'
import img2 from '../../assets/fire2.png'






function Progress() {
  return (
    <div className='CourseProgress'>

        <nav>
            <div id='Search'>
                <span className='SearchIcon'><BiSearch/></span>
                Search
            </div>
            <div className='Bell'><BsBell/></div>

        </nav>

        <div className='Course-Section'>
          <h5>Course In Progress</h5>
          <div className='Courses'>
            <div className='Single-Course'>
              <div className='icon1'><TbBrandJavascript/></div>
              <h6>Build your first Javascript Project</h6>
            </div>
            <div className='Single-Course'>
              <div className='icon'><img src={img} alt="" /></div>
              <h6>Learn JavaScript Functions</h6>
            </div><div className='Single-Course'>
              <div className='icon'><img src={img1} alt="" /></div>
              <h6>Learn Objects in Javascript</h6>
            </div><div className='Single-Course'>
              <div className='icon'><img src={img2} alt="" /></div>
              <h6>Javascript Web APIs</h6>
            </div>
          </div>
        </div>

        <div className='LearningPoint'>
          <h5>Your Learning Point</h5>
          <div className='Graph'>

          </div>

        </div>
    </div>
  )
}

export default Progress
