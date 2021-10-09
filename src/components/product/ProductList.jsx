import React from 'react';
import { Link, useHistory, } from 'react-router-dom';


export default function ProductList({ product }) {
    let history = useHistory();
    const { location: { pathname: url } } = history;

    const { _id, image, title, price, camera, size, instock, cpu, weight, memory, display } = product;
    console.log(image[0])

    return (
        <Link to={
            {
                pathname: `${url}/${title.replaceAll(" ", "-")}/dp/id?=${_id}`,
                state: { product }
            }


        }>
            <div className="product-item" >
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
                    <li className="price-seen"><span>₹{parseInt(price)}</span></li>
                    <li>Product :  {instock ? "Instock" : 'Out of stock'}</li>
                </div>
                <div className="phone-price">
                    <p>₹ {parseInt(price)} <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" /></p>
                    <li>₹{parseInt((price * 1000))} </li><span>10% off</span>
                </div>
            </div>
        </Link>
    )
}
