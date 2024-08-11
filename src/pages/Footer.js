import React from 'react'

const Footer = () => {
  return (
    <>
    
         <footer className="footer marginTop">
        <div className="row">
            <div className="col d-flex">
                <h4>INFORMATION</h4>
                <div>
                <a href="">About us</a>
                <a href="">Contact Us</a>
                <a href="">Term & Conditions</a>
                <a href="">Shipping Guide</a>
                </div>
            </div>
            <div className="col d-flex">
                <h4>USEFUL LINK</h4>
                <div>
                <a href="">Online Store</a>
                <a href="">Customer Services</a>
                <a href="">Promotion</a>
                <a href="">Top Brands</a>
                </div>
            </div>
            <div className="col d-flex">
                <span><i className='bx bxl-facebook-square'></i></span>
                <span><i className='bx bxl-instagram-alt'></i></span>
                <span><i className='bx bxl-github'></i></span>
                <span><i className='bx bxl-twitter'></i></span>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
