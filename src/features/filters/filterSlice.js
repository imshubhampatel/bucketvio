import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    sortBy: null,
    sortByPrice: null,
    showFastDelivery: false,
    showOutOfStock: false,
    showBnackbar: false,
    snackBarMsg: "",
    snackBarType: "",


};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSnackBar: (state, { payload }) => {
            state.showBnackbar = true;
            state.snackBarMsg = payload.message;
            state.snackBarType = payload.type;
        },
        resetSnackBar: (state) => {
            state.showBnackbar = false;
            state.snackBarMsg = "";
            state.snackBarType = "";

        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        setSortByPrice: (state, action) => {
            state.sortByPrice = action.payload;
        },
        setShowFastDelivery: (state) => {
            state.showFastDelivery = !state.showFastDelivery;
        },
        setShowOutOfStock: (state) => {
            state.showOutOfStock = !state.showOutOfStock;

        }
    }
})

export const { setShowFastDelivery, resetSnackBar, setSnackBar, setShowOutOfStock, setSortBy, setSortByPrice } = filterSlice.actions;
export const filterSelecter = state => state.filters;
export default filterSlice.reducer;


