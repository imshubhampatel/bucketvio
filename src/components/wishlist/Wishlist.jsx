import React from 'react';
import { useSelector } from 'react-redux';
import { WishlistItem } from '..';
import { wishlistSelector } from '../../features/wishlist/wishlistSlice';

export default function Cart() {
    const { wishlistItem } = useSelector(wishlistSelector)
    return (
        <>
            <div className="parent-cart">
                <div className="cards c-card" id="cart">
                    <div className="cart-item">
                        {
                            wishlistItem.map((item, index) => {
                                return (
                                    <WishlistItem product={item} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )

}
