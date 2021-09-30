import React from 'react'

const Footer = () => {
    return (
        <>
           <footer className="vw-100">
               <div className="container py-4">
                   <div className="row p-3 d-flex align-items-md-center">
                       <div className="col-12 col-lg-3 px-3">
                       <a className="" href="#"><img  src="./images/logo.svg" alt="Stegofy-logo" /></a>
                       <p className="mt-4 fw-light pe-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       <ul className="d-flex list-unstyled mt-5">
                           <li><i class="fab fa-instagram fs-3 me-4"></i></li>
                           <li><i class="fab fa-twitter fs-3 me-4"></i></li>
                           <li><i class="fab fa-linkedin-in fs-3 me-4"></i></li>
                           <li><i class="fab fa-facebook-f fs-4"></i></li>
                       </ul>
                       </div>

                       <div className="col-lg-5 row d-flex justify-content-center">
                           <div className="col-4 px-3">
                           <ul className="d-flex flex-column  list-unstyled mt-3">
                               <li className="mb-5 mb-lg-4"><a href="#" className="text-decoration-none ">Company</a></li>
                               <li className="mb-4"><a href="#" className="text-decoration-none fw-light">Blog</a></li>
                               <li className="mb-4"><a href="#" className="text-decoration-none fw-light">Carrers</a></li>
                               <li className="mb-4"><a href="#" className="text-decoration-none fw-light">About</a></li>
                           </ul>
                           </div>
                           <div className="col-4 px-3">
                           <ul className="d-flex flex-column align-items-start list-unstyled mt-3">
                               <li className="mb-5 mb-lg-4"><a href="#" className="text-decoration-none">Product</a></li>
                               <li className="mb-4"><a href="#" className="text-decoration-none fw-light">Watch Demo</a></li>
                               <li className="mb-4"><a href="#" className="text-decoration-none fw-light">Term of Service</a></li>
                               <li className="mb-4"><a href="#" className="text-decoration-none fw-light">Privacy Policy</a></li>
                           </ul>
                           </div>
                           <div className="col-4 px-3">
                           <ul className="d-flex flex-column list-unstyled mt-3">
                               <li className="mb-4"><a href="#" className="text-decoration-none">Help & Support</a></li>
                               <li className="mb-4"><a href="#" className="text-decoration-none fw-light">Report Bug</a></li>
                               <li className="mb-4"><a href="#" className="text-decoration-none fw-light">Share Feedback</a></li>
                               <li className="mb-4"><a href="#" className="text-decoration-none fw-light">Contact Supprot</a></li>
                           </ul>
                           </div>
                       </div>

                       <div className="col-12 col-lg-4 d-flex justify-content-end">
                            <div class="news-letter">
                                <p className="text-end">Subscribe to our Newsletter</p>
                                <div className="email border border-1 rounded-3 px-2 py-1">
                                    <i class="far fa-envelope"></i>
                                    <input type="email" className="form-control-email bg-transparent text-light p-2 shadow-none " placeholder="Enter Email Address" />
                                    <button class="btn btn-primary px-3" type="button" id="inputGroupFileAddon04">Button</button>
                                </div>
                                
                            </div>
                       </div>
                       
                       
                   </div>
                    <hr />
                    <p className="copyright text-center text-secondary">Copyright © 2020. Stegofy All rights reserved | Privacy policy | Refund and Cancellation policy | Tearms of Use | Cookies | Sitemap</p>
               </div>
            </footer> 
        </>
    )
}

export default Footer
