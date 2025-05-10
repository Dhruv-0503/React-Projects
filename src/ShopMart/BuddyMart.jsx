import React, { useState } from 'react'
import './BuddyMart.css'
import NavBar from './Components/NavBar'
import ItemList from './Components/ItemList'
import Cart from './Components/Cart'

function BuddyMart() {
    const [cart,setCart] = useState([]);
    const [warning,setWarning] = useState(false);
    const [show, setShow] = useState(true);
    
    const handleClick = (item) =>{
        let ispresent = false;
        cart.forEach((product)=>{
            if(item.id===product.id){
                ispresent = true;
            }
        })
        if(ispresent){
            setWarning(true);
            setTimeout(()=>{
                setWarning(false);
            },2000);
        }
        else{
           setCart([...cart,item])
        }
        
    }
  return (
    <div>
      <NavBar size={cart.length} setShow={setShow}/>
      {
        show ? <ItemList handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart}/>
      }
      {warning && <div className='warning'>Item Already In Cart !!</div>}
    </div>
  )
}

export default BuddyMart
