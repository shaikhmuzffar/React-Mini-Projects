import React from 'react'
import { FiMenu } from 'react-icons/fi';

export default function Navbar() {
  return (
    <div className='navbar'>
      <FiMenu className='navIcon' size="22px"/>
      <span className='appName'>MuzzuDo</span>
    </div>
  )
}
