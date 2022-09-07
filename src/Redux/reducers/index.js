import { combineReducers } from "redux";
import cartReducer from "./cart";
import UserReducer from "./user";
const allReducer = combineReducers({
    cart: cartReducer,
    user:UserReducer
})

export default allReducer;