import React, {useState} from 'react'
import concerns from '../api/Consernapi'

const Concern = () => {

    const [data, setdata] = useState(concerns);

    return (
        <>
            
                <section className=" container">
                    <div className="concern rounded-5">
                        <div className="row">
                            <div className="col-lg-5">
                                <img className="w-100" src="/images/concern.svg" alt="Concern-Img" />
                            </div>
                            <div className="col-lg-7">
                                <h2 className="">What are The Consumer's Concerns During Shopping</h2>
                                <div className="row justify-content-between pt-4 ">
                                    {
                                        data.map((curEle) => {
                                            const {id, logo, title, info} = curEle;
                                            return (
                                                <>
                                                        <div className="con-box col-12 col-lg-6 d-flex  align-items-center py-3 px- bg-white shadow my-4">
                                                            <img className="" src={logo} alt="logo" />
                                                            <div className="d-flex flex-column align-items-start">
                                                                <h6>{title}</h6>
                                                                <p className="m-0 ">{info}</p>
                                                            </div>
                                                        </div>
                                                </>
                                            )
                                        })
                                    }
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
           
        </>
    )
}

export default Concern
