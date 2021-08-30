import React, { useEffect, useState } from "react";
import { emailPattern, passwordPattern } from "../../utilities/pattern";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, setUserDetails } from "../../features/auth/authSlice";
import "./login.css"
import { useHistory, Link } from "react-router-dom";
import { setSnackBar } from "../../features/filters/filterSlice"


export default function Login() {
    const { isAuthenticated } = useSelector(state => state.auth)
    const history = useHistory();
    const dispatch = useDispatch();

    const [userCrediential, setUserCrediential] = useState({
        email: "",
        password: "",
    })




    const { email, password } = userCrediential;

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(fetchUser(userCrediential))
        dispatch(setSnackBar({ type: "check-circle", message: "Successfully logged In" }))
    }

    if (isAuthenticated) {
        setTimeout(() => {
            history.push("/")
        }, 1500);
    }

    useEffect(() => {
        return () => {
            if (isAuthenticated) {
                console.log("cleanUP called")
                dispatch(setUserDetails())
            }
        }
    }, [dispatch, isAuthenticated])
    return (
        <>
            <section>
                <div className="sign-in">
                    <div className="img-container">
                        <div>
                            <h1>Login</h1>
                        </div>
                        <div className="form-text">
                            <p>Get access to your Orders, Wishlist and Recommendations</p>
                        </div>
                        <div className="form-image">
                        </div>
                    </div>
                    <div className="form-container">
                        <form>
                            <div className="input-items">
                                <div className="email-input input-container">
                                    <label htmlFor="email">ENTER YOUR EMAIL</label>
                                    <input type="text" value={email} id="email" onChange={(event) => setUserCrediential({ ...userCrediential, email: event.target.value })} placeholder="Enter email" autoComplete="true" />
                                    {email !== "" ? emailPattern.test(email) ? <i className="fas fa-check-circle icon-style icon-green"></i> : <span><i className="fas fa-times-circle icon-style icon-red"></i></span> : null}
                                </div>
                                <div className="input-container">
                                    <label htmlFor="password">PASSWORD</label>
                                    <input type="password" id="password" value={password} onChange={(event) => setUserCrediential({ ...userCrediential, password: event.target.value })} placeholder="Enter password" autoComplete="true" />
                                    {password !== "" ? passwordPattern.test(password) ? <i className="fas fa-check-circle icon-style icon-green"></i> : <span><i className="fas fa-times-circle icon-style icon-red"></i></span> : null}
                                </div>
                                <div className="input-container">
                                    <button type="submit" disabled={passwordPattern.test(password) && emailPattern.test(email) ? false : true} onClick={onSubmitHandler} className="btn" >
                                        Submit
                                    </button>
                                </div>
                                <div className="link-sign">
                                    <Link to="/sign-up"><div className="text-sign">New to Flipcart? Create an account</div></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

