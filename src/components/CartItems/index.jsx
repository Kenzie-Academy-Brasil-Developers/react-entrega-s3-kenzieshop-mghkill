import { useDispatch, useSelector } from "react-redux";
import { removeCartThunk } from "../../store/modules/Cart/thunks";
import Product from "../Product";
import "./styles.css";
const CartItems = () => {
  const cart = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeCartThunk(item));
  };

  return (
    <div className="CartStyles">
      {cart ? (
        cart.map((item, index) => (
          <div key={index}>
            <Product
              item={item}
              handle={handleRemoveItem}
              children={"Remover"}
            />
          </div>
        ))
      ) : (
        <h1>Carrinho está vazio</h1>
      )}
    </div>
  );
};
export default CartItems;
