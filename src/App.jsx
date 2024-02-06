import React from 'react'
import './styles.css'

import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import Model from './Components/Pages/Model/Model';
const App = () => {
  const imageDetails = {
    width: 524,
    height: 650,
  };
  return (
    <>
     <Router>
      <AnimatePresence mode='wait'>
            <Routes>
              <Route
                index
                element={<Dashboard imageDetails={imageDetails} />}
              />
              <Route
                path='/model/:id'
                element={<Model imageDetails={imageDetails} />}
              />
            </Routes>
          </AnimatePresence>
    </Router>
    </>
  )
}

export default App
