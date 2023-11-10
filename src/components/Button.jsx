import React from 'react'

const Button = ({darah, btnongo}) => {
  return (
    <button className='btn' style={{backgroundColor:btnongo}}>
        <h3>{darah}</h3>
    </button>
  )
}

export default Button