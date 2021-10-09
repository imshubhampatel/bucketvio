import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { getLoggedOut } from '../../features/auth/authSlice';
import { setSnackBar } from '../../features/filters/filterSlice';

export default function Hover() {
    const history = useHistory();
    const { isAuthenticated } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    async function realoadFunc() {

        await fetch("http://localhost:5000/api/v1/users/sign-out")
            .then(response => response.json())
            .then(data => console.log(data))

        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
    return (
        <>

            <ul className="parent-hover-login">
                {
                    isAuthenticated
                        ? <>
                            <li className="user" onClick={() => history.push("/account/1234")}><i className="fas fa-user-circle" ></i>My Profile</li>
                            <li className="wishlist"><i className="fas fa-heart"></i>Wishlist</li>
                            <li className="orders"><i className="fas fa-box"></i>Orders</li>
                            <li className="about"><i className="fas fa-user-circle"></i>My Chats</li>
                            <li className="about"><i className="fas fa-wallet"></i>Gift Card</li>
                            <li className="notification"><i className="far fa-bell"></i>Notifications</li>
                            <li className="logout" onClick={() => { dispatch(getLoggedOut()); dispatch(setSnackBar({ message: "Successfully Logged Out", type: "exclamation-circle" })); realoadFunc() }}><i className="fas fa-power-off"></i>Logout</li>
                            <div></div>
                        </>
                        : null

                }
            </ul>
        </>
    )
}
