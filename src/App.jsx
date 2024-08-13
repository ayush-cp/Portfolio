import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'

function App() {

  return (
    <div className='appMain'>
  <Navbar/>
  <Homepage/>
  <About/>
  <Projects/>
  <Skills/>
  <ContactMe/>
    </div>
  )
}

export default App
