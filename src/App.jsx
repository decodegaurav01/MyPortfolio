

import './App.css'
import { Home } from './components/Home'

import Navebar from './components/Navebar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Project'
import Footer from './components/Footer'
import Education from './components/Education'
import Resume from './components/Resume'
import Contact from './components/Contact'

export function App() {


  return (
    <>
      <div className="min-h-screen bg-gray-950"
      >
        <Navebar />
        <Home />
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Resume/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}


