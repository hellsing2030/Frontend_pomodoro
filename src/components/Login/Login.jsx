import { useRef, useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Login.css'
import URL from '../../URL/URL'
import axios from 'axios'

const Login = () => {
  const [signUpDdata, setSignUpData]  = useState({name: '', email: '', password: '', password_confirmation: ''})
  const [signInData, setSignInData]   = useState({email: '', password: ''})

  const containerRef = useRef()

  const changeClass = (acction) => {
    if(acction === 'add'){
      containerRef.current.classList.add('right-panel-active')
    }else{
      containerRef.current.classList.remove('right-panel-active')
    }
  }

  const signIn = async (e) => {
    e.preventDefault()

    const response = await axios.post(`${URL}/login`, signInData)
    sessionStorage.setItem('token', response.data.acess_token)
  }

  const signUp = async (e) => {
    e.preventDefault()

    console.log(signUpDdata)
    const response = await axios.post(`${URL}/registro`, signUpDdata)

    console.log(response.data)
  }

  return (
    <div className='main-container'>

      <div className='container' ref={containerRef}>

        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <span>Use your email for registration</span>
            <Input 
              value={signUpDdata.name}
              onChange={(e) => setSignUpData(data => {return({...data, name: e.target.value})})}
              type="text" 
              placeholder="Name" />
            <Input 
              value={signUpDdata.email}
              onChange={(e) => setSignUpData(data => {return({...data, email: e.target.value})})}
              type="email"
              placeholder="Email" />
            <Input
              value={signUpDdata.password} 
              onChange={(e) => setSignUpData(data => {return({...data, password: e.target.value})})}
              type="password"
              placeholder="Password"/>
            <Input 
              value={signUpDdata.password_confirmation}
              onChange={(e) => setSignUpData(data => {return({...data, password_confirmation: e.target.value})})}
              type="password"
              placeholder="Password Confirmation"/>

            <Button onClick={signUp}>Sign Up</Button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <span>Use your account</span>
            <Input 
              value={signIn.email}
              onChange={(e) => setSignInData(data => {return({...data, email: e.target.value})})}
              type="email" 
              placeholder="Email"/>

            <Input 
              value={signIn.password}
              onChange={(e) => setSignInData(data => {return({...data, password: e.target.value})})}
              type="password" 
              placeholder="Password"/>
            <Button onClick={signIn}>Sign In</Button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <Button ghost onClick={() => changeClass('remove')}>Sign In</Button>
            </div>
            
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <Button ghost onClick={() => changeClass('add')}>Sign Up</Button>
            </div>
          </div>
        </div>

      </div>

    </div> 
  )
}

export default Login