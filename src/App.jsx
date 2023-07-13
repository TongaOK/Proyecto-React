import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/common/ItemListContainer/ItemListContainer";
import ItemDetails from "./components/common/ItemDetails/ItemDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/common/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/common/Checkout/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <h3 style={{ textAlign: "center" }}>
          Somo una web dedicada a la venta de joyeria para OGs
        </h3>
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer greeting={"Bienvenido a 2CHAINS"} />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting={"Bienvenido a 2CHAINS"} />}
          />
          <Route path="/item/:itemId" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route patch="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
