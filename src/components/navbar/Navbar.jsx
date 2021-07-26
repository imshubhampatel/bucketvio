import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
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
                                    />
                                </div>
                                <div className="fa-icon">
                                    <i className="fas fa-search"></i>
                                </div>
                            </div>
                        </div>
                        <div className="navigation-login">
                            <div className="parent-drop-down">
                                <div className="parent-login">
                                    <Link to="/login">login</Link>
                                    <span>
                                        <img
                                            src="https://freesvg.org/img/clarity-shutdown-icon.png"
                                            alt="logout"
                                        />
                                    </span>
                                </div>
                                {/* <div className="children-drop-down">
                                    <div><div> New customer </div><div><span>Sign up</span></div></div>
                                    <ul className="drop-down-list">
                                        <li><span><img src="https://image.flaticon.com/icons/png/512/2919/2919600.png" />My Profile</span></li>
                                        <li><span><img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" />Flipkart Plus</span></li>
                                        <li><span><img src="https://image.flaticon.com/icons/png/512/733/733329.png" />Wallet</span></li>
                                        <li><span><img src="https://image.flaticon.com/icons/png/512/262/262523.png" />Wihslist</span></li>
                                    </ul>

                                </div> */}
                            </div>
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
                                <div className="default-icon">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <div className="pure-div logo-text">
                                    <Link to="/">
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
