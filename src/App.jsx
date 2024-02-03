import React from 'react'
import Home from './Components/Pages/Home/Home'
import './styles.css'
import About from './Components/Pages/About/About'
import { HoverImageLinks } from './Components/Pages/Projects/Project'
import ReactForm from './Components/Pages/Forms/Form'

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
      <ReactForm/>
    </span>
    </>
  )
}

export default App
