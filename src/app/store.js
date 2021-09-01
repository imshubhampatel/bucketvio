import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import mobileReducer from "../features/mobiles/mobileSlice";
import filterReducer from "../features/filters/filterSlice";
import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import authReducer from "../features/auth/authSlice";



export default configureStore({
    reducer: {
        mobiles: mobileReducer,
        filters: filterReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        auth: authReducer
    },
    middleware: [thunk, logger]
})