import React from 'react';
import { Link } from 'react-router-dom';
import "./Page404.css";

export default function Page404() {
    return (
        <div>
            <div className="parent-error">
                <div></div>
                <div className="page404">
                    <div className="page404-content">
                        <h1>Page not found</h1>
                        <Link to="/">Go back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
