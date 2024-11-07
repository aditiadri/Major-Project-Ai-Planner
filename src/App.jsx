import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/button'
import Hero from './components/custom/Hero'
import Createtrip from './Createtrip';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/*hero*/}
  <Hero/>
        <Createtrip apiKey="YOURAPIKEY" />
    </>

  )
}

export default App
