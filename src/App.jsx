import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/common/ItemListContainer/ItemListContainer";
import ItemDetailsContainer from "./components/common/ItemDetailsContainer/ItemDetailsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
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
          <Route path="/item/:itemId" element={<ItemDetailsContainer />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
