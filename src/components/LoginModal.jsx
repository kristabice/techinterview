import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames'

import Modal from '../common/Modal'
import { LoginContext } from '../context/LoginContext'
import { users } from '../assets/MOCK_DATA';


const LoginModal = ({showLoginModal, setShowLoginModal}) => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const {dispatch, state} = useContext(LoginContext)
  let navigate = useNavigate();

  const handleCloseModal = () => {
    setError(false)
    setShowLoginModal(false)
  }

  const handleSubmit = () => {
    if(state.username) {
      dispatch({type: 'logout'})
      return;
    }
    validation()
    setUsers()
    handleCloseModal()
  }
  
  const validation = () => {
    if(username === '' || username === undefined) setError(true)

     if(password === '' || password === undefined) setPasswordError(true)

    if(error || passwordError)
      return
  }

  const setUsers = async () => {
    const isAdmin = users.filter(user => {
      return user.admin === true && user.username === username?.trim()
    })

    const removeAdmin = users.filter(user => {
      return user.admin !== true
    })

    await dispatch({type: 'login', payload: {username: username}})

    if(isAdmin.length) {
      await dispatch({type: 'setUser', payload: {user: removeAdmin, admin: true}})
      navigate('/admin')
    } else {
      const user = users.filter(user => (user.username === username) && (user.password === password))
      if(user.length === 0) {
        await dispatch({type: 'logout'})
        return;
      }
      await dispatch({type: 'setUser', payload: {user: removeAdmin, admin: false}})
      navigate('/orders')
    }
  }

 return(
   <Modal 
    showModal={showLoginModal}
    title={state.username ? 'Log-Out' : 'Sign-In'} 
    closeText="Cancel" 
    submitText={state.username ? 'Log-Out' : 'Sign-In'}
    handleCloseModal={handleCloseModal}
    handleSubmit={() => handleSubmit()}
  >
    {!state.username && ( 
      <>
        <label>Username *<br/>
          <input 
            className={classNames({error: error})}
            type="text" 
            placeholder='Enter you username' 
            value={username} 
            onChange={e => setUsername(e.target.value)}
          />
          {error && <p className='error'>Username is required</p>}

          <input 
            className={classNames({error: error})}
            type="text" 
            placeholder='Enter you assword' 
            value={password} 
            onChange={e => setPassword(e.target.value)}
          />
          {passwordError && <p className='error'>Password is required</p>}
        </label>
        </>
    )}
  </Modal>
 )
}

export default LoginModal