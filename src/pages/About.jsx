import React from 'react'

const About = () => {
  return (
    <>
    <section className='marginTop'>
    <div className='about'>
      <h1 className="mainHeading">About</h1>
      <div className='about_below'>
      <h5>Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</h5>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet porta sem, interdum tincidunt libero. Nulla vel quam lobortis, varius est scelerisque, dapibus nisl.</p>
     </div>
     </div>
      </section> 

      <section className="newCollection marginTop">
        <div className="collection_overlay overlay2"></div>
        <div className="newcollection_content background">
          <p className="white">The Mission</p>
          <h1 className="white">At the heart of everything, we set out to offer the best quality.</h1>
          <h2 className="white">Find your unique style.</h2>
        </div>
      </section>

      <section className='marginTop'>
    <div className='about'>
      <h1 className="mainHeading">How it Started</h1>
      <div className='about_below'>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet porta sem, interdum tincidunt libero. Nulla vel quam lobortis, varius est scelerisque, dapibus nisl.</p>
     </div>
     </div>
      </section> 

      <section className='container'>
    <div className='detailContainer bgColor'>
    <div className='productDetail detailpadding'>
      <h1>Vel mauris molestie dignissim</h1>
      <h5>Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</h5>
      <p>Praesent vel faucibus ligula. Sed sit amet ipsum eget velit aliquet faucibus. Maecenas et odio id turpis sollicitudin pulvinar sit amet vitae augue. Phasellus nec ultricies arcu. Quisque efficitur tellus sit amet bibendum molestie. Duis id egestas odio. Phasellus lacinia ex quis faucibus tempor. Sed feugia.</p>
    </div>
    <div className='productImg'>
      <img src="./img/started.png" alt=''/>
    </div>
    </div>
    </section>
    </>
  )
}

export default About
