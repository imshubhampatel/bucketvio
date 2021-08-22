import React from 'react'

export default function PriceDetail() {
    return (
        <>
            <h3>Price Details</h3>
            <div className="detail">
                <div>
                    <span>Price(3 items)</span>
                    <span>93000</span>
                </div>
                <div>
                    <span>Discount</span>
                    <span>-39900</span>
                </div>
                <div>
                    <span>Delivery Charges</span>
                    <span>-39900</span>
                </div>
                <div >
                    <span>Total Amount</span>
                    <span>-39900</span>
                </div>
                <span>You will save 12,000 on this order</span>
            </div>
        </>
    )
}
