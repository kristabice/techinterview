import React, {useState, useContext, useEffect} from 'react'

import DesktopNav from '../components/DesktopNav'
import MobileNav from '../components/MobileNav'
import { LoginContext } from '../context/LoginContext'
import {useWindowSize} from '../utils/ResizeHook'
import { users } from '../assets/MOCK_DATA'


const Nav = () => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [openMenu, setOpenMenu] = useState(false);
  const {dispatch} = useContext(LoginContext)
  useWindowSize();
  const isMobile = window.matchMedia('(max-width: 600px)').matches

  useEffect(() => {
    if(document.cookie) {
      const cookie = document.cookie.match(/(?<name>username:)(?<username>.*)/)

      const username = cookie.groups.username.trim()
      dispatch({type: 'login', payload: {username: username}})

      const isAdmin = users.filter(user => {
        return user.admin === true && user.customer_id === username.trim()
       })

       if(isAdmin.length) {
        dispatch({type: 'setUser', payload: {user: users, admin: true}})
      } else {
        const user = users.filter(user => user.customer_id === username)
        dispatch({type: 'setUser', payload: {user: user, admin: false}})
      }
    }
  }, [dispatch])


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
      /> 
      ) : (
      <DesktopNav 
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        isMobile={isMobile}
      />
      )}
      </>

  )
}

export default Nav