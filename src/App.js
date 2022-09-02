import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Portfolio from './pages/Portfolio'

function App() { 
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/portfolio/:workId' element={<Portfolio />} />
    </Routes>
  );
}

export default App;
