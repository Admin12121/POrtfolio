import { useState } from 'react'
import './App.scss'
import Background from './Components/Hero/Background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background/>
    </>
  )
}

export default App
