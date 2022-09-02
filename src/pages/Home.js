import React from 'react'
import {Link} from 'react-router-dom'
// import {useLocation, useParams, useHistory, useRouteMatch} from "react-router-dom"
import logo from '../logo.svg'
import '../App.css';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to='/profile'
          className='App-Link home-link'>
          About Me
          </Link>
      </header>
    </div>
  )
}