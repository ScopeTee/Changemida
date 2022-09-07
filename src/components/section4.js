import React from "react";
import {FourthSection, Divider2, FourthSectionContent, FourthSectionText, FourthSectionImg } from "../styles/Section4.styled";
import { Container } from "../styles/Container.styled";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Photo8 from "../Images/image 8.png"



function Section4() {
    return ( 
        <FourthSection className="mt-5">
            <Divider2></Divider2>
                <Container>           
                    <FourthSectionContent> 
                        <FourthSectionText className="px-5 pe-5">
                                <h2 className=" h2 my-3 mt-5 pt-3">Engage your customers wherever they are.</h2>
                                <p class="p-2">Whether you are having a huge sale or just want to wish them a happy new month.</p>  
                                <Button variant="light" className="mx-3 px-5 px-3 py-3 btn-1">Create yout first wallet</Button>{' '}
                        </FourthSectionText>
                        <FourthSectionImg className="s4-bg-img">
                            <Image
                            alt=""
                            src={Photo8}
                            width=""
                            height="348"
                            className="d-inline-block align-top s4-img pt-5"
                            />{''}
                        </FourthSectionImg>
                    </FourthSectionContent>  
                </Container>
        </FourthSection>
    );
}

export default Section4;