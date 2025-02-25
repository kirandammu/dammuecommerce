import React, { useState } from 'react'
import Title from '../components/Title'
const Login = () => {
  const [sign, setSign] = useState("LOGIN")

  const submitHandler = (e)=>{
    e.preventDefault()
  }

  return (
      <div className="login-box">
        <div className="container">
          <Title text2={sign} />
           <form onSubmit={submitHandler}>
           {sign === 'LOGIN'?'' : <input type="text"  placeholder='Enter your name' required />}
            <input type="email" placeholder='Enter your email' required />
            <input type="password" placeholder='Enter your Password' required />
            <button>{sign === 'LOGIN'?'Login':'Sign Up'}</button> 
            {sign === 'LOGIN' ?<p>Create a new account ? <span onClick={()=>{setSign("SIGN UP")}} >click here</span></p> :
                            <p>Already have a account ? <span onClick={()=>{setSign('LOGIN')}} >click here</span></p>}
           </form>
        </div>
      </div>
  )
}

export default Login
