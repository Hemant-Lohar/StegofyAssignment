import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="herosection container" style={{ backgroundImage: "url(/images/vector.svg)"}}>

                <div className="hero d-flex " style={{ backgroundImage: "url(/images/hero-img.svg)"}}  >

                    <div className="title d-flex flex-column align-items-start">
                        <h1>Bring <span>Authencity</span> To Your Products</h1>
                        <p className="mt-5 fs-3">Securing the genunity of your brand and helping consumers buy smartly</p>

                        <button className="btn btn-primary rounded-pill mt-5 px-5 py-3 fs-5">Request Demo <i className="fas fa-arrow-right ms-2"></i></button>
                    </div>

                

                </div>
              
                    <img className="position-absolute bottom-0 end-0 box-1" src="/images/box-1.svg" alt="img" />
                    <img className="ring position-absolute bottom-0 end-0" src="/images/ring.svg" alt="img" />
                    <img className="position-absolute bottom-0 end-0 box-2" src="/images/box-2.svg" alt="img" />
            </div>
        </>
    )
}

export default Hero
