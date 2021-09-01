import React from 'react'
import "./Skeleton.css"

export default function SkeletonElement({ type }) {
    var classes = `skeleton ${type}`
    return (
        <div className={classes}></div>
    )
}
