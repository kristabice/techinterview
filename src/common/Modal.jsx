import React from 'react'
import classNames from 'classnames'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import Button from './Button'

const Modal = ({showModal, title, children, submitText, closeText, handleSubmit, handleCloseModal}) => {


  return(
    <div className={classNames("modal",{show: showModal}, {hide: !showModal})}>
      <div className='modal-content'>
        <div className='modal-header'>
          <h1>{title}</h1>
          <button className='close-button' onClick={() => handleCloseModal()}><AiOutlineCloseCircle /></button>
        </div>
        <div className='modal-body'>
          {children}
        </div>
        <div className='modal-footer'>
          <Button actionText={closeText} type="primary-outline" handleClick={() => handleCloseModal()}/>
          <Button actionText={submitText} type="primary" handleClick={() => handleSubmit()}/>
        </div>
      </div>
    </div>
  )

}

export default Modal