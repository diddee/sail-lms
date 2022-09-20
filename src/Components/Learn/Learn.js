import React from 'react'
import './Learn.css'
import img from '../../assets/images_8.png'
// import Path from '../LearningPath/Path'

function Learn() {
  return (
    <div className='Learn'>
      <p>Hi, Dee</p>
      <h2>What will you learn today?</h2>
      <div className='Current'>
        <img src={img} />
        <div className='Course'>
          <h3 >Introduction to JavaScript.</h3>
          <p>JavaScript is the world's most popular programming language. 
            JavaScript is the programming language of the Web.</p>
          <button>Learn now</button>  
        </div>
      </div>

      
      <div className='Path-Box'>  
      <div className='header-title'>
        <h3>Your learning path</h3>
        </div>
        <div className='box-container'>
        <div className='Box'>
            <h4>Intro to React</h4>
            <p>12 hours of video tutorials <br/> 413 Students </p>
            <img src=''/>
          </div>
          <div className='Box'>
            <h4>Intro to React</h4>
            <p>12 hours of video tutorials <br/> 413 Students </p>
            <img src=''/>
          </div>
          <div className='Box'>
            <h4>Intro to React</h4>
            <p>12 hours of video tutorials <br/>413 Students </p>
            <img src=''/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Learn
