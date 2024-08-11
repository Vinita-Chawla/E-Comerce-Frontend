import React from 'react'

function Home() {
  return (
    <div className="homebg">
      <div className='flex justify-center items-start flex-col h-[100vh] pl-[2rem] gap-[1rem]'>
      <p className='font-medium text:xl md:text-2xl'>New Inspiration 2024</p>
      <h1 className='text-[#ff5252] font-semibold text-2xl sm:text-3xl md:text-5xl'>NEW COLLECTION!</h1>
      <p className='font-normal text-[0.9rem] sm:text-[1rem] md:text-[1.3rem]'>Trending from men's and women's style collection</p>
      <button className='px-[1.5rem] py-[0.6rem] text-[1.1rem] font-semibold bg-[#ff5252] rounded mt-[1rem] w-[9rem] text-white'>Shop Now</button>
      </div>
    </div>
  )
}

export default Home;


