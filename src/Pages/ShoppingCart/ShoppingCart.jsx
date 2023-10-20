import React, { useContext } from 'react';
import { ListView } from '../../Components/ListView/ListView';
import './ShoppingCart.css';
import removeImg from '../../assets/icons8-cancel-48.png';
import cartImg from '../../assets/icons8-cart-80.png';
import CartContext from '../../hooks/CartContext';



export const ShoppingCart = () => {

  const {cart, setCart} = useContext(CartContext);

  const removeFromCartOnClick = (index) => {
    setCart((prev) => {
      const updatedCart = [...prev];
      updatedCart.splice(index, 1);
      return updatedCart;
    })
  }

  return (
    <div>
        <div className='page-title'>Items</div>

        <ListView/>

        <div className='cart-outer'>
          <div className='cart-title'>Cart</div>
          <div className='cart-inner'>
            <div className='cart-img-outer'>
              <img className='cart-img' src={cartImg} alt="" />
            </div>
            <div className='cart-details'>
              <table>
                <tr>
                  <th style={{width: "300px"}}>Items</th>
                  <th>Qty</th>
                </tr>
                {cart.map((cartItem, index) => (
                  <tr>
                    <td>{index+1}.{cartItem.name}</td>
                    <td>{cartItem.qty}</td>
                    <td>
                      <img onClick={() => removeFromCartOnClick(index)} className='img-cancel' src={removeImg} alt="" /><br />
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
    </div>
  )
}
