import React from 'react'
let myWorkData = require('../portfolio/workData.json')
// import img02 from '../../images/portfolio-02.jpg'
// import img03 from '../../images/portfolio-03.jpg'
// import img04 from '../../images/portfolio-04.jpg'
// import img05 from '../../images/portfolio-05.jpg'
// import img06 from '../../images/portfolio-06.jpg'
// import img07 from '../../images/portfolio-07.jpg'
// import img08 from '../../images/portfolio-08.jpg'
// import img09 from '../../images/portfolio-09.jpg'
// import img10 from '../../images/portfolio-10.jpg'

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