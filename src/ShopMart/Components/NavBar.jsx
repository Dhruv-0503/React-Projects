import React from 'react'
import './NavBar.css'


function NavBar({size,setShow}) {
  return (
    <nav>
        <p onClick={()=>setShow(true)}>BuddyMart</p>
        <button onClick={()=>setShow(false)}><i className='fas fa-cart-plus'></i>&nbsp;{size}</button>
    </nav>
  )
}

export default NavBar
