import React from 'react';
import { ListView } from '../../Components/ListView/ListView';
import './ShoppingCart.css';
import cart from '../../assets/icons8-cart-80.png';
import cancel from '../../assets/icons8-cancel-48.png';


export const ShoppingCart = () => {
  return (
    <div>
        <div className='page-title'>Items</div>

        <ListView/>

        <div className='cart-outer'>
          <div className='cart-title'>Cart</div>
          <div className='cart-inner'>
            <div className='cart-img-outer'>
              <img className='cart-img' src={cart} alt="" />
            </div>
            <div className='cart-details'>
              <p>Items</p>
              <span>1.Samsung Galaxy A03s</span>
              <img className='img-cancel' src={cancel} alt="" /><br />
              <span>2.Apple iPhone 1164GB</span>
              <img className='img-cancel' src={cancel} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}
