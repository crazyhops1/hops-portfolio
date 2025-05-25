import React from 'react'
import Navbar from './navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './hero/Hero'
import Skill from './skill/Skill'
import Projects from './projects/Projects'
import { useRef } from 'react'
import Bottam from './bottam/Bottam'
const App = () => {
  const sKill=useRef(null)
    const proJects=useRef(null)

  return (
    <div>
      <Navbar />
      <Hero/>
      <Skill/>
      <Projects />
      <Bottam/>
    </div>
  )
}

export default App