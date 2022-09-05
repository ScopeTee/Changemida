import React from "react";
import Button from 'react-bootstrap/Button';
// import Photo9 from "../Images/image 9.png"
// import Photo7 from "../Images/image 7.png"
// import Photo6 from "../Images/image 6.png"
import Image from 'react-bootstrap/Image'
import Photo8 from "../Images/image 8.png"

// import Arrow from "../Images/Vector.png"



function Section4() {
    return ( 
        <section className="section-4 mt-5">
            <div className="divider-2 "></div>
            <div className="contain s-4">

                {/* <div className="d-flex"> */}
                    {/* <div className="mt-5 d-flex align-items-center justify-content-between"> */}
                        <div className="section-4-text text-start px-5 pe-5">
                                <h2 className=" h2 my-3">Engage your customers wherever they are.</h2>
                                <p class="p-2">Whether you are having a huge sale or just want to wish them a happy new month.</p>  
                                <Button variant="light" className="mx-3 px-5 px-3 py-3 btn-1">Create yout first wallet</Button>{' '}
                        </div>
                        <div className="s4-bg-img">
                            <Image
                            alt=""
                            src={Photo8}
                            width=""
                            height="348"
                            className="d-inline-block align-top s4-img ms-4 pt-5"
                            />{''}
                        </div>
                    {/* </div> */}
                {/* </div>          */}
            </div>  
        </section>
    );
}

export default Section4;