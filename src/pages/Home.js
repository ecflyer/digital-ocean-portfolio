import React from 'react'
import {Link} from 'react-router-dom'
// import {useLocation, useParams, useHistory, useRouteMatch} from "react-router-dom"
import logo from '../logo_new.svg'
import '../App.css';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="loader" style={{'display': 'flex', 'width': '100%', 'justifyContent': 'center'}}>
        <img class="tri-logo"  src={logo} />
      </div>
        <Link to='/profile'
          className='App-Link home-link'>
          About Me
          </Link>
      </header>
    </div>
  )
}