import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Hero from './Hero'

function App() {


  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/hero' element={<Hero/>} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
