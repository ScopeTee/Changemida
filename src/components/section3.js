import React from "react";
import Button from 'react-bootstrap/Button';
import Photo9 from "../Images/image 9.png"
import Photo7 from "../Images/image 7.png"
import Photo6 from "../Images/image 6.png"
import Image from 'react-bootstrap/Image'
import Arrow from "../Images/Vector.png"



function Section3() {
    return ( 
        <section className="section-3">
            {/* <div className="divider"></div> */}
            <div className="contain s-3">
                <div class="section-2-text text-center px-5 mt-5 pt-5">
                    <div>
                        <h2 className="h2-1 my-3">Top up payments from your customers wallet</h2>
                        <p class="p-3"> Save time and speed up payments from your customers’s wallet</p>  
                        <Button className="btn-2 px-3 py-3">Create yout first wallet</Button>{' '}
                    </div>                
                </div>
                <div className="img-group d-flex align-items-center justify-content-center mt-5">
                    <div className="img-set-1 d-flex flex-column">
                    <Image
                        alt=""
                        src={Photo9}
                        width="345"
                        height="75"
                        className="d-inline-block align-top"
                        />{''}                   
                        <Image
                        alt=""
                        src={Photo7}
                        width="345"
                        height="171"
                        className="d-inline-block align-top"
                        />{''}
                    </div>
                    <div className="img-set-2">
                       <Image
                        alt=""
                        src={Photo6}
                        width="282"
                        height="330"
                        className="d-inline-block align-top"
                        />{''}
                    </div>

                </div>
                <Image
                        alt=""
                        src={Arrow}
                        width="95"
                        height="95"
                        className="d-inline-block align-top arrow-right"
                        />{''}
            </div>
            <div className="divider mt-5"></div>
        </section>
    );
}

export default Section3;