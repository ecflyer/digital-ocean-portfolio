import React from 'react'
import profileImage from '../../images/portfolio-01.jpg'

export default function Info() {
  return (
    <section>
      <div className="intro" id="intro">
        <h1 className="section__title section__title--intro">
            The title <strong className='strong--block'>of my project</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">software developer</p>
        <img className='intro__img' src={profileImage} alt="eric corbett in sun glasses looking sharp" />
      </div>
    </section>
  )
}