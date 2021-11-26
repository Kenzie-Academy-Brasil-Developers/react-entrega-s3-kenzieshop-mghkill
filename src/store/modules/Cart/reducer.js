import { ADD_CART, REMOVE_CART } from "./actionsType";

const cartStorage = JSON.parse(localStorage.getItem("@Cart:products")) || [];

const cartReducer = (state = cartStorage, action) => {
  console.log(action.updateItem);
  switch (action.type) {
    case ADD_CART:
      return action.updateItem;
    case REMOVE_CART:
      return action.updateItem;
    default:
      return state;
  }
};

export default cartReducer;
