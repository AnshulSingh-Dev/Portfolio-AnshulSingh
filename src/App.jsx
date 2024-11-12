import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Sidebar from './components/Sidebar'

function App() {
  return(
    <div id='container'>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
