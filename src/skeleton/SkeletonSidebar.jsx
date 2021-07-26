import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

export default function SkeletonSidebar() {
    return (
        <div className="skeleton-wrapper">
            <Shimmer />
            <div style={{marginLeft:"0"}}>
                <fieldset>
                    <SkeletonElement type="title" />
                    <SkeletonElement type="title" />
                    <SkeletonElement type="title" />
                    <SkeletonElement type="title" />
                    <SkeletonElement type="title" />
                    <SkeletonElement type="title" />
                    <SkeletonElement type="title" />
                    <SkeletonElement type="title" />
                    <SkeletonElement type="title" />
                </fieldset>
                <fieldset>
                    <SkeletonElement type="title" />
                    <SkeletonElement type="title" />
                    <SkeletonElement type="title" />

                </fieldset>
                <fieldset >
                    <SkeletonElement type="title" />
                    <label>
                        <SkeletonElement type="title" />
                    </label>
                    <label>
                        <SkeletonElement type="title" />
                    </label>
                </fieldset>
            </div>
        </div>
    )
}
