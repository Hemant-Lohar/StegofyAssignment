import React, {useState} from 'react'
import workapi from '../api/Workapi'

const Work = () => {

    const [data, setdata] = useState(workapi)

    return (
        <>
            <section className="work container mt-5">
                <h1 className="how text-center">How it works</h1>

                <div className="d-flex justify-content-center flex-wrap">

                    {
                        data.map((curEle) => {

                            const {id, title, info, logo} = curEle; 
                            return (
                                <>
                                    <div className="w-card p-5">
                                    <img className="mx-auto d-block pb-4" src={logo} alt="logo" />
                                        <div>
                                            <h4 className="text-center">{title}</h4>
                                            <p className="m-0 text-center py-2">{info}</p>
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

export default Work
