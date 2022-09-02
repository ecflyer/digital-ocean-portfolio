import React from 'react'
import {useParams} from 'react-router-dom'
// import {useLocation, useParams, useHistory, useRouteMatch} from "react-router-dom"

import '../styles/profile.css'
import Header from '../components/portfolio/Header'
import Info from '../components/portfolio/Info'
import Details from '../components/portfolio/Details'
import Footer from '../components/profile/Footer'

export default function Portfolio() {
  const {workId} = useParams()

  return (
    <div>
      <Header />
      <Info />
      <Details />
      <Footer />
    </div>
  )
}