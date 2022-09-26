import React from 'react'
import './Home.css'
import Learn from '../Learn/Learn'
import Course from '../CourseProgress/Course'

const Home = () => {
  return (
    <div className='Home'>
      <Learn/>
      <Course/>
    </div>
  )
}

export default Home
