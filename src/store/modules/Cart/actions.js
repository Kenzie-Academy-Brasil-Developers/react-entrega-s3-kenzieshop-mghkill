import { ADD_CART, REMOVE_CART } from "./actionsType";

export const addItemCard = (updateItem) => ({
  type: ADD_CART,
  updateItem,
});
export const removeItemCard = (updateItem) => ({
  type: REMOVE_CART,
  updateItem,
});
