import React from 'react'
import Home from './Home/Home'
import About from './About/About'
import { HoverImageLinks } from './Projects/Project'
import ReactForm from './Forms/Form'


const Dashboard = () => {
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

export default Dashboard
