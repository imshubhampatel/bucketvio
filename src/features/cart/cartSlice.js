import { bindActionCreators, createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading: false,
    hasErrors: false,
    cartItemId: [],
    cartItem: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemInCart: (state, { payload }) => {
            state.cartItem = [payload, ...state.cartItem];
            state.cartItemId = [payload.id, ...state.cartItemId]
        }
    }
});

export const { addItemInCart, getCartItem, getCartItemFailure, getCartItemSuccess } = cartSlice.actions;
export const cartSelecter = state => state.cartItem;

export default cartSlice.reducer;

  // getCartItem: (state) => {
        //     state.loading = true;
        // },
        // getCartItemFailure: (state, { payload }) => {
        //     state.loading = false;
        //     state.hasErrors = true;
        // },
        // getCartItemSuccess: (state, { payload }) => {
        //     state.loading = false;
        //     state.cartItem = payload;
        //     state.cartItemId = payload.id;
        // }