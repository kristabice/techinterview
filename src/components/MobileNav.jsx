import React from 'react'
import classNames from 'classnames'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

import logo from '../assets/logo3.png'
import LoginModal from './LoginModal'

const MobileNav = ({isMobile, setShowLoginModal, showLoginModal, setOpenMenu, openMenu, username}) => {

  return (
    <>
      <nav className="mobile-nav">
        {isMobile && ( 
        <button onClick={() => setOpenMenu(true)}>
          <GiHamburgerMenu /> 
        </button>
        )}
          <div className="logo">
            <a href="/">
              <img src={logo} alt="olivanders logo" />
            </a>
            </div>
          <div className={classNames('drawer', {show: openMenu})}>
        <button className='close-button' onClick={() => setOpenMenu(false)}><AiOutlineCloseCircle /></button>
          <a href='/'>Home</a>
          {username 
            ? <a href="/orders">Orders</a>
            : <a href='#'>Shop</a>
          }
          <a href='#'>Contact</a>
          <a href='#'>About</a>
        </div>
        <div className='login-menu'>
          <button onClick={() => setShowLoginModal(true)}>
            <BiUserCircle className='login-icon' />
            </button>
        </div>
      </nav>
      <LoginModal         
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal} 
      />
    </>
  )
}

export default MobileNav