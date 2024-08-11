import React, { useEffect } from 'react'
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clickAction } from '../store/slices/itemSlice';
import { addToCart } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';

function ProductDetails() {

  const location = useLocation();
  const dispatch = useDispatch();
  const selector = useSelector((state)=> state);
  const clickedItem = selector.items.itemClicked;
  console.log(clickedItem)

  useEffect(()=>{
    let param = new URLSearchParams(location.search);
    let id = param.get("id");
    dispatch(clickAction(id));
  },[])

  const itemAddedToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
    <div className='mt-[8rem] grid grid-cols-1 md:grid-cols-2'>
    <div className='flex items-center justify-center'>
      <img src={clickedItem?.image} className='w-[50%]' alt=''/>
    </div>
    <div className='p-[1rem] flex flex-col items-start gap-[1rem]'>
      <h1 className='text-[2rem]'>{clickedItem?.title}</h1>
      <h5>Price: ${clickedItem?.price}</h5>
      <h4>Description:</h4>
      <p>{clickedItem?.description}</p>
      
      <h5>Category: {clickedItem?.category}</h5>
      <Link className='px-[1.5rem] no-underline py-[0.6rem] text-[1.1rem] font-semibold bg-[#ff5252] rounded mt-[1rem] text-white'  onClick={() => itemAddedToCart(clickedItem)}>Add to Cart</Link>
    </div>
    </div>
    </>
  )
}

export default ProductDetails
