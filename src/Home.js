import React from 'react'
import Header from './Header'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Header/>
        <div className='mainctr1'>
            <div className='imgctr'>
                <div></div>
                <div className='txtcts'>
                    <h1 className='hding'>Protect our Forests:<br/>
                        Addressing the Fire Crisis.
                    </h1>
                    <h3 className='tagline'>Learn how to prevent forest fires and<br/>safeguard our environment.</h3>
                    <a href='/prevention'><button className='ptbtn'>How to Prevent</button></a>
                </div>
                <div></div>
            </div>
            <div className='whitectr'>
                <h2 className='quote'>Each year, more than 1.5 million hectares of forests are lost to devastating fires, 
                threatening wildlife and our planet's health. Together, we can take action to prevent forest fires and 
                protect these vital ecosystems for future generations.</h2>
            </div>
            <div className='greenctr'>
                <div className='cntdiv'>
                    <h3 className='hdings'>The Growing Threat of Forest Fires:</h3>
                    <p className='defs'>Forest fires are increasing in frequency and intensity, 
                    destroying ecosystems and communities around the globe. These fires not only 
                    claim lives and wildlife but also accelerate climate change by releasing massive 
                    amounts of carbon into the atmosphere.</p>
                    <a><button className='ptbtn'>Learn More</button></a>
                    <br/><br/>
                    <h3 className='hdings'>Why we must act now:</h3>
                    <p className='defs'>
                    <b>Biodiversity at Risk:</b><br/> Forests are home to 80% of the world’s terrestrial species, and fires put this biodiversity in immediate danger.
                    <br></br><br></br><b>Human Impact:</b><br/> Communities living near forests face threats to their health, safety, and homes due to forest fires.
                    <br></br><br></br><b>Climate Change:</b><br/> Forests play a crucial role in absorbing carbon dioxide, and their loss accelerates global warming.
                    </p>
                    <br/>
                    <br/>
                    <h3 className='hdings'>Together, We Can Make a Difference:</h3>
                    <p className='defs'>Small actions can prevent catastrophic fires. Whether you're a camper, landowner, or simply someone who cares, you have the power to reduce the risk of forest fires.</p>
                    <a href='/prevention'><button className='ptbtn'>Explore prevention tips</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home