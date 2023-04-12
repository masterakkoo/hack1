import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Header from './component/Header'
// import Registration from './component/Registration'
import Slider from './component/Slider'
import Contacts from './component/Contacts'
import GetStarted from './component/Getstarted'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <GetStarted />
      <Slider />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
