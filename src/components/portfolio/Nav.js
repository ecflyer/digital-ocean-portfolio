import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  function closeNav() {
    document.body.classList.remove('nav-open')
  }
  const navItems = ['Profile']
  const navElements = navItems.map((item,index) => {  
    const linkRef = item.split(' ').join('').toLowerCase()
      return (
        <li
        key={index}
        onClick={closeNav}
        className="nav__item">
          <a href={'../' + linkRef} className='nav__link'>{item != '' ? item : 'Home'}</a>
        </li>
      )
    }
  )
  return (
    <nav className='nav'>
      <ul className="nav__list">
        {navElements}
      </ul>
    </nav>
  )
}