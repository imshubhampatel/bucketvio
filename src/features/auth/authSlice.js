import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

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
        getUser: (state) => {
            state.loading = true;
        },
        getUserSuccess: (state, { payload }) => {
            state.isAuthenticated = true;
            state.userToken = payload;
            state.loading = false;
        },
        getUserFailure: (state, { payload }) => {
            state.hasErrors = payload;
            state.loading = false;
            state.isAuthenticated = false;
        },
        setUser: (state, { payload }) => {
            state.userDetails = payload;

        }
    }
})

export const { getUser, getUserSuccess, getUserFailure,setUser } = authSlice.actions;
export const authSelecter = state => state.auth;
const authReducer = authSlice.reducer
export default authReducer;

export function fetchUser(userCrediential) {
    return async (dispatch) => {
        dispatch(getUser())
        try {
            const { email, password } = userCrediential;
            const data = qs.stringify({
                email: email,
                password: password
            })

            console.log(data)

            const config = {
                method: "post",
                url: `${process.env.REACT_APP_SERVER_URL}users/sign-in`,
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: data
            }
            await axios(config)
                .then((response) => {
                    dispatch(getUserSuccess(response.data.data.token))
                    localStorage.setItem("token", JSON.stringify(response.data.data.token))
                })
                .catch((err) => {
                    dispatch(getUserFailure(err.response.data))
                })
        } catch (err) {
            console.log("error", err)

        }
    }

}


export function setUserDetails() {
    return async (dispatch) => {
        try {
            const accessToken =  JSON.parse(localStorage.getItem("token"));
            console.log("acces", accessToken)

            const config = {
                method: "get",
                url: `${process.env.REACT_APP_SERVER_URL}users/`,
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "content-type": "application/x-www-form-urlencoded"
                },
            }
            await axios(config)
                .then((response) => dispatch(setUser(response.data)))
                .catch((err) => console.log(err.response));

        } catch (err) {
            console.log("error", err)

        }
    }

}



