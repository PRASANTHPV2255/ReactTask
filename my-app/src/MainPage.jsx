import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import BarChart from './components/Chart/BarChart'
import PieChart from './components/Chart/PieChart'
import GaugeChart from './components/Chart/GaugeChart'




function MainPage() {
  const api = {
    key: '25e30fbb0ed7ee679ba1fb1163052e8a'
  }
  const [singleDataName, setsingleDataName] = useState('')
  const [singleData, setsingleData] = useState([])
  const [forecastData, setforecastData] =
    useState([])
  const [selectedData, setSelectedData] = useState()


  const singleApi = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&&appid=${api.key}`
  // `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=${api.key}`;

  const foreCast = (data) => {
    const { lat, lon } = data
    const foreCast_api = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api.key}`;
    axios.get(foreCast_api).then(res => {
      console.log(res.data);
      let data = res.data;
      let TenForecast = data.list.slice(0, 10);
      setforecastData(TenForecast)
      // console.log(TenForecast);
    }).catch((err) => {
      console.log('1111', err)
    })

  }
  // console.log(forecastData);


  useEffect(() => {
    axios.get(singleApi).then(res => {
      setsingleDataName(res?.data.name)
      setsingleData(res.data)
      console.log('data ', res.data)
      foreCast(res.data.coord)
      console.log(res.data);
    })
  }, [])

  // console.log(singleData);
  const barClick = (e) => {
    console.log('evdentt ', e?.data?.data)
    setSelectedData(e?.data?.data)
  }

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
                  <a className="nav-link" aria-current="page" href="#">Bar Chert</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pie Chart</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">gauge Chart</a>
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
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
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