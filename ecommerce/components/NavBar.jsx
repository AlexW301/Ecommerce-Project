import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping, AIOutlineShopping } from 'react-icons/ai'

function NavBar() {
  return (
    <div className='navbar-container'>
      <p>
        <Link href={'/'}>
          JSM Headphones
        </Link>
      </p>

      <button type="button" className='cart-icon' onClick={''}>
          <AiOutlineShopping />
          <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default NavBar