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
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Settings</a>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-success" type="submit" onClick={back}>Back</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default ProfilePage