import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { filterSelecter, setShowFastDelivery, setShowOutOfStock, setSortByPrice } from '../../features/filters/filterSlice'

export default function MobileSidebar() {
    const [showSidebar, setShowSidebar] = useState(false)
    const { sortByPrice } = useSelector(filterSelecter);
    window.addEventListener("scroll", () => {
        if (showSidebar) {
            setTimeout(() => {
                setShowSidebar(false)
            }, 1000);
        }

    })
    const dispatch = useDispatch()
    return (
        <aside className="mobile-filters">
            <div className="sort-off" onClick={() => setShowSidebar(!showSidebar)}>
                <h2 >Sort</h2>
            </div>
            <div className={`sortItem ${showSidebar ? "displayBlock" : "displayNone"}`}>
                <fieldset className="price-filter mob" >
                    <legend>SORT PRICE</legend>
                    <label><input type="checkbox" name="priceTracker" checked={sortByPrice && sortByPrice === "HighToLow"} onChange={() => dispatch(setSortByPrice("HighToLow"))} />Price - High to Low</label>
                    <label><input type="checkbox" name="priceTracker" checked={sortByPrice && sortByPrice === "LowToHigh"} onChange={() => dispatch(setSortByPrice("LowToHigh"))} />Price - Low to High</label>
                    <legend> SORT BY </legend>
                    <label><input type="checkbox" onChange={() => dispatch(setShowOutOfStock())} /> Out of Stock</label>
                    <label> <input type="checkbox" onChange={() => dispatch(setShowFastDelivery())} />Fast Delivery Only</label>
                </fieldset>
            </div>
            <div className="filter-off">
                <h2>Filters</h2>
            </div>
        </aside >
    )
}
