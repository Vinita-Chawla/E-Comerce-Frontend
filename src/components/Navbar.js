import React, { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { deleteFromCart, handleQuantity } from "../store/slices/cartSlice";
import { useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from 'react-toastify'

const Navbar = (props) => {
  const [menuBtn, setMenuBtn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);


  function handleScroll() {
    setMenuBtn(false);
    setIsActive(false);
    setSearchActive(false)
  }

  function closeMenu() {
    setMenuBtn(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let auth = localStorage.getItem("user");
  let user = JSON.parse(auth);

  let clearCart = localStorage.getItem("clearCart");
  console.log("clear",clearCart)
  

  let state = useSelector((state)=> state);
  let cartItems = state.cart.cartItems;
  console.log(cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();

  const itemDeleted= (itemId)=>{
    dispatch(deleteFromCart(itemId));
    toast.success(`Item deleted from cart!`)
  }

  const quantityChanged=(itemId, newQuantity)=>{
    newQuantity < 1 ? (newQuantity= 1):
    dispatch(handleQuantity({itemId, newQuantity}))
  }

  const userLogout = ()=>{
    localStorage.removeItem("user");
    toast.success("Logout Successfull!")
    setTimeout(() => {
      navigate("/login")
    }, 1000);
   
  }


  const buyBtn = async()=>{
    let line_items =  cartItems.map((item)=>{
      return{
           quantity:(item.quantity || 1),
           price_data:{
              currency:"usd",
              unit_amount:Math.round(item.price*100),
              product_data:{
                  name:item.title,
                  images:[item.image]
              }
           }
          }
    })

    let response = await axios.post("http://localhost:5000/", line_items);
    console.log(response);

    stripe.redirectToCheckout({sessionId:response.data.session.id})
  }

  const handleSearchTerm = (e)=>{
    props.onsearch(e.target.value)
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#FFF] shadow-md z-50">
        <div className="flex items-center justify-between w-full gap-4 py-[0.9rem] px-8">
      

{
  auth ? 
  <div className="flex items-center justify-center gap-[0.6rem]">
            <img src={user.profile} alt="" className="w-[45px] h-[45px] rounded-[50%]"/>
            <h5 className="capitalize m-[0] font-medium">{user.name}</h5>
          </div>
          :
          <div className="centerLogo">
            <h2 className="logo">E-COMMERCE</h2>
            <p className="store">Store</p>
          </div>

}
         

          <ul
            className={`${
              menuBtn ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center gap-2 p-1 m-0 absolute md:relative top-full md:top-0 right-0 md:right-0 bg-[#FFF] md:bg-transparent w-full md:w-auto transition-all duration-500 ease-in-out`}
          >
            <li className="mx-3 my-2 md:my-0" onClick={() => closeMenu()}>
              <Link className="text-black no-underline font-normal" to="/">
                Home
              </Link>
            </li>
           
            <li className="mx-3 my-2 md:my-0" onClick={() => closeMenu()}>
              <Link className="text-black no-underline font-normal" to="/about">
                About
              </Link>
            </li>
            <li className="mx-3 my-2 md:my-0" onClick={() => closeMenu()}>
              <Link className="text-black no-underline font-normal" to="/">
                Shop
              </Link>
            </li>
            <li className="mx-3 my-2 md:my-0" onClick={() => closeMenu()}>
              <Link
                className="text-black no-underline font-normal"
                to="/"
              >
                Contact
              </Link>
            </li>
            <li className="mx-3 my-2 md:my-0" onClick={() => closeMenu()}>
              <Link className="text-black no-underline font-normal" to="/login">
                Login
              </Link>
            </li>

          {
            auth?   <li className="mx-3 my-2 md:my-0">
              <Link
                className="text-black no-underline font-normal"
                onClick={userLogout}
              >
                Logout
              </Link>
            </li>
            : ""
          }
          </ul>

          <div className="flex items-center justify-center gap-[0.5rem]">
            <div
              id="menu-btn"
              onClick={() => setMenuBtn(!menuBtn)}
              className={`${
                menuBtn ? "fas fa-times" : "fas fa-bars"
              } text-[#ff5252] text-[1.4rem] md:hidden cursor-pointer`}
            ></div>

            <i
              className="bx bx-shopping-bag cursor-pointer text-[#ff5252] text-[1.6rem]"
              onClick={() => setIsActive(!isActive)}
            ></i>


             <i
              className={`cursor-pointer text-[#ff5252] text-[1.2rem] ${searchActive ? "fas fa-times" : "fas fa-search"}` }
              id="search-icon"
              onClick={() => setSearchActive(!searchActive)}
            ></i>

            <form
              action=""
              className={`search-form ${searchActive ? "active" : ""}`}
            >
              <input
                type="search"
                name=""
                id="search-box"
                placeholder="search here"
                onChange={handleSearchTerm}
              />
              <label className="fas fa-search searchImg"></label>
            </form>
          </div>
        </div>
      </header>



      <div className={`cart_popup z-10 shadow-2xl ${isActive ? "active" : ""}`}>
        <div className="flex flex-col gap-[0.5rem] items-center">
        {cartItems?.map((item, index) => {
            return (
              <div className="grid grid-cols-3 items-center justify-center px-[0.5rem] py-[0.5rem]" key={index}>
                <div>
                  <img src={item.image} alt="" className="w-[100px] h-[100px]" />
                </div>
                <div>
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                  <input type="number" value={item.quantity} className="w-[100%] border-1 border-black border-solid pl-[0.5rem]" onChange={(e)=> quantityChanged(item.id, parseInt(e.target.value))}/>
                </div>
                <div className="flex justify-center">
                <i className="fa fa-trash cursor-pointer text-[#ff5252] text-[1.2rem]" onClick={()=> itemDeleted(item.id)}></i>
                </div>
              </div>
            );
          })}
        </div>
        <div>
        <p className="flex justify-end mr-[1rem]">Total:${state.cart.totalAmount}</p>
        <button className='flex mx-auto px-[1.5rem] py-[0.6rem] text-[1.1rem] font-semibold bg-[#ff5252] rounded mt-[1rem] text-white' onClick={buyBtn}>Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
