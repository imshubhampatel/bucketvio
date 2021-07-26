import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import mobileReducer from "../features/mobiles/mobileSlice";
import filterReducer from "../features/filters/filterSlice"



export default configureStore({
    reducer: {
        mobiles: mobileReducer,
        filters: filterReducer
    },
    middleware: [thunk, logger]
})