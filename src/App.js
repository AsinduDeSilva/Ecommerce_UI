import { ShoppingCart } from './Pages/ShoppingCart/ShoppingCart';
import { CartContextProvider } from './hooks/CartContext';

function App() {
  return (
    <CartContextProvider>
      <ShoppingCart/>
    </CartContextProvider>
  );
}

export default App;
