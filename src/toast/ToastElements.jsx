import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetSnackBar } from '../features/filters/filterSlice';
import "./toast.css"
export default function ToastElement() {
    const { showBnackbar, snackBarMsg, snackBarType } = useSelector(state => state.filters)
    const dispatch = useDispatch()
    setTimeout(() => {
        dispatch(resetSnackBar())
    }, 1800);
    return (
        <div id="toast" className={`${showBnackbar ? "display" : null}`}>
            <span><i className={`fas fa-${snackBarType}`}></i></span>
            <span>{snackBarMsg}</span>
        </div >
    )
}

 // const toastIcon = "user-circle";
    // const toastIcon = "times-circle";
    // const toastIcon = "check-circle";
    // const toastType = "Add to cart Successfully";