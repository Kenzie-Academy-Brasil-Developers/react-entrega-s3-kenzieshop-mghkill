import { useSelector } from "react-redux";
import "./App.css";
import Routes from "./pages";

function App() {
  const cartGlobal = useSelector((store) => store.cart);
  console.log(cartGlobal);
  return (
    <div className="App">
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
