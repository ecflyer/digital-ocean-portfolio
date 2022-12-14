import React from 'react'
import me from '../../profile-image.jpg'

export default function About() {
  return (
    <section className='section__alternate'>
      <div className="about-me" id="aboutme">
        <h2 className='section__title section__title--about'>Who I am</h2>
        <p className='section__subtitle section__subtitle--about'>Freelance and Remote Developer</p>
        <div className='about-me__body'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <img className='about-me__img' src={me} alt='eric enjoying the day' />
      </div>
    </section>
  )
}