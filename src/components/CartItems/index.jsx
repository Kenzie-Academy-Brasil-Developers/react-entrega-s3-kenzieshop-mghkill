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
    <>
      {cart.map((item, index) => (
        <div className="cart-list" key={index}>
          <div className="amount"> Quantidade: {item.amout} </div>
          <Product item={item} handle={handleRemoveItem} children={"Remover"} />
        </div>
      ))}
    </>
  );
};
export default CartItems;
