import React, {useState} from 'react'
const Navbar = () => {

    const [show, setshow] = useState(false)

    return (
        <>
            <section className= "navbar-bg"> 
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
                          <div className="container">
                      <a class="navbar-brand" href="#"><img src="./images/logo.svg" alt="Stegofy-logo" /></a>

                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                      onClick={() => setshow(!show)}>
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      
                      <div className={`collapse navbar-collapse ${show ? "show" : " " }`} >
                        <ul className="navbar-nav ms-auto mt-4 mb-2 mb-lg-0">
                            
                          <li className="nav-item ">
                            <a className="nav-link " aria-current="page" href="#">Pricing</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">FAQs</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Our Journey</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                          </li>
                          <li className="nav-item">
                          <button className="btn btn-primary rounded-pill px-4 my-2 my-md-0" type="submit"><i className="fas fa-qrcode me-2"></i>Verify</button>
                          </li>
                          <li class="nav-item">
                          <button className="btn btn-outline-primary rounded-pill px-4 my-2 my-md-0" type="submit">Login</button>
                          </li>

                        </ul>
                      </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar
