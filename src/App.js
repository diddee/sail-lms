import './App.css'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/LandindPage/Home'
import Nav from './Components/LandindPage/NavBar'

function App() {
  return (
    <div className='App'>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/login' element={<Login/>}/> */}
          {/* <Route path='/signup' element={<SignUp/>}/> */}
          {/* <Route path='/about' element={<About/>}/> */}
          {/* <Route path='/dashboard' element={<Dashboard/>}/>  */}
          {/* <Route path='/forgot' element={<Reset/>}/> */}

        </Routes>
    </div>
  )
}

export default App







/* <Routes>
        <Route exact path='/Home' element={<Home/>}></Route>
        <Route exact path='/Settings' element={<Settings/>}></Route>

      </Routes> */











//  import './App.css';
// //  import Login from './Components/Login/Login';
// // import img from './assets/img1.png' 
// import Learn from './Components/Learn/Learn' 
// // import Path from './Components/LearningPath/Path'
// import Nav from './Components/Nav/Nav';
// import Progress from './Components/CourseProgress/Course';

// function App() {
//   return (
//     <div className="App">
//       <Nav/>
//       <Learn/>
//       <Progress/>
//     </div>
//   )
// }

// export default App;

// // Initech Digital
// // Welcome, Please login to your account.
// // Lorem ipsum dolor sit amet, incuididunt 
// // consectetur adipiscing elit.
// // Incididunt ut labore et dolore magna aliqua.
// // Log in with Google
// //  login For External User
// // Username or Email
// // Enter your username or email
// // Password
// // Enter your password
// // Log in