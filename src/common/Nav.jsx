import React, { useContext, useState } from 'react'

import DesktopNav from '../components/DesktopNav'
import MobileNav from '../components/MobileNav'
import { LoginContext } from '../context/LoginContext'
import { useWindowSize } from '../utils/ResizeHook'


const Nav = () => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [openMenu, setOpenMenu] = useState(false);
  useWindowSize();
  const isMobile = window.matchMedia('(max-width: 600px)').matches
  const {state} = useContext(LoginContext)

  return (
      <>
        {isMobile 
          ? (
            <MobileNav 
              showLoginModal={showLoginModal}
              setShowLoginModal={setShowLoginModal}
              isMobile={isMobile}
              setOpenMenu={setOpenMenu}
              openMenu={openMenu}
              username={state.username}
            /> 
            ) : (
            <DesktopNav 
              showLoginModal={showLoginModal}
              setShowLoginModal={setShowLoginModal}
              isMobile={isMobile}
              username={state.username}
            />
        )}
      </>
  )
}

export default Nav