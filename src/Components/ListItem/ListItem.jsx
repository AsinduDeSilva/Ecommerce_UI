import React, { useContext } from 'react';
import './ListItem.css';
import CartContext from '../../hooks/CartContext';

export const ListItem = (props) => {

  const {cart, setCart} = useContext(CartContext);

  const addtoCartOnClick = () => {

    const index = cart.findIndex((cartItem) => cartItem.name === props.title);

    if(index !== -1){
      setCart((prev) => {
        const updatedCart = [...prev];
        updatedCart[index] = {name: props.title, qty: updatedCart[index].qty++};
        return updatedCart;
      })
      return;
    };

    setCart((prev) => {
      const updatedCart = [...prev];
      updatedCart.push({name: props.title, qty:1});
      return updatedCart;
    });
  }

  return (
    <div className='item'>
        <div className='item-inner-upper'>
          <img className='item-img' src={props.img} alt="img" />
        </div>
        <div className='item-inner-lower'>
          <p className='item-title'>{props.title}</p>
          <div className='item-btn-outer'>
            <div onClick={addtoCartOnClick} className='item-btn'>Add to Cart</div>
          </div>
        </div>
    </div>
  )
}
