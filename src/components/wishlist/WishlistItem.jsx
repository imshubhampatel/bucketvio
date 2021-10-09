import React from 'react'
import { useDispatch } from 'react-redux';
import { addItemInCart } from '../../features/cart/cartSlice';
import { setSnackBar } from '../../features/filters/filterSlice';
import { removeToWishlist } from '../../features/wishlist/wishlistSlice';

export default function CartItem({ product }) {
    const { image, title, price, memory, quantity } = product;
    const dispatch = useDispatch();

    return (
        <>
            <div className="cart-mid">
                <div className="img-and-btn">
                    <div className="img-crt"><img src={image} alt="myImage" /></div>
                    <div className="btn-crt">
                        <div className="crt-btn-crl">
                            <div className="increase" >+</div>
                            <div className="quantity">{quantity}</div>
                            <div className="dicrease" >-</div>
                        </div>
                    </div>
                </div>
                <div className="cart-txt">
                    <h3>{title}</h3>
                    <p>{memory}</p>
                    <p>Seller : SuperComNet <img src="./Images/flipcartassured.png" alt="" /></p>
                    <h2>&#8377; {price}<span>&#8377;<s>{`${price}`}</s></span> <span style={{ color: 'green' }}> 12%
                        Off</span></h2>
                    <h4> <span style={{ marginLeft: "0", fontSize: "1.3rem", color: "green", fontWeight: "500" }}>3
                        offers applied</span></h4>
                    <div className="last-crt">
                        {
                            < button onClick={() => { dispatch(addItemInCart(product)); dispatch(removeToWishlist(product)); dispatch(setSnackBar({ message: `${product.title} Added to cart`, type: "check-circle" })); }}>MOVE TO CART</button>
                        }
                        {
                            < button onClick={() => { dispatch(removeToWishlist(product)); dispatch(removeToWishlist(product)); dispatch(setSnackBar({ message: `${product.title} from Saved`, type: "times-circle" })); }}>REMOVE</button>
                        }
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
