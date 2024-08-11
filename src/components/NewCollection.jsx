import React from "react";

const NewCollection = () => {
  return (
    <>
      <section className="marginTop" id="baseCollection">
        <div className="baseCollection">
          <div className="baseLeft">
            <img src="./img/cat1.jpg" />
            <h1>The base collection - Ideal every day.</h1>
            <button className='px-[1.5rem] py-[0.6rem] text-[1.1rem] font-semibold bg-[#ff5252] rounded mt-[1rem] w-[9rem] text-white'>Shop Now</button>
          </div>
          <div className="baseRight">
            <img src="./img/cat2.jpg" />
          </div>
        </div>
      </section>

      <section className="newCollection marginTop">
        <div className="collection_overlay"></div>
        <div className="newcollection_content">
          <p className="white">New Collection</p>
          <h1 className="white">Be different in your own way!</h1>
          <h2 className="white">Find your unique style.</h2>
          <button className='px-[1.5rem] py-[0.6rem] text-[1.1rem] font-semibold bg-[#ff5252] rounded mt-[1rem] w-[9rem] text-white z-1'>Shop Now</button>
        </div>
      </section>

     


    </>
  );
};

export default NewCollection;
