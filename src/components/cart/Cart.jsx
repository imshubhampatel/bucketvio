import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '..';
import { PriceDetail } from '..';
import { cartSelecter } from '../../features/cart/cartSlice';
import "./cart.css"

export default function Cart() {
    const { cartItem } = useSelector(cartSelecter)
    console.log(cartItem)
    return (
        <>
            <div className="parent-cart">
                <div className="cards c-card" id="cart">
                    <div className="cart-item">
                        <div className="cart-up">
                            <h3>My Cart</h3>
                            <div>
                                <p>Deliver to</p>
                            </div>
                            <span>
                                <h3>Mathura-281004</h3>
                            </span>
                        </div>
                        {
                            cartItem.map((item, index) => {
                                return (
                                    <CartItem product={item} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="price-details">
                    <PriceDetail />
                </div>
            </div>
        </>
    )

}
