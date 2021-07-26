import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <>
            <fieldset>
                <legend>FILTERS</legend>
                <label><input type="checkbox" name="category" />Apple</label>
                <label><input type="checkbox" name="category" />Huawei</label>
                <label><input type="checkbox" name="category" />Meizu</label>
                <label><input type="checkbox" name="category" />Samsung</label>
                <label><input type="checkbox" name="category" />Vestel</label>
                <label><input type="checkbox" name="category" />Xiaomi</label>
                <label><input type="checkbox" name="category" />Asus</label>
                <button className="filterbtn">Clear Filter</button>
            </fieldset>
            <fieldset>
                <legend>SORT BY</legend>
                <label><input type="checkbox" name="price" />Price - High to Low</label>
                <label><input type="checkbox" name="price" />Price - Low to High</label>
                <button className="filterbtn" >Clear Filter </button>
            </fieldset>
            <fieldset >
                <legend> FILTERS </legend>
                <label>
                    <input type="checkbox" /> Out of Stock
                </label>
                <label>
                    <input type="checkbox" />Fast Delivery Only
                </label>
            </fieldset>
        </>
    )
}
