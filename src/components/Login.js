import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useNavigate,Link} from "react-router-dom";
import { toast } from 'react-toastify'

function Login() {
  const [email,setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  useEffect(()=>{
    let auth = localStorage.getItem("user");
    if(auth){
      navigate("/")
    }
  },[])

  const handleData = async()=>{
    let formdata = new FormData();
    formdata.append("email",email)
    formdata.append("password",password);
   
    let response = await axios.post("http://localhost:5000/auth/login", formdata);
    console.log(response)
   
    if(response.data.result){
      toast.error("Please enter correct details!")

    }
    else{
      localStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success("Login Successfull!")
      setTimeout(() => {
        navigate("/")
      }, 1000);
     
    }
    
      setEmail(""); setPassword("");
  
  }

  return (
    <div className='mt-[8rem] flex flex-col justify-center gap-[1rem] max-w-[30rem] mx-auto'>
      <h2 className='mb-[1.5rem] font-semibold text-[#000]'>Login</h2>

      <p>
          Already have an account? Login in or 
          &nbsp; <Link className='text-[#FF5252] font-semibold' to="/signup">Sign Up</Link>
        </p>

      <div className='w-full flex flex-col items-center gap-[1rem]'>

      <input type='text' placeholder='Enter Email' className='w-full py-[0.6rem] px-[1rem] border-solid border-[1px] border-black rounded' onChange={(e)=>setEmail(e.target.value)} value={email}/>

      <input type='password' placeholder='Enter Password' className='w-full py-[0.6rem] px-[1rem] border-solid border-[1px] border-black rounded' onChange={(e)=>setPassword(e.target.value)} value={password}/>

      <button className='px-[1.5rem] py-[0.4rem] bg-[#FF5252] rounded mt-[1rem] text-white' onClick={handleData}>Login</button>
      </div>
    </div>
  )
}

export default Login;
