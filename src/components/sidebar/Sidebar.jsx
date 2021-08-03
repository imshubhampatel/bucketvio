import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterSelecter, setShowFastDelivery, setShowOutOfStock, setSortBy, setSortByPrice } from '../../features/filters/filterSlice'
import "./sidebar.css"

export default function Sidebar() {
    const { sortByPrice, sortBy } = useSelector(filterSelecter);
    console.log("sortbyprice", sortByPrice)
    const dispatch = useDispatch()

    return (
        <div className="side-filter">
            <fieldset className="mobile-filter">
                <legend>FILTERS</legend>
                <label><input type="checkbox" name="category" checked={sortBy && sortBy === "apple"} onChange={() => dispatch(setSortBy("apple"))} />Apple</label>
                <label><input type="checkbox" name="category" checked={sortBy && sortBy === "huawei"} onChange={() => dispatch(setSortBy("huawei"))} />Huawei</label>
                <label><input type="checkbox" name="category" checked={sortBy && sortBy === "meizu"} onChange={() => dispatch(setSortBy("meizu"))} />Meizu</label>
                <label><input type="checkbox" name="category" checked={sortBy && sortBy === "samsung"} onChange={() => dispatch(setSortBy("samsung"))} />Samsung</label>
                <label><input type="checkbox" name="category" checked={sortBy && sortBy === "vestel"} onChange={() => dispatch(setSortBy("vestel"))} />Vestel</label>
                <label><input type="checkbox" name="category" checked={sortBy && sortBy === "xiaomi"} onChange={() => dispatch(setSortBy("xiaomi"))} />Xiaomi</label>
                <label><input type="checkbox" name="category" checked={sortBy && sortBy === "asus"} onChange={() => dispatch(setSortBy("asus"))} />Asus</label>
                <button className="filterbtn" onClick={() => dispatch(setSortBy(null))}>Clear Filter</button>
            </fieldset>
            <fieldset className="price-filter">
                <legend>SORT BY</legend>
                <label><input type="checkbox" name="priceTracker" checked={sortByPrice && sortByPrice === "HighToLow"} onChange={() => dispatch(setSortByPrice("HighToLow"))} />Price - High to Low</label>
                <label><input type="checkbox" name="priceTracker" checked={sortByPrice && sortByPrice === "LowToHigh"} onChange={() => dispatch(setSortByPrice("LowToHigh"))} />Price - Low to High</label>
                <button className="filterbtn" onClick={() => dispatch(setSortByPrice(null))} >Clear Filter </button>
            </fieldset>

            <fieldset className="stock-filter" >
                <legend> FILTERS </legend>
                <label>
                    <input type="checkbox" onChange={() => dispatch(setShowOutOfStock())} /> Out of Stock
                </label>
                <label>
                    <input type="checkbox" onChange={() => dispatch(setShowFastDelivery())} />Fast Delivery Only
                </label>
            </fieldset>
        </div>
    )
}
