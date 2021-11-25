import "./App.css";
import ProductList from "./components/ProductList";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((store) => store.cart);
  console.log(cart);
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
