import React from 'react'
import { BiUserCircle } from 'react-icons/bi'

import logo from '../assets/logo3.png'
import LoginModal from './LoginModal'



const DesktopNav = ({showLoginModal, setShowLoginModal, isMobile, username}) => (
    <>
      <nav className="main-nav">
        <div className='right-nav'>
          <a href='/'>Home</a>
          {username 
            ? <a href="/orders">Orders</a>
            : <a href='#'>Shop</a>
          }
        </div>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="olivanders logo" />
          </a>
          </div>
        <div className='left-nav'>
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

export default DesktopNav