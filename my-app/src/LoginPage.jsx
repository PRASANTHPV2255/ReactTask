import React, { useState } from 'react'
import './App.css'
import {useNavigate} from 'react-router-dom'

function LoginPage() {
  //Navigation
  const nav=useNavigate()

  function register(){
    nav('/')
  }
  function main(){
    nav('/main')
  }

  //states are used to store input data
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email && password) {
      // Retrieve existing data from localStorage 
      const storedData = JSON.parse(localStorage.getItem('userData'));

      //Check the entered email and Password are existing on the localStorage
      const emailExists = storedData.some(user => user.email === email && user.password === password);
      if(emailExists){
        setemail('');
        setpassword('');
        nav('/main')
      } else{
        alert('Email and Password are incorrect')
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button" onClick={register}>Register</button>
        </form>
      </nav>
      <div className='login'>
        <div className="card card-style" style={{width: "18rem"}}>
          <h3>Login</h3>
        </div>
      <div className="card card-style" style={{width: "18rem"}}>
      
          <div className="form-floating mb-3">
              <input  type="email" className="form-control" value={email} id="floatingInput" onChange={(e)=>setemail(e.target.value)} placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input  type="password" className="form-control" value={password} id="floatingPassword" onChange={(e)=>setpassword(e.target.value)} placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <div className='check-box-section'>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                Checked 
              </label>
              </div>
              <div>
                <a href="#" onClick={register}>Register</a>
              </div>
            
          </div>
        </div>
        <div className="card card-style" style={{width: "18rem"}}>
          <button type="button" className="btn btn-outline-secondary" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage