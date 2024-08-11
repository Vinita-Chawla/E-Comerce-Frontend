import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    
         <footer className="footer marginTop">
        <div className="row">
            <div className="col d-flex">
                <h4>INFORMATION</h4>
                <div>
                <Link>About us</Link>
                <Link>Contact Us</Link>
                <Link>Term & Conditions</Link>
                <Link>Shipping Guide</Link>
                </div>
            </div>
            <div className="col d-flex">
                <h4>USEFUL LINK</h4>
                <div>
                <Link>Online Store</Link>
                <Link>Customer Services</Link>
                <Link>Promotion</Link>
                <Link>Top Brands</Link>
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
