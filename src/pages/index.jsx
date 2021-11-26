import { Switch, Route } from "react-router-dom";
import ProductList from "../components/ProductList";
import CartItems from "../components/CartItems";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route exact path="/cart">
          <CartItems />
        </Route>
      </Switch>
    </div>
  );
};
export default Routes;
