import React from 'react'
import './Button.css'

const Button = ({ ghost, children, ...props }) => {
  
  return (
    <button 
      {...props}
      className={ghost ? 'ghost' : ''}>
        {children}
    </button>
  )
}

export default Button