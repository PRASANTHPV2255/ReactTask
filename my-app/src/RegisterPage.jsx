import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './App.css'

function RegisterPage() {
  //Navigation
  const nav=useNavigate()

  function login(){
    nav('/login')
  }
  function main(){
    nav('/main')
  }

  //States are used to store input data
  const [Name, setName] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault();

    if (Name && email && password) {
      // Retrieve existing data from localStorage or create an empty array
      const storedData = JSON.parse(localStorage.getItem('userData')) || [];

      //check the entered email is existing on the localStorage
      const emailExists = storedData.some(user => user.email === email);
      if(emailExists){
        alert('Email already exist')
      } else{
        // create an object with user data
        const userData = { Name, email, password };

        // Add new user data to the array
        const updatedData = [...storedData, userData];
  
        // Save the updated array to localStorage
        localStorage.setItem('userData', JSON.stringify(updatedData));
         // Clear input fields
        setName('');
        setemail('');
        setpassword('');
        nav('/main')
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button" onClick={login}>Login</button>
        </form>
      </nav>
      <div className='login'>
        <div className="card card-style" style={{width: "18rem"}}>
          <h3>Register</h3>
        </div>
      <div className="card card-style" style={{width: "18rem"}}>
          <div className="form-floating mb-3">
              <input type="text" className="form-control" value={Name} id="floatingInput" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
              <label for="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
              <input  type="email" className="form-control" value={email} onChange={(e)=>setemail(e.target.value)} id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input  type="password" className="form-control" value={password} onChange={(e)=>setpassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
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
                <a href="#" onClick={login}>Login</a>
              </div>
            
          </div>
        </div>
        <div className="card card-style" style={{width: "18rem"}}>
          <button type="button" className="btn btn-outline-secondary" onClick={handleSubmit}>
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage