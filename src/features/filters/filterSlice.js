import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    sortBy: null,
    sortByPrice: null,
    fastDelivery: false,
    outOfStock: false,
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        setFastDevlivery: (state) => {
            state.fastDelivery = !state.fastDelivery;
        },
        setOutOfStock: (state) => {
            state.outOfStock = !state.outOfStock;

        },
        setSortByPrice: (state, action) => {
            state.sortByPrice = action.payload;
        }
    }
})

export const { setFastDevlivery, setOutOfStock, setSortBy, setSortByPrice } = filterSlice.actions;
export const filterSelecter = state => state.filters;
export default filterSlice.reducer;


