import React from 'react'

const Button = ({children, onClick, className}) => {
  return (
    <button className={` bg-gradient-to-t from-color1 to-color1 text-white rounded py-2 px-3 font-semibold hover:shadow-lg hover:px-4 transition ease-in-out duration-200 ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button