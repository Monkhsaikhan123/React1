import React from 'react'
import Button from './Button'

const Header = ({garchig}) => {
  return (
    <header className='header'>
        <h1>{garchig}</h1>
        <Button btnongo="green "darah='Дарна уу'/>
    </header>
  )
}

export default Header
