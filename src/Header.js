import React from 'react'
import './Header.css'
import logo from './Files/Leonardo_Phoenix_A_modern_sleek_logo_for_Blaze_Guard_featuring_2.png'

const Header = () => {
  return (
    <div>
        <div className='headermnctr'>
            <div></div>
            <div><a href='/'><img className='logo' src={logo}></img></a></div>
            <div></div>
            <div className='menusdiv'>
                <a href='/'><p className='menus'>HOME</p></a>
                <a href='/causes'><p className='menus'>CAUSES</p></a>
                <a href='/preventions'><p className='menus'>PREVENTIONS</p></a>
                <a href='/contact'><p className='menus'>CONTACT</p></a>
                <a href='/about'><p className='menus'>ABOUT</p></a>

                
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Header