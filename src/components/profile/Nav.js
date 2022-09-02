import React from 'react'

export default function Nav() {
  function closeNav() {
    document.body.classList.remove('nav-open')
  }
  const navItems = ['Intro', 'My Services', 'About Me', 'My Work']
  const navElements = navItems.map((item,index) => {  
    const linkRef = item.split(' ').join('').toLowerCase()
      return (
        <li
        key={index}
        onClick={closeNav}
        className="nav__item">
          <a href={'#' + linkRef} className='nav__link'>{item}</a>
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

{/* <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
        <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
        <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
        <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li> */}