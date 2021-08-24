import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading: false,
    hasErrors: null,
    cartItem: JSON.parse(localStorage.getItem("CART")) || [],
    cartItemId: JSON.parse(localStorage.getItem("CART_ID")) || [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemInCart: (state, { payload }) => {
            state.cartItem = [...state.cartItem, { ...payload, quantity: 1 }];
            state.cartItemId = [payload.id, ...state.cartItemId]
        },
        increaseOneMore: (state, { payload }) => {
            const increasedItem = state.cartItem.map((itemInCart) => {
                return itemInCart.id === payload.id
                    ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
                    : itemInCart;
            })
            state.cartItem = increasedItem;
        },
        dicreaseOneMore: (state, { payload }) => {
            const increasedItem = state.cartItem.map((itemInCart) => {
                return itemInCart.id === payload.id
                    ? { ...itemInCart, quantity: itemInCart.quantity - 1 }
                    : itemInCart;
            })
            state.cartItem = increasedItem;
        },
        removeItemFromCart: (state, { payload }) => {
            state.cartItem = state.cartItem.filter((item) => item.id !== payload.id);
            state.cartItemId = state.cartItemId.filter(item => item !== payload.id);
        }
    }
});

export const { dicreaseOneMore, increaseOneMore, removeItemFromCart, addItemInCart/*, getCartItem, getCartItemFailure, getCartItemSuccess*/ } = cartSlice.actions;
export const cartSelecter = state => state.cart;

const cartReducer = cartSlice.reducer;

export default cartReducer;

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