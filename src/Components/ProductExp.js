import React, {useState} from 'react'
import productExpapi from '../api/ProductExpapi';

const ProductExp = () => {

    const [data, setdata] = useState(productExpapi);

    return (
        <>
            <section className="container product-box">
                <div className="p-title">
                    <h1 className="text-center lh-base">One Scan to Trigger Consumers <span>360°</span> Product Experiences</h1>
                    <p className="text-center">With Stegofy solution, your product packaging and labelling no longer provides a static content and Making your consumers choose your product over a competitors.</p>
                </div>

                <div className="row d-flex ">

                    {
                        
                        data.map((curEle) => {

                            const {id, logo, title, info} = curEle;

                            return (
                                <>
                                <div className="col-12 col-lg-3 p-4">
                                    <div className="p-card p-4">
                                    <img className="mx-auto d-block pb-4" src={logo} alt="logo" />
                                        <div>
                                            <h5 className="text-center fw-bold">{title}</h5>
                                            <p className="m-0 text-center py-2">{info}</p>
                                        </div>
                                    </div>
                                </div>
                                </>

                            )

                        })
                        

                    }

                   

                </div>
            </section>
            
        </>
    )
}

export default ProductExp
