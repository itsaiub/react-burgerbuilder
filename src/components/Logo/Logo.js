import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'

import './Logo.css'

const Logo = () => {
  return (
    <div className='Logo'>
      <img src={burgerLogo} alt="MyBurger"/>
    </div>
  )
}

export default Logo
