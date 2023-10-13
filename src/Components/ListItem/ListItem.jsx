import React from 'react';
import './ListItem.css';

export const ListItem = (props) => {
  return (
    <div className='item'>
        <div className='item-inner-upper'>
          <img className='item-img' src={props.img} alt="img" />
        </div>
        <div className='item-inner-lower'>
          <p className='item-title'>{props.title}</p>
          <div className='item-btn-outer'>
            <div className='item-btn'>Add to Cart</div>
          </div>
        </div>
    </div>
  )
}
