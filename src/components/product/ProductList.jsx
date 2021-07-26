import React from 'react';

export default function ProductList({ product }) {
    const { image, title, price, camera, size, instock, delivery, description, battery, cpu, weight, memory, display } = product;


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
                <li>{battery}</li>
                <li>{weight}</li>
                <li>{price}</li>
                <li> instock {instock}</li>
                <li>{delivery}</li>
                <li>{description}</li>
            </div>
            <div className="phone-price">
                <p>₹ {parseInt((price * 1000) - ((price * 1000) / 10))}  <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" /></p>
                <li>₹{parseInt((price * 1000))} </li><span>10% off</span>
            </div>
        </div>
    )
}
