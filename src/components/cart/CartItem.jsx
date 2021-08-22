import React from 'react'

export default function CartItem({ product }) {
    const { id, image, title, price, camera, size, instock, cpu, weight, memory, display } = product;
    console.log((parseInt(price)))

    return (
        <>
            <div className="cart-mid">
                <div className="img-and-btn">
                    <div className="img-crt"><img src={image} alt="myImage" /></div>
                    <div className="btn-crt">
                        <div className="crt-btn-crl"><span>+</span>1<span>-</span> </div>
                    </div>
                </div>
                <div className="cart-txt">
                    <h3>{title}</h3>
                    <p>{memory}</p>
                    <p>Seller : SuperComNet <img src="./Images/flipcartassured.png" alt="" /></p>
                    <h2>&#8377; {price.replace(".", ",")}<span>&#8377;<s>{`${(price.replace(".", ','))}`}</s></span> <span style={{ color: 'green' }}> 12%
                        Off</span></h2>
                    <h4> <span style={{ marginLeft: "0", fontSize: "1.3rem", color: "green", fontWeight: "500" }}>3
                        offers applied</span></h4>
                    <div className="last-crt">
                        <button>SAVE FOR LATER</button>
                        <button>REMOVE</button>
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
