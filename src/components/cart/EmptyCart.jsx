import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
    return (
        <div className="Empty-cart">
            <div style={{ height: '300px' }} className="cart-mid">
                <div className="image-empty-cart">
                    <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
                </div>
                <div className="text-empty-cart">
                    Missing Cart Items ?
                </div>
                <div style={{ fontSize: '1rem', marginTop: "1rem" }}>
                    Add items to it now
                </div>
                <div className="shopnow">
                    <Link to="/"><button >Shop Now</button></Link>
                </div>
            </div >
        </div>
    )
}
