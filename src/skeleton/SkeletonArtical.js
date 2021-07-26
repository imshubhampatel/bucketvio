import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

export default function SkeletonArtical({ boxType }) {
    return (
        <div className="skeleton-wrapper">
            <Shimmer />
            <div className="skeleton-article">
                <SkeletonElement type={boxType} />
                <SkeletonElement type={boxType} />
                <SkeletonElement type={boxType} />
                <SkeletonElement type={boxType} />
                <SkeletonElement type={boxType} />
                <SkeletonElement type={boxType} />
                <SkeletonElement type={boxType} />
            </div>
        </div>
    )
}
