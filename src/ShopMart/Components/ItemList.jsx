import React from 'react';
import './ItemList.css';
import List from '../List.js';

function ItemList({handleClick}) {
  return (
    <div className="ItemList-container">
      {List.map((item, index) => (
        <div key={index} className="item">
          <img className="item-img" src={item.img} alt="items" />
          <br />
          <p className="item-title">Name: {item.title}</p>
          <br />
          <p className="item-author">Author: {item.author}</p>
          <br />
          <p className="item-price">Price: {item.price} Rs.</p>
          <br />
          <button className="item-btn" onClick={()=> handleClick(item)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
