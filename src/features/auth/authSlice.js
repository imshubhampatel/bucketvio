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

        try {
            const response = await axios(config)
            return response.data;

        } catch (error) {
            // console.log("error.response", error.response)
            // console.log("error.response data", error.response.data)
            // if (error.message === "Could not connect to any servers in your MongoDB A…ttps://docs.atlas.mongodb.com/security-whitelist/") {
            // return thunkAPI.rejectWithValue({ message: "you are offline" })
            // }
            return thunkAPI.rejectWithValue(error.response.data)
        }

    }
)

export const setUserDetails = createAsyncThunk(
    "auth/setUser",
    async (accessToken, thunkAPI) => {

        const config = {
            method: "get",
            url: `${process.env.REACT_APP_SERVER_URL}users/`,
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "content-type": "application/x-www-form-urlencoded"
            },
        }
        try {
            const response = await axios(config);
            console.log(response.data)
            return response.data;

        } catch (error) {
            console.log(error.response.data)
            return thunkAPI.rejectWithValue(error.response.data)
        }

    }
)

export const initialState = {
    loading: false,
    userDetails: null,
    hasErrors: null,
    accessToken: null,
    isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")),

};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getLoggedOut: (state) => {
            state.accessToken = null;
            state.hasErrors = null;
            state.userDetails = null;
            state.isAuthenticated = false;
            localStorage.clear();
            // one request is to be sent
        }
    },
    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.loading = true;
        },
        [fetchUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.accessToken = payload.data.token;
            localStorage.setItem("isAuthenticated", JSON.stringify(payload.data.success));
            state.isAuthenticated = true;
        },
        [fetchUser.rejected]: (state, { payload }) => {
            console.log("in error", payload)
            state.loading = false;
            state.isAuthenticated = false;
            state.hasErrors = payload;
            localStorage.clear();
        },

        // setUser details are here ///////////////////////////////////////////////////
        [setUserDetails.pending]: (state) => {
            state.loading = true;
        },
        [setUserDetails.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.userDetails = payload;
        },
        [setUserDetails.rejected]: (state, action) => {
            console.log("in reducer", action)
            state.loading = false;
            // state.hasErrors = action.payload;
            // state.accessToken = null;
            // state.isAuthenticated = false;
        },
    }
})

export const { getLoggedOut } = authSlice.actions;
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



