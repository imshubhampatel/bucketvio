import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import { emailPattern, userNamePattern, passwordPattern } from "../../utilities/pattern";
import "./login.css"



export default function SignUp() {
    const [userCrediential, setUserCrediential] = useState({
        username: "",
        email: "",
        password: "",
    })



    const { username, email, password } = userCrediential;

    const onChageUsername = (e) => {
        setUserCrediential({
            ...userCrediential,
            username: e.target.value
        })

    }
    const onChageEmail = (e) => {
        setUserCrediential({
            ...userCrediential,
            email: e.target.value
        })

    }
    const onChangePassword = (e) => {
        setUserCrediential({
            ...userCrediential,
            password: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(userCrediential)
        try {
            const data = qs.stringify({
                name: username,
                password: password,
                email: email,

            });
            console.log(data)
            var config = {
                method: "post",
                url: "http://localhost:5000/api/v1/users/sign-up",
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: data
            }
            axios(config)
                .then((response) => console.log(response.data))
                .catch(function (error) {
                    console.log(error.response.data);
                });

        } catch (err) {
            console.log("error", err)
        }
    }

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
                                    <label htmlFor="username">Enter USERNAME</label>
                                    <input type="text" value={username} id="username" onChange={onChageUsername} placeholder="Enter username" />
                                    {username !== "" ? userNamePattern.test(username) ? <i className="fas fa-check-circle icon-style icon-green"></i> : <span><i className="fas fa-times-circle icon-style icon-red"></i></span> : null}
                                </div>
                                <div className="email-input input-container">
                                    <label htmlFor="email">ENTER YOUR EMAIL</label>
                                    <input type="text" value={email} id="email" onChange={onChageEmail} placeholder="Enter email" />
                                    {email !== "" ? emailPattern.test(email) ? <i className="fas fa-check-circle icon-style icon-green"></i> : <span><i className="fas fa-times-circle icon-style icon-red"></i></span> : null}
                                </div>
                                <div className="input-container">
                                    <label htmlFor="password">PASSWORD</label>
                                    <input type="password" id="password" value={password} onChange={onChangePassword} placeholder="Enter password" />
                                    {password !== "" ? passwordPattern.test(password) ? <i className="fas fa-check-circle icon-style icon-green"></i> : <span><i className="fas fa-times-circle icon-style icon-red"></i></span> : null}
                                </div>
                                <div className="input-container">
                                    <button
                                        type="submit"
                                        disabled={
                                            passwordPattern.test(password) && emailPattern.test(email)
                                                ? false
                                                : true
                                        }
                                        onClick={onSubmitHandler}
                                        className="btn"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

