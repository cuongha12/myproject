import { combineReducers } from "redux";
import cartReducer from "./cart";
import SearchReducer from "./search";
import UserReducer from "./user";
const allReducer = combineReducers({
    cart: cartReducer,
    user: UserReducer,
    text: SearchReducer
})

export default allReducer;