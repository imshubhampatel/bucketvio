import React from 'react'
import SkeletonElement from './SkeletonElement'

export default function SkeletonArtical({ boxType }) {
    return (
        <div className="skeleton-wrapper">
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
