import React from 'react'
import Home from './Components/Pages/Home/Home'
import './styles.css'
import About from './Components/Pages/About/About'
import { HoverImageLinks } from './Components/Pages/Projects/Project'

const App = () => {
  
  return (
    <>
    <section>
      <Home/>
    </section>
    <span id='body_span'>
    <section>
      <About/>
    </section>
    <HoverImageLinks/>
    </span>
    </>
  )
}

export default App
