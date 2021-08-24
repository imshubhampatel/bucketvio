import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CartItem, WishlistItem } from '..';
import { PriceDetail } from '..';
import { cartSelecter } from '../../features/cart/cartSlice';
import { EmptyCart } from '..';
import "./cart.css";
import { Link } from 'react-router-dom';
import { wishlistSelector } from '../../features/wishlist/wishlistSlice';

export default function Cart() {
    const { cartItem, cartItemId } = useSelector(cartSelecter)
    const { wishlistItem, wishlistItemId } = useSelector(wishlistSelector)

    useEffect(() => {
        localStorage.setItem("CART", JSON.stringify(cartItem))
        localStorage.setItem("WISHLIST", JSON.stringify(wishlistItem))
        localStorage.setItem("CART_ID", JSON.stringify(cartItemId))
        localStorage.setItem("WISHLIST_ID", JSON.stringify(wishlistItemId))
    }, [cartItem, wishlistItem, cartItemId, wishlistItemId])

    return (
        <>
            <div className="parent-cart">
                <div className="cards c-card" id="cart">
                    <div className="cart-item">
                        <div className="cart-up">
                            <h3>My Cart</h3>
                            <div>
                            </div>
                            <span>
                                <h3>Enter pincode </h3>
                            </span>
                        </div>
                        {
                            cartItem.length === 0
                                ? <EmptyCart />
                                : <>
                                    {cartItem.map((item, index) => {
                                        return <CartItem product={item} key={index} />
                                    })}
                                    <div className="cart-order">
                                        <Link to="/checkout"><button>PLACE ORDER</button></Link>
                                    </div>
                                </>
                        }
                    </div>
                    {
                        cartItemId.length === 0
                            ? null
                            : <div className="price-details mobile-price"><PriceDetail /></div>
                    }

                    <div className="cart-item" style={{ marginTop: "4rem" }}>

                        {

                            wishlistItem.length === 0
                                ? <div></div>
                                :
                                <>
                                    <div className="cart-up">
                                        <h3>SAVE FOR LATER</h3>
                                    </div>
                                    {
                                        wishlistItem.map((item, index) => {
                                            return <WishlistItem product={item} key={index} />
                                        })
                                    }
                                </>
                        }
                    </div>
                </div>
                <div className="price-details laptop-price">
                    <PriceDetail />
                </div>
            </div>
        </>
    )

}
