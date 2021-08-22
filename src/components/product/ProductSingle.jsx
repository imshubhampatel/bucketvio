import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { addItemInCart } from '../../features/cart/cartSlice';

export default function Cart() {
    const location = useLocation();
    const dispatch = useDispatch();
    // console.log(location)
    const { pathname, search } = location
    // console.log(search)
    const { product } = location.state

    const { id, image, title, price, camera, size, instock, cpu, weight, memory, display } = product;
    const [device, setDevice] = useState(image);

    return (
        <div className="product-item-detail">
            <div className="phone-images images-detail">
                <div className="images my-image">
                    {image.map((item, index) => {
                        return <img key={index} className="img-clicked" onMouseEnter={() => setDevice(item)} src={item} alt="" />
                    })}
                </div>
                <div className="demo-image">
                    <img src={device} alt="" />
                </div>
                <div className="cart-and-wishlist">
                    <div className="button-cart" onClick={() => dispatch(addItemInCart(product))}><div><span><i className="fas fa-shopping-cart"></i></span>Add to Cart</div></div>
                    <div className="button-wishlist"><div><span><i className="fas fa-bolt"></i></span>Add to Wishlist</div></div>
                </div>
            </div>
            <div className="phone-about">
                <h2>{title}</h2>
                <li>{memory}</li>
                <li>{display} </li>
                <li>{size}</li>
                <li>{camera}</li>
                <li>{cpu}</li>
                <li>{weight}</li>
                <li className="price-seen"><span>₹{parseInt(price)},999</span></li>
                <li>{instock ? "Instock" : 'Out of stock'}</li>
                <div className="phone-price">
                    <p>₹ {parseInt(price)},999 <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" /></p>
                    <li>₹{parseInt((price * 1000))} </li><span>10% off</span>
                </div>
                <div className="offer-details">
                    <p>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardTC
                        <br />
                        <br />
                        Bank Offer20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and MobikwikTC
                        <br />
                        <br />
                        Bank Offer10% Off on First time ICICI Mastercard Credit Card transaction, Terms and Condition applyTC
                        <br />
                        <br />
                        Special PriceExtra ₹1000 off(price inclusive of discount)</p>
                </div>
            </div>
        </div >
    )
}
