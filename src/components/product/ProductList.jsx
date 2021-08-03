import React from 'react';

export default function ProductList({ product }) {
    const { image, title, price, camera, size, instock, delivery, cpu, weight, memory, display } = product;


    return (
        <div className="product-item">
            <div className="phone-images">
                <img src={image} alt="images" />
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
                <li>Product :  {instock ? "Instock" : 'Out of stock'}</li>
            </div>
            <div className="phone-price">
                <p>₹ {parseInt(price)},999 <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" /></p>
                <li>₹{parseInt((price * 1000))} </li><span>10% off</span>
            </div>
        </div>
    )
}
