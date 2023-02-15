import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames'

import Modal from '../common/Modal'
import { LoginContext } from '../context/LoginContext'
import { users } from '../assets/MOCK_DATA';


const LoginModal = ({showLoginModal, setShowLoginModal}) => {
  const [username, setUsername] = useState()
  const [error, setError] = useState(false)
  const {dispatch, state} = useContext(LoginContext)
  let navigate = useNavigate();

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const handleCloseModal = () => {
    setError(false)
    setShowLoginModal(false)
  }

  const handleSubmit = () => {
    if(state.username) {
      dispatch({type: 'logout'})
      return;
    }
    if(username === '' || username === undefined) {
      setError(true)
      return
    } else {
      const isAdmin = users.filter(user => {
         return user.admin === true && user.customer_id === username.trim()
        })

      dispatch({type: 'login', payload: {username: username}})
      handleCloseModal()
      if(isAdmin.length) {
        dispatch({type: 'setUser', payload: {user: users, admin: true}})
        navigate('/admin')
      } else {
        const user = users.filter(user => user.customer_id === username)
        dispatch({type: 'setUser', payload: {user: user, admin: false}})
        navigate('/orders')
      }
    }
  }
  console.log(state)

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
            onChange={e => handleChange(e)}
          />
        </label>
        {error && <p className='error'>Username is required</p>}
        </>
    )}
  </Modal>
 )
}

export default LoginModal