import React, { useState } from 'react';
import { createContext } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([{name: "Samsung Galaxy A03s", qty: 3}]);  

  return (
    <CartContext.Provider value={{cart, setCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext; 


