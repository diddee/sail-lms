import './Learn.css'
import img from '../../assets/images_8.png'
import users from '../../assets/people.png'

function Learn() {

  return (
    <div className='Learn'>
      
      <p>Hi, Dee</p>
      <h3>What will you learn today?</h3>
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
          <h4>Your learning path</h4>
        </div>
        <div className='box-container'>
        <div className='Box'>
            <h5>Intro to React</h5>
            <p>12 hours of video tutorials</p>
            <div>
            <p>271 Students</p>
            <img src={users}/>
            </div>
          </div>
          <div className='Box'>
            <h5>Intro to React</h5>
            <p>12 hours of video tutorials</p>
            <div>
              <p>513 Students</p>
              <img src={users}/>
            </div>
          </div>
          <div className='Box'>
            <h5>Intro to React</h5>
            <p>12 hours of video tutorials</p>
            <div>
              <p>468 Students</p>
              <img src={users}/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Learn
