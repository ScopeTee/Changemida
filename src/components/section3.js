import React from "react";
import Button from 'react-bootstrap/Button';
// import Arrow from "../Images/Vector.png"
import Photo9 from "../Images/image 9.png"
import Photo7 from "../Images/image 7.png"
import Photo6 from "../Images/image 6.png"
import Image from 'react-bootstrap/Image'


function Section3() {
    return ( 
        <section className="section-3">
            <div className="divider"></div>
            <div className="contain s-3">
                <div class="section-2-text text-center px-5 mt-3 pt-5">
                    <div>
                        <h2 className="my-3">Top up payments from your customers wallet</h2>
                        <p class=""> Save time and speed up payments from your customers’s wallet</p>  
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
            </div>
            
        </section>
    );
}

export default Section3;