import React from 'react'
// import {useLocation, useParams, useHistory, useRouteMatch} from "react-router-dom"

import '../styles/profile.css'
import Header from '../components/profile/Header'
import Info from '../components/profile/Info'
import Services from '../components/profile/Services'
import About from '../components/profile/About'
import Work from '../components/profile/Work'
import Footer from '../components/profile/Footer'

export default function Profile() {
  return (
    <div>
      <Header />
      <Info />
      <Services />
      <About />
      <Work />
      <Footer />
    </div>
  )
}