import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import {Cart} from './';
import { useStateContext } from '../Context/StateContext';

const Navbar = () => {
  const {showCart,setShowCart,totalQuantities}=useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">JSM Headphones</Link>
      </p>
      <button className="cart-icon" type="button" onClick={()=>setShowCart(true)} >
      <AiOutlineShopping/>
      <span className='cart-item-qty'>{totalQuantities}</span>      


      </button>
      {showCart && <Cart/>}
    </div>
  )
}

export default Navbar
