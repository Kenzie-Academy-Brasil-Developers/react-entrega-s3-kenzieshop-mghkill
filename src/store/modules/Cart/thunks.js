import { addItemCard, removeItemCard } from "./actions";

export const addCartThunk = (itemObj, count) => (dispatch) => {
  itemObj.amout = count;
  itemObj.price = itemObj.price * count;

  const getStorage = JSON.parse(localStorage.getItem("@Cart:products")) || [];

  const updateObj = [...getStorage, itemObj];

  localStorage.setItem("@Cart:products", JSON.stringify(updateObj));

  dispatch(addItemCard(updateObj));
};

export const removeCartThunk = (itemObj) => (dispatch) => {
  const getStorage = JSON.parse(localStorage.getItem("@Cart:products")) || [];

  const updateObj = getStorage.filter((item) => item.id !== itemObj.id);

  localStorage.setItem("@Cart:products", JSON.stringify(updateObj));

  dispatch(removeItemCard(updateObj));
};
