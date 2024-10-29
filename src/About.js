import React from 'react'
import './About.css'
import Header from './Header'
import shaina from './Files/shaina.jpg'
import asd from './Files/anshad.jpg'

const About = () => {
  return (
    <div className='sd'>
        <Header/>
    <div className='about'>

    <h1 className='ahd'>About Us</h1>

        <div className='onectr'>
        
        <h1 className='ashd'>Our Mission</h1>
        <p className='ap'>BlazeGuard was created to raise awareness about the devastating impact of wildfires and educate the community on prevention methods. We’re committed to protecting our forests, wildlife, and environment by providing reliable information and resources. Together, we can take action to reduce the frequency and intensity of wildfires.</p>

        </div>

        <h1 className='ashd'>Meet The Team</h1>

        <div className='photosdiv'>
            <div className='person'>
                <img className='photo' src={shaina}></img>
                <h2 className='ashd'>Shaina</h2>
            </div>
            <div className='person'>
                <img className='photo' src={asd}></img>
                <h2 className='ashd'>Anshad</h2>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About