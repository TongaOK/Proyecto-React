import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/common/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a 2CHAINS"} />
      <h3 style={{ textAlign: "center" }}>
        Somo una web dedicada a la venta de joyeria para OGs
      </h3>
    </div>
  );
};

export default App;
