import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

export default function SkeletonSidebar() {
    return (
        <div className="skeleton-wrapper">
            <Shimmer />
            <SkeletonElement type="title" />
            <SkeletonElement type="title" />
            <SkeletonElement type="title" />
            <SkeletonElement type="title" />
            <SkeletonElement type="title" />
            <SkeletonElement type="title" />
            <SkeletonElement type="title" />
            <SkeletonElement type="title" />
            <SkeletonElement type="title" />
            <SkeletonElement type="title" />
            <Shimmer />
            <SkeletonElement type="title" />
            <SkeletonElement type="title" />
            <SkeletonElement type="title" />
            <SkeletonElement type="title" />
            <SkeletonElement type="title" />
            <SkeletonElement type="title" />
            <SkeletonElement type="title" />
        </div>
    )
}
