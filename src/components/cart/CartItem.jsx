import React from 'react'
import { useDispatch } from 'react-redux';
import { removeItemFromCart, increaseOneMore, dicreaseOneMore } from '../../features/cart/cartSlice';
import { setSnackBar } from '../../features/filters/filterSlice';
import { addToWishlist } from '../../features/wishlist/wishlistSlice';

export default function CartItem({ product }) {
    const { image, quantity, title, price, memory } = product;
    const dispatch = useDispatch();

    return (
        <>
            <div className="cart-mid">
                <div className="img-and-btn">
                    <div className="img-crt"><img src={image} alt="myImage" /></div>
                    <div className="btn-crt">
                        <div className="crt-btn-crl">
                            <div className="increase" onClick={() => dispatch(increaseOneMore(product))}>+</div>
                            <div className="quantity">{quantity}</div>
                            {
                                product.quantity === 1
                                    ? < div className="dicrease">-</div>
                                    : < div className="dicrease" onClick={() => dispatch(dicreaseOneMore(product))}>-</div>

                            }
                        </div>
                    </div>
                </div>
                <div className="cart-txt">
                    <h3>{title}</h3>
                    <p>{memory}</p>
                    <p>Seller : SuperComNet <img src="./Images/flipcartassured.png" alt="" /></p>
                    <h2>&#8377; {price}<span>&#8377;<s>{price}</s></span> <span style={{ color: 'green' }}> 12%
                        Off</span></h2>
                    <h4> <span style={{ marginLeft: "0", fontSize: "1.3rem", color: "green", fontWeight: "500" }}>3
                        offers applied</span></h4>
                    <div className="last-crt">
                        <button onClick={() => { dispatch(addToWishlist(product)); dispatch(removeItemFromCart(product)); dispatch(setSnackBar({ type: "check-circle", message: `${product.title} Saved for later` })) }}>SAVE FOR LATER</button>
                        <button onClick={() => { dispatch(removeItemFromCart(product)); dispatch(setSnackBar({ type: "times-circle", message: `${product.title} removed item Successfully` })) }}>REMOVE</button>
                    </div>
                </div>
                <div className="cart-plc">
                    <h3>Delivery in 2 days | Free <s>&#8377;40</s></h3>
                    <p>7 Days Replacement Policy</p>
                </div>
            </div>
        </>

    )
}
