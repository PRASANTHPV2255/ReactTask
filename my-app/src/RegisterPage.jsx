import React from 'react'
import {useNavigate} from 'react-router-dom'
import './App.css'

function RegisterPage() {
  const nav=useNavigate()

  function login(){
    nav('/login')
  }
  function main(){
    nav('/main')
  }
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <form class="container-fluid justify-content-start">
          <button class="btn btn-outline-success me-2" type="button" onClick={login}>Login</button>
        </form>
      </nav>
      <div className='login'>
        <div class="card card-style" style={{width: "18rem"}}>
          <h3>Register</h3>
        </div>
      <div class="card card-style" style={{width: "18rem"}}>
          <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="Name"/>
              <label for="floatingInput">Name</label>
          </div>
          <div class="form-floating mb-3">
              <input  type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input  type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <div className='check-box-section'>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                Checked 
              </label>
              </div>
              <div>
                <a href="#" onClick={login}>Login</a>
              </div>
            
          </div>
        </div>
        <div class="card card-style" style={{width: "18rem"}}>
          <button type="button" class="btn btn-outline-secondary" onClick={main}>
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage