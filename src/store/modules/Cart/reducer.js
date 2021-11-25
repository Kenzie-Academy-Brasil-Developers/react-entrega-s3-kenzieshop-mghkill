const cartStorage = localStorage.getItem("@Cart:products") || ["testet"];

const cartReducer = (state = cartStorage, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;
