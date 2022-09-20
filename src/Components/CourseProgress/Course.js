import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BellOutlined} from '@ant-design/icons'
import './Progress.css'



function Progress() {
  return (
    <div className='CourseProgress'>
        <nav>
            <div>
                <BiSearch/>
                Search
            </div>
            <BellOutlined/>

        </nav>
    </div>
  )
}

export default Progress
