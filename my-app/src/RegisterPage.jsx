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
     <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="relative ml-3">
                <div>
                  <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <div class="flex space-x-4"> 
                      <a href="#" class="bg-green-900 text-white rounded-md px-3 py-2 text-sm font-large" aria-current="page" onClick={login}>Login</a>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className='login'>
        <div className='card-style'>
          <form className='pl-20' style={{width:'100%'}}>
            <div class="space-y-5">
              <div class="pb-10">
                <h1 class="text-3xl font-semibold leading-7  text-gray-900">Register</h1>
                <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                  <div class="sm:col-span-4">
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <div class="mt-2">
                      <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input type="text" name="Name"  id="Name" autocomplete="Name" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
                      </div>
                    </div>
                  </div>
                  <div class="sm:col-span-4">
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div class="mt-2">
                      <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input type="text" name="username" value={email} id="email" onChange={(e)=>setemail(e.target.value)} autocomplete="email" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter Email"/>
                      </div>
                    </div>
                  </div>
                  <div class="sm:col-span-4">
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="mt-2">
                      <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input type="text" name="password" value={password} id="password" onChange={(e)=>setpassword(e.target.value)} autocomplete="password" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter passsword"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-3 flex items-center gap-x-25">
              <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit}>Register</button>
            </div>
          </form>
        </div>
      </div>


    </div>
  )
}

export default RegisterPage