import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchUser = createAsyncThunk(
    'auth/fetchUser',
    async (userCrediential, thunkAPI) => {
        const data = await qs.stringify({
            email: userCrediential.email,
            password: userCrediential.password
        })
        const config = {
            method: "post",
            url: `${process.env.REACT_APP_SERVER_URL}users/sign-in`,
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: data
        }
        const response = await axios(config)
        return response.data;
    }
)

export const setUserDetails = createAsyncThunk(
    "auth/setUser",
    async () => {

        const accessToken = JSON.parse(localStorage.getItem("token"));

        const config = {
            method: "get",
            url: `${process.env.REACT_APP_SERVER_URL}users/`,
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "content-type": "application/x-www-form-urlencoded"
            },
        }
        const response = await axios(config);
        console.log(response.data)
        return response.data
    }
)

export const initialState = {
    loading: false,
    userDetails: null,
    hasErrors: null,
    accessToken: JSON.parse(localStorage.getItem("token")) || null,
    isAuthenticated: JSON.parse(localStorage.getItem("token")) ? true : false,

};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.userDetails = payload;
        }
    },
    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.loading = true;
        },
        [fetchUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.accessToken = payload.data.token;
            localStorage.setItem("token", JSON.stringify(payload.data.token));
            state.isAuthenticated = true;
        },
        [fetchUser.rejected]: (state, { payload }) => {
            console.log(payload)
            state.loading = false;
            state.isAuthenticated = false;
            state.hasErrors = payload;
        },
        [setUserDetails.pending]: (state) => {
            state.loading = true;
        },
        [setUserDetails.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.userDetails = payload;
        },
        [setUserDetails.rejected]: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.hasErrors = payload;
        },
    }
})

export const { getUser, getUserSuccess, getUserFailure, setUser } = authSlice.actions;
export const authSelecter = state => state.auth;
const authReducer = authSlice.reducer
export default authReducer;









// export function setUserDetails() {
//     return async (dispatch) => {
//         try {
//             const accessToken = JSON.parse(localStorage.getItem("token"));
//             console.log("acces", accessToken)

//             const config = {
//                 method: "get",
//                 url: `${process.env.REACT_APP_SERVER_URL}users/`,
//                 headers: {
//                     "Authorization": `Bearer ${accessToken}`,
//                     "content-type": "application/x-www-form-urlencoded"
//                 },
//             }

//             await axios(config)
//                 .then((response) => {
//                     console.log(response.data)
//                     dispatch(setUser(response.data))
//                 })
//                 .catch((err) => {
//                     console.log(err.response.data)
//                     dispatch(getUserFailure(err.response.data))
//                 });

//         } catch (err) {
//             console.log("error", err)

//         }
//     }

// }



