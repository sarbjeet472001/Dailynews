import React from 'react'
import logo from './spinner.gif'

const Spinner = () => {
  return (
    <div className='text-center mb-3'>
      <img src={logo} alt="loading" />
    </div>
  )
}

export default Spinner
