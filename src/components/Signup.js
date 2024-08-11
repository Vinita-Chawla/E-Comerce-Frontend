import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { toast } from 'react-toastify'

function Signup() {
  const [name, setName] = useState();
  const [email,setEmail] = useState();
  const [password, setPassword] = useState();
  const [profile, setProfile] = useState();

  const navigate = useNavigate();

  useEffect(()=>{
    let auth = localStorage.getItem("user");
    if(auth){
      navigate("/")
    }
  },[navigate])

  const handleData = async()=>{
    let formdata = new FormData();
    formdata.append("name",name)
    formdata.append("email",email)
    formdata.append("password",password);
    formdata.append("profile",profile);
   
    let response = await axios.post("https://e-comerce-backend-git-main-vanita-chawlas-projects.vercel.app/auth/register", formdata);
    console.log(response);

    if(response.data.user){
      setName(""); setEmail(""); setPassword(""); setProfile("");
      localStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success("SignUp Successfull!")
      setTimeout(() => {
        navigate("/")
      }, 1000);
    }
  }

  return (
    <div className='mt-[8rem] flex flex-col justify-center gap-[1rem] max-w-[30rem] mx-auto'>
      <h2 className='mb-[1.5rem] font-semibold text-[#000]'>Register</h2>

      <p>
          Please fill in this form to create an account. or
          &nbsp;  <Link className='text-[#FF5252] font-semibold' to="/login">Login</Link>
        </p>

      <div className='w-full flex flex-col items-center gap-[1rem]'>
      <input type='text' placeholder='Enter Name' className='w-full py-[0.6rem] px-[1rem] border-solid border-[1px] border-black rounded' onChange={(e)=>setName(e.target.value)} value={name}/>

      <input type='text' placeholder='Enter Email' className='w-full py-[0.6rem] px-[1rem] border-solid border-[1px] border-black rounded' onChange={(e)=>setEmail(e.target.value)} value={email}/>

      <input type='password' placeholder='Enter Password' className='w-full py-[0.6rem] px-[1rem] border-solid border-[1px] border-black rounded' onChange={(e)=>setPassword(e.target.value)} value={password}/>

      <input type='file' name='profile' className='w-full py-[0.6rem] px-[1rem]'  onChange={(e)=>setProfile(e.target.files[0])}/>

      <button className='px-[1.5rem] py-[0.4rem] bg-[#FF5252] rounded mt-[1rem] text-white' onClick={handleData}>Signup</button>
      </div>
    </div>
  )
}

export default Signup;
