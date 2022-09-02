import React from 'react'
let myWorkData = require('../portfolio/workData.json')

export default function Work() {
    const workData = myWorkData.map(work => (
        <a key={work._id} href={'/portfolio/' + work._id} className='=portfolio__item'>
            <img src={require(`../../images/${work.image}`)} alt='' className='portfolio__img' />
        </a>
    ))
  return (
    <section className="my-work" id="mywork">
        <h2 className='section__title section__title--work'>My Work</h2>
        <p className='section__subtitle section__subtitle--work'>A selection of my projects</p>
        <div className="portfolio">
            {workData}
        </div>
    </section>
  )
}