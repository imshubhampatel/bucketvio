import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Hover from "./Hover";
import "./navbar.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setQuery } from "../../features/filters/filterSlice";


export default function Navbar() {
    const dispatch = useDispatch();
    const { isAuthenticated, userDetails } = useSelector(state => state.auth)
    const { query } = useSelector(state => state.filters)
    const [searchInput, setSearchInput] = useState("");
    console.log(query)


    const onChangeHandler = (event) => {
        setSearchInput(event.target.value)
    }

    useEffect(() => {
        dispatch(setQuery(searchInput))
    }, [dispatch, searchInput])

    return (
        <>
            <div className="navbar">
                <div className="navigation">
                    <div></div>
                    <nav className="navigation-bar">
                        <div className="navigation-logo">
                            <div className="nav-logo">
                                <Link to="/">
                                    <img
                                        src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                                        alt="Flipkart"
                                    />
                                </Link>
                                <Link to="/">
                                    Explore <span>Plus</span>
                                    <img
                                        src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                                        alt="Plus"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="navigation-search">
                            <div className="search-bar">
                                <div className="parent-input">
                                    <input
                                        type="text"
                                        placeholder="Search for products, brands and more"
                                        value={searchInput}
                                        onChange={(event) => onChangeHandler(event)}
                                    />
                                </div>
                                <div className="fa-icon">
                                    <i className="fas fa-search"></i>
                                </div>
                            </div>
                        </div>
                        <div className="navigation-login">
                            {
                                isAuthenticated
                                    ? (<div className="parent-drop-down">
                                        <div className="parent-login">
                                            {
                                                userDetails === null
                                                    ? < span className="userLoggedIn">Loading..</span>
                                                    // : < span className="userLoggedIn">{`${userDetails.name}`}</span>}
                                                    : < span className="userLoggedIn">{`${userDetails.userInfo.firstName.slice(0, 7)}...`}</span>}
                                        </div>
                                    </div>)
                                    : (<Link to="/login">
                                        <div className="parent-drop-down">
                                            <div className="parent-login">
                                                <div>login</div>
                                                <span>
                                                    <img
                                                        src="https://freesvg.org/img/clarity-shutdown-icon.png"
                                                        alt="logout"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>)
                            }
                            <Hover />
                        </div>
                        <div className="navigation-more">
                            <div className="pure-div">
                                <div className="type-more">
                                    <span>More</span>
                                </div>
                            </div>
                        </div>
                        <div className="navigation-cart">
                            <div className="pure-div">
                                <Link to="/cart">
                                    <div className="default-icon">
                                        <i className="fas fa-shopping-cart"></i>
                                    </div>
                                </Link>
                                <div className="pure-div logo-text">
                                    <Link to="/cart">
                                        <i className="fas fa-shopping-cart"></i>
                                        <span>Cart</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div></div>
                </div>
            </div>
        </>
    );
}
