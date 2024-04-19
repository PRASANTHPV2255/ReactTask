import React from 'react'
import {useNavigate} from 'react-router-dom'

function ProfilePage() {
  //Navigation
  const nav=useNavigate()
  const back=()=>{
    nav('/main')
  }
  return (
    <div>
       <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-1">   
                  <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-2xl font-medium" aria-current="page">Profile</a>
                </div>
              </div>
           
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="relative ml-3">
                <div>
                  <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <div class="flex space-x-4"> 
                      <a href="#" class="bg-green-900 text-white rounded-md px-3 py-2 text-sm font-large" aria-current="page" onClick={back}>Back</a>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default ProfilePage