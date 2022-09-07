import React from 'react'
import profileImage from '../../profile-image.jpg'

export default function Info() {
  return (
    <section>
      <div className="intro" id="intro">
        <h1 className="section__title section__title--intro">
            Hi, I'm <strong>Eric</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">software developer</p>
        <img className='intro__img' src={profileImage} alt="eric corbett in sun glasses looking sharp" />
      </div>
  </section>
  )
}