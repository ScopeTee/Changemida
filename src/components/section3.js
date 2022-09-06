import React from "react";
import { ThirdSection, ThirdSectionImg, ImgSetOne, OverlayArrow} from "../styles/Section3.styled";
import { Container } from "../styles/Container.styled";
import Button from 'react-bootstrap/Button';
import Photo9 from "../Images/image 9.png"
import Photo7 from "../Images/image 7.png"
import Photo6 from "../Images/image 6.png"
import Image from 'react-bootstrap/Image'
import Arrow from "../Images/Vector.png"



function Section3() {
    return ( 
        <Container>
            <ThirdSection className="my-5">
                <Container>                
                    <div class="text-center px-5 mt-5 pt-5">
                            <h2 className="h2-1 my-3">Top up payments from your customers wallet</h2>
                            <p class="p-3"> Save time and speed up payments from your customers’s wallet</p>  
                            <Button className="btn-2 px-3 py-3">Create yout first wallet</Button>{' '}
                    </div>
                    <ThirdSectionImg className="mt-5">
                        <ImgSetOne>
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
                            </ImgSetOne>
                        <div>
                        <Image
                            alt=""
                            src={Photo6}
                            width="282"
                            height="330"
                            className="d-inline-block align-top"
                            />{''}
                        </div>
                    </ThirdSectionImg>
                    <OverlayArrow>
                    <Image
                            alt=""
                            src={Arrow}
                            width="95"
                            height="95"
                            className="d-inline-block align-top"
                            />{''}
                    </OverlayArrow>
                <div className="divider mt-5"></div>
            </Container>
        </ThirdSection>
    </Container>
    );
}

export default Section3;