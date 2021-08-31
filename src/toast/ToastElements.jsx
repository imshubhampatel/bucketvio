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
    //angle-right left up down
    // arrow-alt-circle-down left up right
    //bell
    //bolt
    //check
    //envelope message icon
    //exclamation-triangle
    //exclamation-triangle
    //fire-alt and fire
    //folder and folder-plus
    // globe
    //heart
    // infinity to 8
    // map-marker google map icon // map-marker-alt
    // minus-circle // plus-circle  // pause-circle // play-circle // play //pause
    // money-check  to atm card
    //moon sun
    // music //phone //plane //phone-square
    //om 
    // paper-plane to telegram
    // power-off logout
    // check-square  // minus-square // plus-square // rss-square to wifi and rss // rocket//space-shuttle
    //piggy-bank
    //grin-hearts // beam //alt // beam-sweat // squint // squint-tears
    //search  // share-alt //share-square // share // shield-alt

    //shopping-bag // shipping-fast //shopping-cart // shopping-basket // shield-virus
    //store // sync // sync-alt
    // signal //stopwatch stopwatch-20
    // question-circle  // question
    // const toastType = "Add to cart Successfully";
    // star // star-of-life // star-and-crescent //splotch 
    // star-half-alt //star-of-david
    // toggle-off // toggle-on // tint // thumbs-up // trophy

    // user-check user-circle user-cog user-edit user-tie user-times users
    //user-shield user
    //video to videocall wallet yin-yang