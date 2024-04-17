import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import BarChart from './components/Chart/BarChart'
import PieChart from './components/Chart/PieChart'
import GaugeChart from './components/Chart/GaugeChart'
import {useNavigate} from 'react-router-dom'




function MainPage() {

  const nav=useNavigate();

  const profile=()=>{
    nav('/profile')
  }
  const settings=()=>{
    nav('/settings')
  }
  const logOut=()=>{
    nav('/')
  }



  const api = {
    key: '25e30fbb0ed7ee679ba1fb1163052e8a'
  }
  const [singleDataName, setsingleDataName] = useState('')
  const [singleData, setsingleData] = useState([])
  const [forecastData, setforecastData] =
    useState([])
  const [selectedData, setSelectedData] = useState()


  const singleApi = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&&appid=${api.key}`


  const foreCast = (data) => {
    const { lat, lon } = data
    const foreCast_api = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api.key}`;
    axios.get(foreCast_api).then(res => {
      let data = res.data;
      let TenForecast = data.list.slice(0, 10);
      setforecastData(TenForecast)
      // console.log(TenForecast);
    }).catch((err) => {
      console.log('Error', err)
    })

  }



  useEffect(() => {
    axios.get(singleApi).then(res => {
      setsingleDataName(res?.data.name)
      setsingleData(res.data)
      foreCast(res.data.coord)
    })
  }, [])

  // console.log(singleData);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-section">
        <div className='left-section'>
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">CHARTS</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='right-section'>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Profile
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={profile}>Profile</a></li>
              <li><a className="dropdown-item" href="#" onClick={settings}>Settings</a></li>
              <li><a className="dropdown-item" href="#" onClick={logOut}>logOut</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <h3>{singleDataName}</h3>
      </div>
      <div style={{ display: 'flex' }}>

        <div style={{ flex: 1, justifyContent: 'center',alignContent: 'center' }}>
          <BarChart foreCast={forecastData} />
        </div>
        <div style={{ flex: 1}}>
          <PieChart foreCast={forecastData} />
          <hr style={{opacity:'.2', marginLeft: 10,width:'80%',marginRight:'auto',marginLeft:'auto'}} />
          <GaugeChart singleData={forecastData[0]}/>
        </div>
      </div>
    </div>
  )
}

export default MainPage