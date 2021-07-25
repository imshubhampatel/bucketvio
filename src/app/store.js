import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import mobileReducer from "../features/mobiles/mobileSlice";


export default configureStore({
    reducer: {
        mobiles: mobileReducer
    },
    middleware: [thunk, logger]
})