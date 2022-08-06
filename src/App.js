import logo from "./logo.svg";
import "./App.css";

import Products from "./components/Products";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/Cart";
import Summary from './components/Summary';

function App() {
  return (
    <CartProvider>
      <Products />

      <Cart />

      <Summary />
    </CartProvider>
  );
}

export default App;
