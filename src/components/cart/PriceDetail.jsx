import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { cartSelecter } from '../../features/cart/cartSlice'

export default function PriceDetail() {
    const { cartItem } = useSelector(cartSelecter);
    const [balance, setBalance] = useState(0);

    async function useTotalPriceCalculator() {
        await useEffect(() => {
            setBalance(
                cartItem.reduce((total, item) => {
                    return total + parseInt(item.price.toString().replace(".", "")) * item.quantity;
                }, 0)
            );
        });
    }
    useTotalPriceCalculator();

    return (
        <>
            <h3>Price Details</h3>
            <div className="detail">
                <div>
                    <span>Price ({cartItem.length} items)</span>
                    <span>₹{parseInt(balance.toString().replace(".", ","))}</span>
                </div>
                <div>
                    <span>Discount</span>
                    <span>₹{parseInt((balance.toString().replace(".", "")) * 12 / 100)}</span>
                </div>
                <div>
                    <span>Delivery Charges</span>
                    {
                        parseInt(balance.toString().replace(".", ",")) === 0
                            ? < span >₹0</span>
                            : < span >₹40</span>
                    }
                </div>
                <div >
                    <span>Total Amount</span>
                    {
                        parseInt(balance.toString().replace(".", ",")) === 0
                            ? <span>₹{parseInt(balance.toString().replace(".", "")) - (parseInt((balance.toString().replace(".", "")) * 12 / 100)) + 0}</span>
                            : <span>₹{parseInt(balance.toString().replace(".", "")) - (parseInt((balance.toString().replace(".", "")) * 12 / 100)) + 40}</span>
                    }
                </div>
                <span>You will save ₹{parseInt((balance.toString().replace(".", "")) * 12 / 100)} on this order</span>
            </div>
        </>
    )
}
