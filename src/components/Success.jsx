import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { clearCart } from "../store/slices/cartSlice";


function Success() {
    let dispatch = useDispatch();

   useEffect(()=>{
    dispatch(clearCart())
   })
   
  return (
    <div class="sc-container">
    <h1>Payment Successful!</h1>
    <p>Your order will arrive in 2 bussiness days.</p>
    <img src="img/success.png" alt="" />
    <a href="/" class="sc-btn" id="back_to_home">Back To Homepage</a>
    </div>
  )
}

export default Success
