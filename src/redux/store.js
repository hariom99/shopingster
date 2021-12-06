import { combineReducers, createStore } from "redux";
import userReducer from "./users";
import productReducer from "./products";
import cartReducer from "./cart";
import userOrdersReducer from "./orders";


const rootReducer = combineReducers({
    userReducer: userReducer,
    products: productReducer,
    cart: cartReducer,
    orders: userOrdersReducer,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
