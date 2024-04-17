import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

function MainPage() {
  const api={
    key:'0fb08f9e4f1600bb0af252fa88c0524f'
  }
  const [forecast, setforecast] = useState([])
  const dataFetch=async()=>{
   const singleData_url=`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=${api.key}`
   
   fetch(singleData_url).then(res => res.json()).then(data => {
    console.log(data);
   }).catch(()=>{
    alert('error occored while data fetching')
   })
  }
  dataFetch()
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary nav-section">
        <div className='left-section'>
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Bar Chert</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pie Chart</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">gauge Chart</a>
                </li>
              </ul>  
            </div>
          </div>
        </div>
        <div className='right-section'>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
          </ul>
        </div>
        </div>
      </nav>
    </div>
  )
}

export default MainPage