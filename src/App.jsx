import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Sidebar from './components/Sidebar'
import Header2 from './components/Header2'  

function App() {
  return(
    <div id='container'>
      <Header2 />
      {/* <Sidebar /> */}
      <Body />
      <Footer />
    </div>
  )
}

export default App
