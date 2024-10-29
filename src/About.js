import React from 'react'
import './About.css'
import Header from './Header'

const About = () => {
  return (
    <div className='sd'>
        <Header/>
    <div className='about'>
        
        <h1 className='ahd'>About Us</h1>
        <h1 className='ashd'>Our Mission</h1>
        <p className='ap'>BlazeGuard was created to raise awareness about the devastating impact of wildfires and educate the community on prevention methods. We’re committed to protecting our forests, wildlife, and environment by providing reliable information and resources. Together, we can take action to reduce the frequency and intensity of wildfires.</p>
    </div>
    </div>
  )
}

export default About