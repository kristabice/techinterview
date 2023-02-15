import React from 'react'
import classNames from 'classnames'

const Button = ({handleClick, actionText, type}) => (
    <button 
    className={classNames('button',
      {'primary-outline': type === 'primary-outline'},
      {'primary': type === 'primary'},
    )}
    onClick={handleClick}
    >
      {actionText}
    </button>
  )

  export default Button