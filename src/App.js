import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Hero'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Mywork from './Components/MyWork/Mywork'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div >
 <Navbar/>
 <Hero/>
 <About/>
 <Mywork/>
 <Contact/>
 <Footer/>
 </div>
  )
}

export default App