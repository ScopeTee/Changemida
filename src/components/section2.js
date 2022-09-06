import React from "react";
import { SecondSection } from "../styles/Section2.styled";
import { Container } from "../styles/Container.styled";
import Button from 'react-bootstrap/Button';
import Arrow from "../Images/Arrow-Vector.png"
import Naira from "../Images/Naira-Vector.png"
import Photo2 from "../Images/image 5.png"
import Image from 'react-bootstrap/Image'


function Section2() {
    return (
        <SecondSection className="pt-5">
            <Container>
                <div class="mt-5 d-flex align-items-center justify-content-between">
                    <div class="section-2-text text-start px-5">
                        <h2 className="h2 my-3">Breaking a N1,000 <br /> but don’t have change</h2>
                        <p class="p-2">Forget writing on receipts or keeping a separate book. Send it to your customers phone number</p>  
                        <Button className="btn-2 px-3 py-3">Create yout first wallet</Button>{' '}
                    </div>
                    <div class="section-2-img">
                        <Image
                            alt=""
                            src={Arrow}
                            width="28"
                            height="28"
                            className="d-inline-block align-top arrow"
                        />{''}    
                        <Image
                            alt=""
                            src={Photo2}
                            width="450"
                            height="228"
                            className="d-inline-block align-top"
                        />{''}
                        <div className="d-1" >
                            <div className="d-2" >
                                <div className="d-3" >
                                    <div className="d-4" >
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
                        </div>   
                    </div>
                </div>
            </Container>
        </SecondSection>
    );
}

export default Section2;