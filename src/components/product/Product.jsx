import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import "./product.css"
import Sidebar from '../sidebar/Sidebar';
import SortFilter from '../../utilities/Sortfilter';
import SkeletonMobile from '../../loader/skeleton/SkeletonMobile';
import SkeletonSidebar from '../../loader/skeleton/SkeletonSidebar';
import MobileSidebar from '../sidebar/MobileSidebar';



export default function Product() {

    const { mobiles: product, loading } = useSelector(state => state.mobiles)
    const { sortByPrice, sortBy, showFastDelivery, showOutOfStock } = useSelector(state => state.filters)

    const listItem = SortFilter(product, sortBy, sortByPrice, showOutOfStock, showFastDelivery);

    return (
        <div className="dashboard container">
            <MobileSidebar />
            <aside className={`sidebar top2`}>
                {
                    loading
                        ? <SkeletonSidebar />
                        : <Sidebar />
                }
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
                    loading && new Array(24).fill("").map((n, index) => {
                        return <SkeletonMobile key={index} />
                    })
                }

            </div>
        </div>

    )
}
