import React from "react";
import Button from 'react-bootstrap/Button';
import Arrow from "../Images/Vector.png"
import Naira from "../Images/Vector-1.png"
import Photo2 from "../Images/image 5.png"
import Image from 'react-bootstrap/Image'


function Section2() {
    return ( 
        <section className="section-2 pt-5">
            <div className="contain">
                <div class="mt-5 d-flex align-items-center justify-content-between">
                    <div class="section-2-text text-start px-5">
                        <div>
                            <h2 className=" h2 my-3">Breaking a N1,000 <br /> but don’t have change</h2>
                            <p class="p-2">Forget writing on receipts or keeping a separate book. Send it to your customers phone number</p>  
                            <Button className="btn-2 px-3 py-3">Create yout first wallet</Button>{' '}
                        </div>                
                    </div>
                    <div class="section-2-img">
                    <Image
                        alt=""
                        src={Arrow}
                        width="28"
                        height="28"
                        className="d-inline-block align-top"
                        />{''}    
                        <Image
                        alt=""
                        src={Photo2}
                        width="450"
                        height="228"
                        className="d-inline-block align-top"
                        />{''}    
                        <Image
                        alt=""
                        src={Naira}
                        width="28"
                        height="28"
                        className="d-inline-block align-top naira-img"
                        />{''}        
                    </div>
      
                </div>
            </div>
            
        </section>
    );
}

export default Section2;