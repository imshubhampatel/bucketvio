import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    hasErrors: null,
    wishlistItem: JSON.parse(localStorage.getItem("WISHLIST")) || [],
    wishlistItemId: JSON.parse(localStorage.getItem("WISHLIST_ID")) || [],
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, { payload }) => {
            state.wishlistItem = [payload, ...state.wishlistItem]
            state.wishlistItemId = [payload.id, ...state.wishlistItemId]
        },
        removeToWishlist: (state, { payload }) => {
            state.wishlistItem = state.wishlistItem.filter(item => item.id !== payload.id);
            state.wishlistItemId = state.wishlistItemId.filter(item => item !== payload.id);
        }
    }
})

export const { addToWishlist, removeToWishlist } = wishlistSlice.actions;

export const wishlistSelector = (state) => state.wishlist

const wishlistReducer = wishlistSlice.reducer;
export default wishlistReducer;

