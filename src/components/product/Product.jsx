import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import "./product.css"
import Sidebar from '../sidebar/Sidebar';
import SortFilter from '../../utilities/Sortfilter';
import SkeletonElement from '../../skeleton/SkeletonElement';
import SkeletonArtical from '../../skeleton/SkeletonArtical';
import SkeletonMobile from '../../skeleton/SkeletonMobile';
import SkeletonSidebar from '../../skeleton/SkeletonSidebar';

export default function Product() {
    const { mobiles: product, loading } = useSelector(state => state.mobiles)

    const listItem = SortFilter(product)


    return (
        <div className="dashboard container">
            <aside className="sidebar">
                {
                    loading
                        ? <SkeletonSidebar />
                        : <Sidebar />
                }
                <Sidebar />
            </aside>
            <div className="parent-product-item">
                {
                    listItem && listItem.map((item) => {
                        return (
                            <ProductList
                                key={item.id}
                                product={item}
                            />
                        )
                    })
                }
                {
                    loading && new Array(24).fill("").map((n) => {
                        return <SkeletonMobile boxType="title" />

                    })
                }

            </div>
        </div>

    )
}
