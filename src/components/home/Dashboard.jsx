import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../../features/auth/authSlice"
import Navbar from '../navbar/Navbar'
import Product from '../product/Product'


export default function Dashboard() {
    const dispatch = useDispatch()

    return (
        <div>
            <Navbar />
            <Product />
        </div>
    )
}
