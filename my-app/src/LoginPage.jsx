import React from 'react'
import './App.css'
import {useNavigate} from 'react-router-dom'

function LoginPage() {
  const nav=useNavigate()

  function register(){
    nav('/')
  }
  function main(){
    nav('/main')
  }
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
              <input  type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input  type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
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
          <button type="button" className="btn btn-outline-secondary" onClick={main}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage