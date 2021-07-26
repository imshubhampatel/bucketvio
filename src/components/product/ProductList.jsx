import React from 'react';
import SkeletonElement from '../../skeleton/SkeletonElement';

export default function ProductList({ product }) {
    const { images, title, price, camera, size, description, battery, cpu, weight, memory, display } = product;


    return (
        <div className="product-item">
            <div className="phone-images">
                <img src={images} alt="images" />
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
                <li>{description}</li>
            </div>
            <div className="phone-price">
                <p>₹ {parseInt(price + 10000)} <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" /></p>
                <li>₹{parseInt(((price + 10000) * 10 / 100) + (price + 10000))} </li><span>12% off</span>
            </div>
        </div>
    )
}
