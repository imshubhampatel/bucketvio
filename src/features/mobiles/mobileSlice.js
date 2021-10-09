import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading: false,
    hasErrors: null,
    mobilesId: [],
    mobiles: []
};

const mobileSlice = createSlice({
    name: "mobiles",
    initialState,
    reducers: {
        getMobiles: (state) => {
            state.loading = true;
        },
        getMobilesSuccess: (state, action) => {
            const mobileIds = action.payload.map(item => item._id)
            state.mobiles = action.payload;
            state.mobilesId = mobileIds;
            state.hasErrors = false;
            state.loading = false;
        },
        getMobilesFailure: (state, action) => {
            state.loading = false;
            state.hasErrors = action.payload;
        }
    }
})

export const { getMobiles, getMobilesSuccess, getMobilesFailure } = mobileSlice.actions;
export const mobileSelector = state => state.mobiles;
export default mobileSlice.reducer;


export function fetchMobiles() {
    return async (dispatch) => {
        dispatch(getMobiles());

        try {
            const response = await fetch(`http://localhost:5000/api/v1/users/product`);
            const data = await response.json();
            console.log(data)
            setTimeout(() => {
                dispatch(getMobilesSuccess(data.data.allProducts))
            }, 1000)
        } catch (err) {
            dispatch(getMobilesFailure(err))
        }
    }
}
