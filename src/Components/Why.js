import React, {useState} from 'react'
import whyapi from '../api/Whyapi'

const Why = () => {
    
    const [data, setdata] = useState(whyapi)

    return (
        <>
            <section className="container p-5">
                <div className="row why-box py-5">
                    <div className="col-12 col-lg-4 px-0"> 
                        <img src="./images/hand.svg" alt="mobile-img"/>
                    </div>

                    <div className="col-12 col-lg-8 d-flex flex-column justify-content-center p-3">
                        <div className=" ms-lg-5 ms-3 px-lg-5">
                            <h1>Why choose <span>Stegofy?</span></h1>
                            <p className="mt-3 fs-5">Stegofy platform is the secure, reliable and convenient one-stop solution for all your brand and product management needs</p>
                            <button className="btn btn-primary rounded-pill mt-3 mb-5 px-5 py-3 ">Learn More</button>

                            {
                                data.map((curEle) => {
                                    const {id, logo, title, info} = curEle;

                                    return(
                                        <>
                                            <div className="d-flex py-4 ">
                                                <img src={logo} alt="icon" />

                                                <div className="px-4">
                                                    <h5 className="fw-bold">{title}</h5>
                                                    <p className="m-0 py-1 ">{info}</p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Why
