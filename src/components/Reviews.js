import React from 'react'

const Reviews = () => {
  return (
    <>
       <section>
      <div id="reviews" className="container marginTop">
        <div className="reviewtitle">
            <h1 className="mainHeading">Client Reviews</h1>
           <p><a>"Your satisfaction is our priority. Let our exceptional service speak for itself, crafting experiences that exceed expectations and leave a lasting positive impression."</a></p>
        </div>
        <div className='reviews container'>

        <div className='review'>
        <img src='./img/review1.jpg'/>
        <div className='reviewName'>
            <h1>Betty Crocker</h1>
            <p>St. James, NY</p>
        </div>
        </div>

        <div className='review'>
        <img src='./img/review2.jpg'/>
        <div className='reviewName'>
        <h1>James Smith</h1>
        <p>Smithtown, NY</p>
        </div>
        </div>

        </div>
        
    </div>
      </section>


    </>
  )
}

export default Reviews
