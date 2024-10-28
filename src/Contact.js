import React from 'react'
import Header from './Header'
import fs from './Files/fs.jpg'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'><Header/>
    <div className='ctbody'>
      <div className='fs'>

        <h3 className='cttxt'>In Case Of Emergency, <br></br> Just Contact the Heroes.</h3>
      </div>

      
    </div>

<div className='cntdiv3'>
                    <div className='onectr'>
                    <h3 className='hdings'>Emergency Telephone Number: 112</h3>
                    <p className='defs'>Fire Control Room: 101 (available 24/7)</p>
                    <p className='defs'>National Disaster Response Force (NDRF): 108 (for Disaster Management Services)</p>
                    <p className='defs'>Disaster Management Services: 108</p>
                    </div>
                    
                </div>
      
    </div>
  )
}

export default Contact