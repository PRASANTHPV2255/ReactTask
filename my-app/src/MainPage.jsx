import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import BarChart from './components/Chart/BarChart'
import PieChart from './components/Chart/PieChart'
import GaugeChart from './components/Chart/GaugeChart'
import {useNavigate} from 'react-router-dom'
import profileImg from '../src/img/blank-profile-picture.webp'




function MainPage() {

  //Navigation
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

  //NavBar DropDwon
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };




  
  const Api_key='25e30fbb0ed7ee679ba1fb1163052e8a'
  const [singleDataName, setsingleDataName] = useState('')
  const [forecastData, setforecastData] =useState([])
 


    //OpenWeather API used to get single weather data of the cityName:London
  const singleApi = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&&appid=${Api_key}`


  const foreCast = async(data) => {
    //Destructure the lat and lon from the data
    const { lat, lon } = data;
    //Get the foreCast data 
    const foreCast_api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${Api_key}`;
    //Get the forCast data from the api
    await axios.get(foreCast_api).then(res => {
      // let data = res.data;
      //Sliced the data into 10 
      // let TenForecast = res.data.list.slice(0, 10);
      setforecastData(res.data.list.slice(0, 10))
    }).catch((err) => {
      console.log('Error', err)
    })

  }



  useEffect(() => {
    //Get the single data from the api
    axios.get(singleApi).then(res => {
      setsingleDataName(res?.data.name)
      //Passed the necessary data to forCast function
      foreCast(res.data.coord)
    })
  }, [])

  // console.log(singleData);

  return (
    <div>
      <nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
      
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
   
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-1">   
            <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-2xl font-medium" aria-current="page">CHARTS</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         <div className="relative ml-3">
      <div>
        <button
          type="button"
          className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src={profileImg}
            alt=""
          />
        </button>
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0" onClick={profile}>Your Profile</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1" onClick={settings}>Settings</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2" onClick={logOut}>Sign out</a>
        </div>
      )}
    </div>
      </div>
    </div>
  </div>
</nav>

     
      <div>
        <h3 className='text-5xl'>{singleDataName}</h3>
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