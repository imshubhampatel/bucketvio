import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import "./product.css"
import Sidebar from '../sidebar/Sidebar';

export default function Product() {
    const { mobiles: listItem } = useSelector(state => state.mobiles)

    return (
        <div className="dashboard">
            <aside className="sidebar">
                <Sidebar />
            </aside>
            <div className="parent-product-item">
                {
                    listItem.map((item) => {
                        return (
                            <>
                                <ProductList
                                    key={item.id}
                                    product={item}
                                />
                            </>
                        )
                    })
                }
            </div>
        </div>

    )
}
