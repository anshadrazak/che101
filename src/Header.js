import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
        <div className='headermnctr'>
            <div></div>
            <div>LOGO</div>
            <div></div>
            <div className='menusdiv'>
                <a href='/'><p className='menus'>HOME</p></a>
                <a href='/causes'><p className='menus'>CAUSES</p></a>
                <a href='/preventions'><p className='menus'>PREVENTIONS</p></a>
                <a href='/contact'><p className='menus'>CONTACT</p></a>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Header