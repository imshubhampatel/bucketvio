import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    sortBy: null,
    sortByPrice: null,
    showFastDelivery: false,
    showOutOfStock: false,
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
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

export const { setShowFastDelivery, setShowOutOfStock, setSortBy, setSortByPrice } = filterSlice.actions;
export const filterSelecter = state => state.filters;
export default filterSlice.reducer;


