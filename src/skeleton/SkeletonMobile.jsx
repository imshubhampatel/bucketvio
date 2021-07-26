import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

export default function SkeletonMobile({ boxType }) {
    return (
        <div className="skeleton-wrapper">
            <Shimmer />
            <div className="product-item" style={{ background: "#f2f2f2" }}>
                <div className="phone-images">
                    <SkeletonElement type="image" />
                </div>
                <div className="phone-about">
                    <SkeletonElement type="title" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                </div>
                <div className="phone-price">
                    <SkeletonElement type="price" />
                    <SkeletonElement type="price" />
                </div>

            </div>
        </div>
    )
}
