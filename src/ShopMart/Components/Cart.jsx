import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setPrice(total);
  }, [cart]);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0);
      setCart(updatedCart);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  }
  return (
    <div className="cart-page">
      {cart.length > 0 ? (
        cart.map((items) => (
          <div className="cart-container" key={items.id}>
            <div className="cart-item">
              <div className="cartItem-img">
                <img src={items.img} alt="img" />
              </div>
              <div className="cartItem-det">
                <p>Name : {items.title}</p>
                <p>Price : {items.price} Rs.</p>
                <p>Quantity : {items.quantity}</p>
              </div>
            </div>
            <div className="cart-buttons">
              <button onClick={() => increaseQuantity(items.id)}>+</button>
              <button onClick={() => decreaseQuantity(items.id)}>-</button>
              <button onClick={() => removeItem(items.id)}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty!</p>
      )}
      <div className="total">
        Total Amount : {price} Rs.
      </div>
    </div>
  );
};

export default Cart;
