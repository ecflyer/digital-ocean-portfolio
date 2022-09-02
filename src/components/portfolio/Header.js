import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'
import logo from '../../logo-nav.png'

export default function Header() {
  function toggleNavigation() {
    document.body.classList.toggle('nav-open')
  }

  return (
    <header>
      <Link to='/'>
        <div className='logo'>
          <img src={logo} alt='my profile' />
        </div>
      </Link>
      <button
        className='nav-toggle'
        aria-label='toggle navigation'
        onClick={toggleNavigation}>
        <span className='hamburger'></span>
      </button>
      <Nav />
  </header>
  )
}