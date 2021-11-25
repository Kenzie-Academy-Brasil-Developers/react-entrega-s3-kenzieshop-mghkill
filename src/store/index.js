import { createStore, combineReducers, applyMiddleware } from "redux";

import cartReducer from "./modules/Cart/reducer";

import thunk from "redux-thunk";

const reducers = combineReducers({ cart: cartReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
