import React from 'react'
import profile from "./assets/profile.jpeg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "./Hero.css"
const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img  className="img-1"src={profile} alt=''/>
      <h1><span> I'm Spoorti Angadi,</span>a passionate fresher fullstack developer.</h1> <p>I specialize in creating responsive and dynamic web applications using technologies like React. 
        Welcome to my portfolio!</p>
        <div className="her-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
          <div className="hero-resume">
          <a href="/Spoorti-Resume.pdf" target="_blank" rel="noopener noreferrer" download>My resume</a>
          
        </div>
        </div>
      
    </div>
  )
}

export default Hero