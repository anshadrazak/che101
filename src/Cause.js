import React from 'react'
import Header from './Header'
import './Cause.css'
import cc from './Files/cc.jpg'
import tt from './Files/tt.jpg'
const Cause = () => {
  return (
    <div>
        <Header/>
        <div className='mainctr1'>
            
            
            <div className='greenctr'>
                <div className='cntdiv'>
                    <div className='onectr'>
                    <h3 className='hdings'>Understanding the Causes of Forest Fires:</h3>
                    <p className='defs'>Forest fires, whether sparked by natural events or human activities, are a growing threat to our environment, wildlife, and communities. Understanding these causes is key to preventing future fires.</p>
                    </div>
                    <br/><br/>
                    <h3 className='hdings light'>Nature’s Role in Forest Fires:</h3>
                    <img width='500px' className='tt' src={tt}></img>
                    <p className='defs light'>
                    Natural causes like lightning strikes can ignite dry vegetation, while volcanic eruptions and spontaneous combustion of organic materials also play a part. Though less frequent than human causes, these events are difficult to predict and control.</p>
                    
                    <br/>
                    <br/>
                    <div className='onectr'>
                    <h3 className='hdings'>Human Activity: A Leading Cause:</h3>
                    <img src={cc}></img>
                    <p className='defs'>Most forest fires result from human activities like unattended campfires, discarded cigarettes, and agricultural burning. In addition, downed power lines and arson are major contributors, often leading to large, uncontrolled blazes.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cause