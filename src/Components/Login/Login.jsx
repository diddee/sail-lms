import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {BiShow} from 'react-icons/bi'
import {FcGoogle} from 'react-icons/fc'
import log from '../../assets/log.png'
import {toast} from 'react-toastify'
import {auth} from '../../config/firebase'
import {  signInWithEmailAndPassword } from 'firebase/auth'


import './Login.css'

function Login() {

const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] =useState({
    email: '',
    password: '',
    
  })
  const {  email, password} =formData

const navigate= useNavigate()

const onChange = (e)=>{

  setFormData( (prevState)=> ({
    
    ...prevState,
    [e.target.id]:e.target.value,
  }))
}
// const onSubmit = async (e)=>{
//   e.preventDefault()

//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth, email, password
//     )
   
//     const user= userCredential.user
//     await set(ref(db), {
//       user
//     })
    
   
//     navigate('/login')
//   } 
//   catch (error) {
//     console.log(error);
//     toast.error('something went wrong');
//     toast.error(error.message)
//   }
// }

  return (
    <div className='Login'>
      <div className= "left">
          <h2>Senator Abiru Innovation Lab</h2>
          <small>Powered by tactive.</small>
          <img src={log} alt='anImage'/>
      </div>
      <div className='Right'>
        <div className='Header'>
          <h1 className='mylogo'><span className='tac'>TAC</span>TIVE</h1>
          <p className='head'>Initech Digital</p>
        </div>
        <p>Welcome, Please login to your account</p>
        <div className='log-box'>
            <FcGoogle /> Log in with google
        </div>
        <div className='user'>
          <div className='line1'></div>
          login for external user
          <div className='line2'></div>
        </div>
        <form action="POST" >
          <label htmlFor="email" className='email-label'>Username or Email</label>
          <input type="email" className="email" 
            placeholder='email' id='email' 
            value={email} onChange={onChange} autoComplete='off' />

          <div className="passwordInput">
            <input type={showPassword? 'text' : 'password'} className='password'
             placeholder='password' id='password' value={password} onChange={onChange} autoComplete='off' />
             <BiShow className="showPassword" onClick={()=>setShowPassword((prevState)=> !prevState)}/>
          </div>
          <Link to='/forgot' className='forgotPasswordLink'>
            Forgot Password
          </Link>

          <div className="signUpBar">
            <Link to='/SignUp' className='SignUpButton'>
              Forgot Password
            </Link>
          </div>
        </form>
          
      </div>
    </div>
  )
}

export default Login
